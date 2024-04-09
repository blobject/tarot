export function capitalise(
  s: string
): string {
  return `${s.charAt(0).toUpperCase()}${s.slice(1)}`
}

export function pluralise(
  s: string
): string {
  const last = s.slice(-1)
  if ("f" === last) {
    return s.replace(/f+$/, "ves")
  }
  if ("y" === last) {
    return s.replace(/y+$/, "ies")
  }
  if (["x", "s", "z"].includes(last)) {
    return `${s}es`
  }
  return `${s}s`
}
