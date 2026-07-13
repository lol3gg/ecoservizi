import { COMPANY_ADDRESS_SHORT, COMPANY_MAPS_EMBED, COMPANY_MAPS_URL } from '../data/company'
import Reveal from './Reveal'

const comuni = ['Fossombrone', 'Fano', 'Pesaro', 'Urbino', 'Urbania', 'Cagli', 'Fermignano', 'Mondavio']

export default function ServiceArea() {
  return (
    <section id="zona" className="section-y bg-ink-soft">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="max-w-xl text-center lg:max-w-none lg:text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-rust">Zona operativa</span>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-paper min-[375px]:text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-none">
              Dove interveniamo
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-steel sm:text-base lg:mt-5 lg:text-lg lg:leading-relaxed">
              Con sede in Via del Lavoro, Pian di Rose (Fossombrone) operiamo su
              tutta la provincia di Pesaro e Urbino. Per cantieri e ritiri di
              grandi quantità valutiamo anche interventi fuori zona: chiedici disponibilità.
            </p>
            <ul className="mt-6 flex flex-wrap justify-center gap-2 lg:mt-8 lg:justify-start lg:gap-3">
              {comuni.map((comune) => (
                <li
                  key={comune}
                  className="border border-paper/15 bg-ink/40 px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-wide text-paper min-[375px]:px-3 min-[375px]:text-xs lg:px-4 lg:py-2"
                >
                  {comune}
                </li>
              ))}
              <li className="border border-dashed border-paper/25 px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-wide text-steel min-[375px]:px-3 min-[375px]:text-xs lg:px-4 lg:py-2">
                + su richiesta
              </li>
            </ul>
          </div>

          <Reveal delay={120}>
          <div className="interactive-lift ticket-edge relative overflow-hidden border border-paper/15 bg-ink pt-1">
            <div className="relative h-56 w-full min-[375px]:h-64 sm:h-72 lg:h-[20rem] xl:h-[24rem]">
              <iframe
                title="Mappa sede — Via del Lavoro, Pian di Rose, Fossombrone"
                src={COMPANY_MAPS_EMBED}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-ink-soft/80 to-transparent"
                aria-hidden="true"
              />
            </div>

            <a
              href={COMPANY_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-3 border-t border-paper/10 bg-ink px-4 py-3.5 transition-colors hover:bg-ink-soft sm:px-5 sm:py-4"
            >
              <div className="min-w-0 text-left">
                <p className="font-mono text-[10px] uppercase tracking-widest text-brand-green sm:text-xs">
                  La nostra sede
                </p>
                <p className="mt-0.5 truncate text-sm text-paper sm:text-base">{COMPANY_ADDRESS_SHORT}</p>
              </div>
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-steel sm:text-xs">
                Apri mappa →
              </span>
            </a>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
