/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
import type { Dictionary } from '../core/Collections'

export abstract class EnvConfigHelper {
  static readEnvString = (env: Dictionary<string>, key: string): string => {
    return env[key] as string
  }

  static readEnvInt = (
    env: Dictionary<string>,
    key: string,
    defaultValue = 0
  ): number => {
    try {
      return env[key] !== undefined
        ? parseInt(env[key] as string)
        : defaultValue
    } catch {
      throw new Error(`Configuration value for ${key} must be an integer.`)
    }
  }

  static readEnvFloat = (env: Dictionary<string>, key: string): number => {
    try {
      return parseFloat(env[key] as string)
    } catch {
      throw new Error(`Configuration value for ${key} must be a float.`)
    }
  }

  static readEnvBoolean = (env: Dictionary<string>, key: string): boolean => {
    if (env[key] === undefined) {
      throw new Error(`Key '${key}' not found in env file.`)
    }
    try {
      const value = (env[key] as string).toLowerCase()
      if (value === 'true' || value === '1') {
        return true
      } else if (value === 'false' || value === '0') {
        return false
      }
      throw new Error()
    } catch {
      throw new Error(`Configuration value for ${key} must be true or false.`)
    }
  }

  static readEnvJSON = <T>(env: Dictionary<string>, key: string): T => {
    const json = (env[key] as string) ?? '{}'
    return JSON.parse(json)
  }

  static readEnvArray = <T>(env: Dictionary<string>, key: string): T[] => {
    const array = (env[key] as string)?.split(',') ?? []
    return array.map((item: any) => {
      return item as T
    })
  }
}
