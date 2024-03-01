import { config } from '../config'

export class ConfigService {
  AppSettings = config
}

const instance = new ConfigService()
export const ConfigurationService = instance
