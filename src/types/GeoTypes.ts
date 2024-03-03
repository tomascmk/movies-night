export interface ContinentInfo {
  code: string
  name: string
}

export interface CountryInfo {
  capital: string
  code: string
  currency: string
  name: string
  phoneCode: string
}

export interface GeoInfo {
  city: string
  continent: ContinentInfo
  country: CountryInfo
  ip: string
  latitude: string
  longitude: string
  region: string
}
