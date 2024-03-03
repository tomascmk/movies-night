import { GeoInfo } from '../types/GeoTypes'
import { AppType, apiGet, apiPost } from './BaseService'

export abstract class UserService {
  static getUserIp = async (): Promise<string> => {
    try {
      const response = await apiGet<any>('', AppType.Ipify)
      return response.ip
    } catch (error: any) {
      console.log('Error on getUserIp', error)
      throw error
    }
  }

  static getCountryCodeByIp = async (ip: string): Promise<string> => {
    try {
      const response = (await apiPost('', AppType.IpLocation, {
        ip
      })) as GeoInfo
      const countryCode = response.country.code
      return countryCode
    } catch (error: any) {
      console.log('Error on getCountryCodeByIp', error)
      throw error
    }
  }
}
