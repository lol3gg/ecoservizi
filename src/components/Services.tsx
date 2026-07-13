import { asset } from '../lib/asset'
import SectionIntro from './SectionIntro'

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
    image: asset('images/service-transport.png'),
    alt: 'Automezzo autorizzato durante il carico di rifiuti ferrosi in cantiere',
    title: 'Gestione e trasporto rifiuti ferrosi',
    description:
      'Raccolta, trasporto e conferimento di rifiuti ferrosi con mezzi autorizzati e personale qualificato, nel pieno rispetto delle normative vigenti.',
  },
  {
    code: 'SERV-02',
    image: asset('images/service-documentation.png'),
    alt: 'Formulari FIR e documentazione ambientale per la tracciabilità dei rifiuti',
    title: 'Supporto documentale ambientale',
    description:
      'Gestiamo per te tutta la documentazione necessaria: formulari FIR, registri di carico e scarico, tracciabilità e adempimenti secondo il sistema RENTRI.',
  },
  {
    code: 'SERV-03',
    image: asset('images/service-copper.png'),
    alt: 'Tubi in rame e raccordi metallici pronti per la valutazione',
    title: 'Valutazioni e ritiro metalli',
    description:
      'Valutazione professionale di metalli ferrosi e non ferrosi con ritiro rapido in cantiere o presso la tua sede, prezzi trasparenti e aggiornati.',
  },
  {
    code: 'SERV-04',
    image: asset('images/service-scrap-metal.png'),
    alt: 'Scarti e rottami metallici pronti per il riciclo',
    title: 'Servizi rapidi e sostenibili',
    description:
      "Interventi su appuntamento per aziende e privati, con attenzione al recupero dei materiali e alla riduzione dell'impatto ambientale nel territorio.",
  },
]

export default function Services() {
  return (
    <section id="servizi" className="section-y bg-ink">
      <div className="container-page">
        <SectionIntro
          align="center"
          wide
          label="Cosa facciamo"
          title="Quattro servizi, un solo referente"
          description="Affidabilità, puntualità e rispetto dell'ambiente. Soluzioni complete per la gestione dei rifiuti ferrosi, pensate per aziende, artigiani e privati che hanno bisogno di un servizio conforme alle normative."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:gap-8 xl:gap-10">
          {services.map((service) => (
            <article
              key={service.code}
              className="ticket-edge flex flex-col overflow-hidden border border-paper/10 bg-ink-soft pt-1 transition-colors hover:border-paper/20"
            >
              <div className="aspect-[16/9] w-full overflow-hidden bg-ink-elevated">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-8">
                <span className="font-mono text-[11px] uppercase tracking-widest text-rust">
                  {service.code}
                </span>
                <h3 className="mt-1 font-display text-lg font-bold uppercase leading-tight tracking-tight text-paper min-[375px]:text-xl sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-steel sm:text-base lg:leading-7">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
