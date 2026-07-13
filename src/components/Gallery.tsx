import { useCallback, useEffect, useState } from 'react'
import { galleryImages, GALLERY_PREVIEW_COUNT } from '../data/gallery'
import SectionIntro from './SectionIntro'

export default function Gallery() {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const preview = galleryImages.slice(0, GALLERY_PREVIEW_COUNT)
  const remaining = galleryImages.length - GALLERY_PREVIEW_COUNT

  const closeAll = useCallback(() => {
    setOpen(false)
    setActiveIndex(null)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAll()
      if (activeIndex !== null) {
        if (e.key === 'ArrowRight') setActiveIndex((i) => (i! + 1) % galleryImages.length)
        if (e.key === 'ArrowLeft') setActiveIndex((i) => (i! - 1 + galleryImages.length) % galleryImages.length)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeIndex, closeAll])

  useEffect(() => {
    document.body.style.overflow = open || activeIndex !== null ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open, activeIndex])

  return (
    <section id="galleria" className="section-y bg-ink-soft">
      <div className="container-page">
        <SectionIntro
          align="center"
          wide
          label="Dal nostro deposito"
          labelClassName="text-brand-green"
          title="Le nostre attività sul campo"
          description="Ritiri, stoccaggio e gestione dei materiali nel nostro deposito in Via del Lavoro, Pian di Rose (Fossombrone). Ecco alcune immagini delle operazioni quotidiane."
        />

        <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:mt-14 lg:grid-cols-4 lg:gap-4 xl:gap-5">
          {preview.map((image) => (
            <button
              key={image.id}
              type="button"
              onClick={() => {
                setOpen(true)
                setActiveIndex(galleryImages.findIndex((img) => img.id === image.id))
              }}
              className="ticket-edge group relative aspect-[4/3] overflow-hidden border border-paper/15 bg-ink-soft pt-1 text-left"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <span className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/20" aria-hidden="true" />
            </button>
          ))}

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`Vedi tutte le ${galleryImages.length} foto`}
            className="ticket-edge relative flex aspect-[4/3] flex-col items-center justify-center border border-paper/20 bg-ink-soft pt-1 transition-colors hover:border-brand-green hover:bg-ink"
          >
            {galleryImages[GALLERY_PREVIEW_COUNT] && (
              <img
                src={galleryImages[GALLERY_PREVIEW_COUNT].src}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-30"
                loading="lazy"
                aria-hidden="true"
              />
            )}
            <span className="relative z-10 font-display text-2xl font-bold text-brand-green min-[375px]:text-3xl sm:text-4xl lg:text-5xl">
              +{remaining}
            </span>
            <span className="relative z-10 mt-1 px-1 text-center font-mono text-[9px] uppercase leading-tight tracking-widest text-paper min-[375px]:mt-2 min-[375px]:px-2 min-[375px]:text-[10px] sm:text-xs">
              Vedi tutte
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-ink/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Galleria fotografica deposito"
        >
          <div className="safe-top safe-x flex shrink-0 items-center justify-between border-b border-paper/10 px-4 py-4 sm:px-6 lg:mx-auto lg:w-full lg:max-w-7xl">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-brand-green">Galleria</p>
              <p className="font-display text-lg font-bold uppercase text-paper sm:text-xl">
                Deposito · {galleryImages.length} foto
              </p>
            </div>
            <button
              type="button"
              onClick={closeAll}
              className="tap-target flex items-center justify-center border border-paper/30 p-2 text-paper transition-colors hover:border-brand-green hover:text-brand-green"
              aria-label="Chiudi galleria"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6 sm:py-6">
            <div className="container-page grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:gap-4 xl:grid-cols-5">
              {galleryImages.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="group relative aspect-square overflow-hidden border border-paper/15 bg-ink-soft"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute bottom-0 left-0 bg-ink/70 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-paper">
                    {image.id}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-ink/90 p-4 lg:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Foto ingrandita"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setActiveIndex((activeIndex - 1 + galleryImages.length) % galleryImages.length)
            }}
            className="tap-target absolute left-2 top-1/2 hidden -translate-y-1/2 border border-paper/30 p-3 text-paper transition-colors hover:border-brand-green lg:left-8 lg:flex"
            aria-label="Foto precedente"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <figure className="max-h-[85svh] w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              className="mx-auto max-h-[75svh] w-full object-contain"
            />
            <figcaption className="mt-4 text-center font-mono text-xs uppercase tracking-widest text-paper/70 lg:text-sm">
              {activeIndex + 1} / {galleryImages.length} — {galleryImages[activeIndex].alt}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setActiveIndex((activeIndex + 1) % galleryImages.length)
            }}
            className="tap-target absolute right-2 top-1/2 hidden -translate-y-1/2 border border-paper/30 p-3 text-paper transition-colors hover:border-brand-green lg:right-8 lg:flex"
            aria-label="Foto successiva"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="tap-target absolute right-4 top-4 border border-paper/30 p-2 text-paper lg:hidden"
            aria-label="Chiudi"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}
