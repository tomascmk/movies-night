import type { Dictionary } from './core/Collections'
import { EnvConfigHelper } from './helpers/EnvConfigHelper'

export class BaseConfigProcessor {
  processConfig(): AppSettingsBase {
    return {
      TmdbKeyId: import.meta.env.TMDB_API_KEY,
      BaseUrlTmdb: import.meta.env.TMDB_BASE_URL_TMDB
    }
  }
}

export interface AppSettingsBase {
  TmdbKeyId: string
  BaseUrlTmdb: string
}

const configProcessor = new BaseConfigProcessor()
export const config = configProcessor.processConfig()
