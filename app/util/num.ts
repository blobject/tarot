import {numerals, pips} from "../lib/names"
import {MajorNum, PipNum} from "../type/num"
import {capitalise} from "./string"

export function getNumeral(
  num: MajorNum
): string {
  const numeral = numerals[num]
  return numeral.toUpperCase()
}

export function getPip(
  num: PipNum
): string {
  const nyms = pips[num]
  const pip = nyms[0]
  return capitalise(pip)
}
