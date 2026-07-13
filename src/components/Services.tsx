type Service = {
  code: string
  title: string
  description: string
  image: string
  alt: string
}

const services: Service[] = [
  {
    code: 'SERV-01',
    image: '/images/service-transport.png',
    alt: 'Automezzo autorizzato durante il carico di rifiuti ferrosi in cantiere',
    title: 'Gestione e trasporto rifiuti ferrosi',
    description:
      'Raccolta, trasporto e conferimento di rifiuti ferrosi con mezzi autorizzati e personale qualificato, nel pieno rispetto delle normative vigenti.',
  },
  {
    code: 'SERV-02',
    image: '/images/service-documentation.png',
    alt: 'Formulari FIR e documentazione ambientale per la tracciabilità dei rifiuti',
    title: 'Supporto documentale ambientale',
    description:
      'Gestiamo per te tutta la documentazione necessaria: formulari FIR, registri di carico e scarico, tracciabilità e adempimenti secondo il sistema RENTRI.',
  },
  {
    code: 'SERV-03',
    image: '/images/service-copper.png',
    alt: 'Tubi in rame e raccordi metallici pronti per la valutazione',
    title: 'Valutazioni e ritiro metalli',
    description:
      'Valutazione professionale di metalli ferrosi e non ferrosi con ritiro rapido in cantiere o presso la tua sede, prezzi trasparenti e aggiornati.',
  },
  {
    code: 'SERV-04',
    image: '/images/service-scrap-metal.png',
    alt: 'Scarti e rottami metallici pronti per il riciclo',
    title: 'Servizi rapidi e sostenibili',
    description:
      "Interventi su appuntamento per aziende e privati, con attenzione al recupero dei materiali e alla riduzione dell'impatto ambientale nel territorio.",
  },
]

export default function Services() {
  return (
    <section id="servizi" className="bg-paper py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <span className="font-mono text-xs uppercase tracking-widest text-rust">
          Cosa facciamo
        </span>
        <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-ink min-[375px]:text-3xl sm:text-4xl">
          Quattro servizi, un solo referente
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-steel sm:text-base">
          Affidabilità, puntualità e rispetto dell&apos;ambiente. Soluzioni complete
          per la gestione dei rifiuti ferrosi, pensate per aziende, artigiani e
          privati che hanno bisogno di un servizio conforme alle normative.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6">
          {services.map((service) => (
            <article
              key={service.code}
              className="ticket-edge flex flex-col overflow-hidden border border-line bg-white pt-1"
            >
              <div className="aspect-[16/9] w-full overflow-hidden bg-paper-dim">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <span className="font-mono text-[11px] uppercase tracking-widest text-rust">
                  {service.code}
                </span>
                <h3 className="mt-1 font-display text-lg font-bold uppercase leading-tight tracking-tight text-ink min-[375px]:text-xl sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-steel sm:text-base">
                  {service.description}
                </p>
                <a
                  href="#contatti"
                  className="mt-5 inline-block w-fit border-b-2 border-brand-green text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:border-rust hover:text-rust"
                >
                  Scopri di più →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
