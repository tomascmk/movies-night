import type { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import axios from 'axios'
import { ConfigurationService } from './ConfigurationService'
import type {
  ApiDataResponse,
  ApiDataResponsePaginated,
  ApiErrorResponse,
  ApiResponse
} from '../core/ApiResponses'
import { SearchTitlesParams } from '../types/ApiTypes'

export enum ApplicationId {
  Tmdb = 'Tmdb',
  SA = 'SA',
  Ipify = 'Ipify',
  IpLocation = 'IpLocation'
}

export enum AppType {
  Tmdb = 'Tmdb',
  SA = 'SA',
  Ipify = 'Ipify',
  IpLocation = 'IpLocation'
}

export enum HttpMethod {
  Delete,
  Get,
  Patch,
  Post,
  Put
}

export class ErrorApiException extends Error {
  error: ApiErrorResponse
  response: AxiosResponse<ApiErrorResponse>
  constructor(
    error: ApiErrorResponse,
    response: AxiosResponse<ApiErrorResponse>,
    message?: string
  ) {
    super(message)
    this.error = error
    this.response = response
  }
}

export class RequestConfig<T = object> {
  headers?: { [headerId: string]: string }
  responseType?: ResponseType
  params?: T
  signal?: AbortSignal
}

export type ResponseType =
  | 'arraybuffer'
  | 'blob'
  | 'document'
  | 'json'
  | 'text'
  | 'stream'

const getParams = (params: SearchTitlesParams | undefined): string => {
  if (!params) return ''
  let paramsString = '&'
  const keys = Object.keys(params)
  const values = Object.values(params)

  keys.forEach(
    (key, i) =>
      (paramsString =
        paramsString +
        `${key}=${
          typeof values[i] === 'string'
            ? values[i].split(' ').join('%20')
            : values[i]
        }&`)
  )
  return paramsString.slice(0, -1)
}

const getResponse = async <ResT, ReqT>(
  httpMethod: HttpMethod,
  relativeUrl: string,
  data?: ReqT,
  appType?: AppType,
  config: RequestConfig = {},
  _paginated?: boolean,
  params?: any
): Promise<ResT> => {
  let fullUrl: string
  const axiosRequestConfig: AxiosRequestConfig | undefined = config
  switch (appType) {
    case AppType.Tmdb:
      fullUrl = `${
        ConfigurationService.AppSettings.BaseUrlTmdb
      }${relativeUrl}api_key=${import.meta.env.TMDB_API_KEY}${getParams(
        params
      )}`
      if (!axiosRequestConfig.headers) {
        axiosRequestConfig.headers = {}
      }
      break
    case AppType.SA:
      fullUrl = `${
        ConfigurationService.AppSettings.BaseUrlSA
      }${relativeUrl}${getParams(params)}`
      if (!axiosRequestConfig.headers) {
        axiosRequestConfig.headers = {}
      }
      ;(axiosRequestConfig.headers['X-RapidAPI-Key'] =
        'b7272af9famsh466d37df6493dedp13eaabjsnfeddc25dada0'),
        (axiosRequestConfig.headers['X-RapidAPI-Host'] =
          'streaming-availability.p.rapidapi.com')
      break
    case AppType.Ipify:
      fullUrl = `${ConfigurationService.AppSettings.BaseUrlIpify}`
      if (!axiosRequestConfig.headers) {
        axiosRequestConfig.headers = {}
      }
      break
    case AppType.IpLocation:
      fullUrl = `${
        ConfigurationService.AppSettings.BaseUrlIpLocation
      }${getParams(params)}`
      if (!axiosRequestConfig.headers) {
        axiosRequestConfig.headers = {}
      }
      ;(axiosRequestConfig.headers['content-type'] =
        'application/x-www-form-urlencoded'),
        (axiosRequestConfig.headers['X-RapidAPI-Key'] =
          'b7272af9famsh466d37df6493dedp13eaabjsnfeddc25dada0'),
        (axiosRequestConfig.headers['X-RapidAPI-Host'] =
          'ip-location5.p.rapidapi.com')

      break
    default:
      fullUrl = `${ConfigurationService.AppSettings.BaseUrlTmdb}${relativeUrl}`
  }

  switch (httpMethod) {
    case HttpMethod.Get: {
      try {
        // TODO: Remove the ANY but we need to revaluate the responses "message" vs "data" as both could be returned instead of an any.
        const response: any = await axios.get<ApiResponse<ResT>>(
          fullUrl,
          axiosRequestConfig
        )
        return response?.data ?? []
      } catch (error: any) {
        handleError(error as AxiosError<ApiErrorResponse>, 'GET')
      }
    }

    case HttpMethod.Post: {
      try {
        type DataResponse =
          | ApiDataResponse<ResT>
          | ApiDataResponsePaginated<ResT>
        // TODO: Remove the ANY but we need to revaluate the responses and the use of the boolean paginated.
        const response: any = await axios.post<
          ReqT,
          AxiosResponse<DataResponse>
        >(fullUrl, data, axiosRequestConfig)
        return response?.data ?? []
      } catch (error: any) {
        handleError(
          error as AxiosError<ApiErrorResponse>,
          'POST',
          fullUrl,
          data
        )
      }
    }

    case HttpMethod.Put: {
      try {
        const response = await axios.put<
          ReqT,
          AxiosResponse<ApiDataResponse<ResT>>
        >(fullUrl, data, axiosRequestConfig)
        return response?.data?.data
      } catch (error: any) {
        handleError(error as AxiosError<ApiErrorResponse>, 'PUT', fullUrl, data)
      }
    }

    case HttpMethod.Patch: {
      try {
        const response = await axios.patch<
          ReqT,
          AxiosResponse<ApiDataResponse<ResT>>
        >(fullUrl, data, axiosRequestConfig)
        return response?.data?.data
      } catch (error: any) {
        handleError(
          error as AxiosError<ApiErrorResponse>,
          'PATCH',
          fullUrl,
          data
        )
      }
    }

    case HttpMethod.Delete: {
      try {
        const response = await axios.delete<
          ReqT,
          AxiosResponse<ApiDataResponse<ResT>>
        >(fullUrl, axiosRequestConfig)
        return response?.data?.data
      } catch (error: any) {
        handleError(
          error as AxiosError<ApiErrorResponse>,
          'DELETE',
          fullUrl,
          data
        )
      }
    }

    default:
      throw 'Invalid HTTP Method ' + httpMethod
  }
}

export const handleError = <ReqT>(
  error: AxiosError<ApiErrorResponse>,
  _method: string,
  fullUrl = '',
  data?: ReqT
): void => {
  if (error.response) {
    console.error(
      `Error in request. Error Code: ${
        error.response.status
      } URL requested: ${fullUrl} Payload: ${JSON.stringify(data)}`
    )
    throw new ErrorApiException(
      error.response.data,
      error.response,
      error.response.data?.message
    )
  } else {
    console.error(
      `Error in request. Error: ${
        error.message
      } URL requested: ${fullUrl} Payload: ${JSON.stringify(data)}`
    )
    throw error
  }
}

// TODO: Enable call aborting
export const apiPost = async <ReqT, ResT>(
  url: string,
  appType: AppType = AppType.Tmdb,
  data?: ReqT,
  requestConfig?: RequestConfig,
  paginated?: boolean
): Promise<ResT> =>
  await getResponse(
    HttpMethod.Post,
    url,
    data,
    appType,
    requestConfig,
    paginated
  )
export const apiPut = async <ReqT, ResT>(
  url: string,
  data?: ReqT,
  appType: AppType = AppType.Tmdb,
  requestConfig?: RequestConfig
): Promise<ResT> =>
  await getResponse(HttpMethod.Put, url, data, appType, requestConfig)
export const apiPatch = async <ReqT, ResT>(
  url: string,
  data?: ReqT,
  appType: AppType = AppType.Tmdb,
  requestConfig?: RequestConfig
): Promise<ResT> =>
  await getResponse(HttpMethod.Patch, url, data, appType, requestConfig)
export const apiGet = async <ResT>(
  url: string,
  appType: AppType = AppType.Tmdb,
  params?: any,
  requestConfig?: RequestConfig,
  paginated?: boolean
): Promise<ResT> =>
  await getResponse(
    HttpMethod.Get,
    url,
    undefined,
    appType,
    requestConfig,
    paginated,
    params
  )
export const apiDelete = async <ResT>(
  url: string,
  appType: AppType = AppType.Tmdb,
  requestConfig?: RequestConfig
): Promise<ResT> =>
  await getResponse(HttpMethod.Delete, url, undefined, appType, requestConfig)

export enum Status {
  Loading = 0,
  Loaded,
  Error,
  Unauthorized
}
