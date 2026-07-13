import { useCallback, useEffect, useState } from 'react'
import Reveal from './Reveal'

const materials = [
  'Ferro e acciaio',
  'Rame',
  'Ottone',
  'Alluminio',
  'Acciaio inox',
  'Piombo',
  'Cavi elettrici',
  'Carpenteria metallica',
  'Elettrodomestici dismessi',
]

const MOBILE_PREVIEW_COUNT = 5

function MaterialItem({ material }: { material: string }) {
  return (
    <li className="flex items-center gap-2.5 border border-paper/15 bg-ink/50 px-3 py-3 text-sm text-paper transition-colors hover:border-brand-green/40 min-[375px]:gap-3 min-[375px]:px-4 min-[375px]:py-3.5 sm:text-base lg:px-5 lg:py-4">
      <span className="h-1.5 w-1.5 shrink-0 bg-brand-green" aria-hidden="true" />
      <span className="leading-snug">{material}</span>
    </li>
  )
}

export default function Materials() {
  const [showAll, setShowAll] = useState(false)
  const preview = materials.slice(0, MOBILE_PREVIEW_COUNT)
  const hiddenCount = materials.length - MOBILE_PREVIEW_COUNT

  const closeAll = useCallback(() => setShowAll(false), [])

  useEffect(() => {
    document.body.style.overflow = showAll ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [showAll])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAll()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeAll])

  return (
    <section id="materiali" className="section-y bg-ink-soft">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16 xl:grid-cols-[minmax(0,26rem)_1fr] xl:gap-20">
          <Reveal>
            <div className="text-center lg:sticky lg:top-28 lg:text-left">
              <span className="font-mono text-xs uppercase tracking-widest text-brand-green">
                Materiali trattati
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-paper min-[375px]:text-3xl sm:text-4xl lg:text-4xl lg:leading-none">
                Cosa ritiriamo
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-paper/70 sm:text-base lg:mt-5 lg:text-lg lg:leading-relaxed">
                Trattiamo le principali categorie di metalli ferrosi e non
                ferrosi. Non sei sicuro se un materiale rientra tra quelli
                ritirati? Scrivici o chiamaci: valutiamo gratuitamente.
              </p>
              <a
                href="#contatti"
                className="btn-mobile-full tap-target mt-6 inline-block bg-brand-green px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-opacity hover:opacity-90 lg:mt-8 lg:px-8"
              >
                Chiedi una valutazione
              </a>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <ul className="grid grid-cols-2 gap-2 lg:hidden">
              {preview.map((material) => (
                <MaterialItem key={material} material={material} />
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => setShowAll(true)}
                  className="tap-target flex h-full min-h-[3.25rem] w-full flex-col items-center justify-center gap-1 border border-dashed border-paper/25 bg-ink/30 px-3 py-3 text-center transition-colors hover:border-brand-green hover:bg-ink/50"
                >
                  <span className="font-display text-lg font-bold text-brand-green">Altro</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-steel">
                    +{hiddenCount} materiali
                  </span>
                </button>
              </li>
            </ul>

            <ul className="hidden grid-cols-3 gap-3 lg:grid">
              {materials.map((material) => (
                <MaterialItem key={material} material={material} />
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {showAll && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-ink/95 backdrop-blur-sm lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Elenco completo materiali ritirati"
        >
          <div className="safe-top safe-x flex shrink-0 items-center justify-between border-b border-paper/10 px-4 py-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-brand-green">Materiali</p>
              <p className="font-display text-lg font-bold uppercase text-paper">Tutto ciò che ritiriamo</p>
            </div>
            <button
              type="button"
              onClick={closeAll}
              className="tap-target flex items-center justify-center border border-paper/30 p-2 text-paper transition-colors hover:border-brand-green hover:text-brand-green"
              aria-label="Chiudi elenco materiali"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4">
            <ul className="container-page grid grid-cols-1 gap-2 min-[375px]:grid-cols-2">
              {materials.map((material) => (
                <MaterialItem key={material} material={material} />
              ))}
            </ul>
            <p className="container-page mt-6 text-center text-sm text-steel">
              Non trovi il materiale che cerchi?{' '}
              <a href="#contatti" onClick={closeAll} className="text-brand-green underline-offset-2 hover:underline">
                Contattaci
              </a>{' '}
              per una valutazione gratuita.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
