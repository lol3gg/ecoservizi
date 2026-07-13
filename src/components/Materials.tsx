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
    <section id="materiali" className="bg-ink py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-green">
              Materiali trattati
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-paper min-[375px]:text-3xl sm:text-4xl">
              Cosa ritiriamo
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-paper/70 sm:text-base">
              Trattiamo le principali categorie di metalli ferrosi e non
              ferrosi. Non sei sicuro se un materiale rientra tra quelli
              ritirati? Scrivici o chiamaci: valutiamo gratuitamente.
            </p>
            <a
              href="#contatti"
              className="btn-mobile-full tap-target mt-6 inline-block bg-brand-green px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-opacity hover:opacity-90"
            >
              Chiedi una valutazione
            </a>
          </div>

          <ul className="grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2">
            {materials.map((material) => (
              <li
                key={material}
                className="flex items-center gap-3 border border-paper/15 px-4 py-3 text-sm text-paper sm:text-base"
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
