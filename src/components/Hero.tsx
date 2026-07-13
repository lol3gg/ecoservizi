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
          className="h-[min(400px,72svh)] w-full object-cover object-[center_70%] sm:h-[480px] sm:object-center md:h-[560px] lg:h-[620px] xl:h-[680px]"
          loading="eager"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/75 to-ink/40 sm:bg-gradient-to-r sm:from-ink sm:via-ink/80 sm:to-ink/20"
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex items-end pb-6 sm:items-center sm:pb-0">
          <div className="container-page w-full">
            <div className="max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
              <span className="block font-mono text-[10px] uppercase leading-snug tracking-[0.15em] text-brand-green min-[375px]:text-xs sm:tracking-[0.2em]">
                Commercio metalli ferrosi e non — Marche (PU)
              </span>
              <h1 className="mt-3 font-display text-[2rem] font-bold uppercase leading-[0.95] tracking-tight text-paper min-[375px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem]">
                Il ferro che scartate,
                <br />
                lo gestiamo noi.
              </h1>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-paper/80 sm:mt-5 sm:text-base md:text-lg lg:max-w-xl lg:text-xl lg:leading-relaxed">
                Raccolta, trasporto e valutazione di rifiuti ferrosi e metallici per
                aziende, artigiani e privati. Ritiro rapido, mezzi autorizzati e
                documentazione ambientale in regola a ogni conferimento.
              </p>
              <div className="mt-6 flex flex-col gap-3 min-[375px]:flex-row min-[375px]:flex-wrap sm:mt-8 lg:mt-10">
                <a
                  href="#contatti"
                  className="btn-mobile-full tap-target bg-brand-green px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-opacity hover:opacity-90 sm:inline-block sm:w-auto sm:px-8 sm:py-3.5 sm:text-base lg:px-10"
                >
                  Richiedi un ritiro
                </a>
                <a
                  href="https://wa.me/393276039651"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-mobile-full tap-target inline-flex items-center justify-center gap-2 border border-paper/40 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:border-paper hover:bg-paper/10 sm:px-8 sm:py-3.5 sm:text-base lg:px-10"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10 bg-ink-soft">
        <div className="container-page">
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {manifestFacts.map((fact, i) => (
              <div
                key={fact.label}
                className={`px-3 py-5 sm:px-4 sm:py-6 lg:px-8 lg:py-7 lg:text-center ${i < 2 ? 'border-b border-paper/10 lg:border-b-0' : ''} ${i % 2 === 0 ? 'border-r border-paper/10 lg:border-r-0' : ''} lg:border-r lg:border-paper/10 lg:last:border-r-0`}
              >
                <dt className="font-mono text-[10px] uppercase tracking-widest text-brand-green sm:text-xs">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-xs font-medium leading-snug text-paper sm:text-sm md:text-base lg:mt-2 lg:text-lg">
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
