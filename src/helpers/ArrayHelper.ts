export abstract class ArrayHelper {
  static deleteDuplicates = (data: any[]): any[] => {
    return data.filter((value, i) => data.indexOf(value) === i)
  }
}
