export const arrUtil = {
  findIndex: (key: number | string, value: any) => {
    return value.findIndex((idx: string | number) => idx === key)
  }
}