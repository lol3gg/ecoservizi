/** Path asset public compatibile con GitHub Pages (base /ecoservizi/) */
export function asset(path: string): string {
  const clean = path.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${clean}`
}
