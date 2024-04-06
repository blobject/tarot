export const capitalise = (
  s: string
): string =>
  `${s.charAt(0).toUpperCase()}${s.slice(1)}`

export const pluralise = (
  s: string
): string => {
  if ("f" === s.slice(-1)) {
    return s.replace(/f+$/, "ves")
  }
  if (["ss", "zz"].includes(s.slice(-2))) {
    return `${s}es`
  }
  return `${s}s`
}
