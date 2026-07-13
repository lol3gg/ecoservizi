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
    <section className="border-y border-paper/10 bg-ink py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-rust">Conformità</span>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-paper sm:text-3xl">
              Lavoriamo in regola, ogni volta
            </h2>
          </div>
          <p className="max-w-xs font-mono text-[10px] uppercase leading-relaxed tracking-wide text-steel min-[375px]:max-w-none min-[375px]:text-xs">
            Iscrizione Albo Gestori Ambientali — categoria e numero su richiesta
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {points.map((point) => (
            <div key={point.title} className="border-t-2 border-brand-green pt-4">
              <h3 className="font-display text-lg font-bold uppercase tracking-tight text-paper">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
