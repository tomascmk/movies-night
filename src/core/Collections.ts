export type Dictionary<T> = Record<string, T | undefined>

export type StringDictionary = Dictionary<string>

export interface Tree<T> {
  /**
   * JS expression that when reduced yields a number which corresponds with the index of the child to go to
   */
  expression?: string
  value?: T
  children?: Array<Tree<T>>
}
