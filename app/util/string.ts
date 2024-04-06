export function capitalise(
  s: string
): string {
  return `${s.charAt(0).toUpperCase()}${s.slice(1)}`
}

export function pluralise(
  s: string
): string {
  if ("f" === s.slice(-1)) {
    return s.replace(/f+$/, "ves")
  }
  if (["ss", "zz"].includes(s.slice(-2))) {
    return `${s}es`
  }
  return `${s}s`
}
