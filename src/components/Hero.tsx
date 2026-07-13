import { asset } from '../lib/asset'

const manifestFacts = [
  { label: 'Zona servita', value: 'Fossombrone e provincia PU' },
  { label: 'Orari', value: 'Lun–Ven 8–18 · Sab 8–12' },
  { label: 'Materiali', value: 'Ferrosi e non ferrosi' },
  { label: 'Documenti', value: 'FIR a ogni conferimento' },
]

export default function Hero() {
  return (
    <section id="home" className="bg-ink">
      <div className="relative w-full">
        <img
          src={asset('images/hero-industrial.png')}
          alt="Capannone industriale con rifiuti ferrosi e metalli pronti al ritiro"
          className="h-[min(520px,88svh)] w-full object-cover object-center sm:h-[480px] md:h-[560px] lg:h-[620px]"
          loading="eager"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/75 to-ink/40 sm:bg-gradient-to-r sm:from-ink sm:via-ink/80 sm:to-ink/20"
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex items-end pb-8 sm:items-center sm:pb-0">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl md:max-w-2xl">
              <span className="block font-mono text-[10px] uppercase leading-snug tracking-[0.15em] text-brand-green min-[375px]:text-xs sm:tracking-[0.2em]">
                Ritiro rifiuti ferrosi e metallici
                <span className="hidden min-[375px]:inline"> · Fossombrone (PU)</span>
              </span>
              <h1 className="mt-3 font-display text-[2rem] font-bold uppercase leading-[0.95] tracking-tight text-paper min-[375px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Il ferro che scartate,
                <br />
                lo gestiamo noi.
              </h1>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-paper/80 sm:mt-5 sm:text-base md:text-lg">
                Raccolta, trasporto e valutazione di rifiuti ferrosi e metallici per
                aziende, artigiani e privati. Ritiro rapido, mezzi autorizzati e
                documentazione ambientale in regola a ogni conferimento.
              </p>
              <div className="mt-6 flex flex-col gap-3 min-[375px]:flex-row min-[375px]:flex-wrap sm:mt-8">
                <a
                  href="#contatti"
                  className="btn-mobile-full tap-target bg-brand-green px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-opacity hover:opacity-90 sm:inline-block sm:w-auto sm:px-8 sm:py-3.5 sm:text-base"
                >
                  Richiedi un ritiro
                </a>
                <a
                  href="https://wa.me/393276609651"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-mobile-full tap-target inline-flex items-center justify-center gap-2 border border-paper/40 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:border-paper hover:bg-paper/10 sm:px-8 sm:py-3.5 sm:text-base"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10 bg-ink-soft">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 md:grid-cols-4">
            {manifestFacts.map((fact, i) => (
              <div
                key={fact.label}
                className={`px-2 py-4 sm:px-4 md:px-6 ${i < 2 ? 'border-b border-paper/10 md:border-b-0' : ''} ${i % 2 === 0 ? 'border-r border-paper/10 md:border-r-0' : ''} md:border-r md:border-paper/10 md:last:border-r-0`}
              >
                <dt className="font-mono text-[10px] uppercase tracking-widest text-brand-green sm:text-xs">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-xs font-medium leading-snug text-paper sm:text-sm md:text-base">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
