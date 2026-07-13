export const COMPANY_ADDRESS = {
  street: 'Via del Lavoro',
  area: 'Pian di Rose',
  city: 'Fossombrone',
  province: 'PU',
  postalCode: '61034',
  country: 'Italia',
} as const

export const COMPANY_ADDRESS_SHORT = 'Via del Lavoro, Pian di Rose · Fossombrone (PU)'

export const COMPANY_ADDRESS_FULL =
  'Via del Lavoro, Pian di Rose, 61034 Fossombrone (PU), Italia'

export const COMPANY_MAPS_QUERY = 'Via del Lavoro, Pian di Rose, Fossombrone PU'

export const COMPANY_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_MAPS_QUERY)}`

export const COMPANY_MAPS_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(COMPANY_MAPS_QUERY)}&z=15&ie=UTF8&iwloc=&output=embed`
