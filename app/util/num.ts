import {MajorNum, PipNum} from "../type/num"
import {numerals, pips} from "../db/names"
import {capitalise} from "./string"

export const getNumeral = (
  num: MajorNum
): string => {
  const numeral = numerals[num]
  return numeral.toUpperCase()
}

export const getPip = (
  num: PipNum
): string => {
  const nyms = pips[num]
  const pip = nyms[0]
  return capitalise(pip)
}
