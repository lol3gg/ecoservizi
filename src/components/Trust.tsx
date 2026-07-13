import Reveal from './Reveal'

const points = [
  {
    title: 'Formulari FIR',
    description:
      'Ogni conferimento è accompagnato dal Formulario di Identificazione del Rifiuto, come previsto dalla normativa.',
  },
  {
    title: 'Sistema RENTRI',
    description:
      'Tracciabilità dei rifiuti gestita secondo il Registro Elettronico Nazionale per la Tracciabilità dei Rifiuti.',
  },
  {
    title: 'Mezzi autorizzati',
    description:
      'Trasporto effettuato con automezzi e personale abilitati alla raccolta di rifiuti ferrosi e metallici.',
  },
]

export default function Trust() {
  return (
    <section className="border-y border-paper/10 bg-ink section-y">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
            <span className="font-mono text-xs uppercase tracking-widest text-rust">Conformità</span>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-paper sm:text-3xl lg:text-4xl">
              Lavoriamo in regola, ogni volta
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-mono text-[10px] uppercase leading-relaxed tracking-wide text-steel min-[375px]:text-xs lg:text-sm">
              Iscrizione Albo Gestori Ambientali — categoria e numero su richiesta
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:mt-14 lg:gap-8">
            {points.map((point) => (
              <div
                key={point.title}
                className="interactive-lift flex h-full flex-col border border-paper/10 bg-ink-soft px-6 py-6 lg:px-8 lg:py-8"
              >
                <div className="h-0.5 w-10 bg-brand-green" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-tight text-paper lg:text-xl">
                  {point.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-steel lg:text-base lg:leading-7">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
