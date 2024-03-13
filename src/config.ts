/* import type { Dictionary } from './core/Collections'
import { EnvConfigHelper } from './helpers/EnvConfigHelper' */

export class BaseConfigProcessor {
  processConfig(): AppSettingsBase {
    return {
      TmdbKeyId: import.meta.env.TMDB_API_KEY,
      BaseUrlTmdb: import.meta.env.TMDB_BASE_URL,
      BaseUrlSA: import.meta.env.SA_BASE_URL,
      BaseUrlIpify: import.meta.env.IPIFY_BASE_URL,
      BaseUrlIpLocation: import.meta.env.IPLOCATION_BASE_URL,
      BaseUrlApi: import.meta.env.API_BACK
    }
  }
}

export interface AppSettingsBase {
  TmdbKeyId: string
  BaseUrlTmdb: string
  BaseUrlSA: string
  BaseUrlIpify: string
  BaseUrlIpLocation: string
  BaseUrlApi: string
}

const configProcessor = new BaseConfigProcessor()
export const config = configProcessor.processConfig()
