import { asset } from '../lib/asset'

export type GalleryImage = {
  id: string
  src: string
  alt: string
}

export const galleryImages: GalleryImage[] = Array.from({ length: 22 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  return {
    id: n,
    src: asset(`images/gallery/depot-${n}.jpg`),
    alt: `Deposito ECO SERVIZI JMC — attività e materiali (${n}/22)`,
  }
})

export const GALLERY_PREVIEW_COUNT = 2
