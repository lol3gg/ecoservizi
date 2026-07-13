const comuni = ['Fossombrone', 'Fano', 'Pesaro', 'Urbino', 'Urbania', 'Cagli', 'Fermignano', 'Mondavio']

export default function ServiceArea() {
  return (
    <section id="zona" className="bg-paper py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-rust">Zona operativa</span>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-ink min-[375px]:text-3xl sm:text-4xl">
              Dove interveniamo
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-steel sm:text-base">
              Con sede a Fossombrone operiamo su tutta la provincia di
              Pesaro e Urbino. Per cantieri e ritiri di grandi quantità
              valutiamo anche interventi fuori zona: chiedici disponibilità.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {comuni.map((comune) => (
                <li
                  key={comune}
                  className="border border-ink/15 px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-wide text-ink min-[375px]:px-3 min-[375px]:text-xs"
                >
                  {comune}
                </li>
              ))}
              <li className="border border-dashed border-ink/25 px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-wide text-steel min-[375px]:px-3 min-[375px]:text-xs">
                + su richiesta
              </li>
            </ul>
          </div>

          <div className="h-56 w-full overflow-hidden border border-line min-[375px]:h-64 sm:h-72 md:h-full md:min-h-[280px]">
            <iframe
              title="Mappa zona servita — Fossombrone"
              src="https://maps.google.com/maps?q=Fossombrone%20PU&t=&z=11&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
