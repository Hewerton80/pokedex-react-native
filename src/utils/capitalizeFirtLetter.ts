import { isString } from './isType'

export const capitalizeFirstLetter = (string: string | undefined) => {
  if (isString(string)) {
    // console.log(string!.charAt(0).toUpperCase() + string!.slice(1))
    return string!.charAt(0).toUpperCase() + string!.slice(1)
  }
  return undefined
}
