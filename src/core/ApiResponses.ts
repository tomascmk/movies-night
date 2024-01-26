export type ApiResponse<T> =
  | ApiMessageResponse
  | ApiDataResponse<T>
  | ApiErrorResponse

export interface ApiErrorResponse {
  result: string
  message?: string
  data?: any
  error?: Error
}

export interface ApiMessageResponse {
  result: string
  message: string
}

export interface ApiDataResponse<TData> {
  result: string
  data: TData
}

export type ApiDataResponsePaginated<
  TData,
  TAdditionalData = unknown
> = ApiDataResponse<TData[]> & {
  size: number
  totalCount: number
  offset: number
  nextUrl?: string
  additionalData?: TAdditionalData
}
