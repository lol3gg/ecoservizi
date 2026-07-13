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

export default function Materials() {
  return (
    <section id="materiali" className="section-y bg-ink-soft">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16 xl:grid-cols-[minmax(0,26rem)_1fr] xl:gap-20">
          <div className="text-center lg:sticky lg:top-28 lg:text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-green">
              Materiali trattati
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-paper min-[375px]:text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-none">
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

          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3">
            {materials.map((material) => (
              <li
                key={material}
                className="flex items-center gap-3 border border-paper/15 bg-ink/50 px-4 py-3.5 text-sm text-paper transition-colors hover:border-brand-green/40 sm:text-base lg:px-5 lg:py-4"
              >
                <span className="h-1.5 w-1.5 shrink-0 bg-brand-green" aria-hidden="true" />
                {material}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
