const steps = [
  {
    number: '01',
    title: 'Ci contatti',
    description:
      'Chiama, scrivi su WhatsApp o compila il modulo. Ci descrivi materiale, quantità indicativa e dove si trova.',
  },
  {
    number: '02',
    title: 'Sopralluogo o ritiro concordato',
    description:
      'Fissiamo un appuntamento. Per grandi quantità effettuiamo un sopralluogo gratuito, per il resto organizziamo il ritiro diretto.',
  },
  {
    number: '03',
    title: 'Ritiro e formulario',
    description:
      'I nostri mezzi effettuano il ritiro. Ricevi il formulario di identificazione del rifiuto (FIR) e la relativa documentazione ambientale.',
  },
]

export default function Process() {
  return (
    <section id="come-funziona" className="bg-paper-dim py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <span className="font-mono text-xs uppercase tracking-widest text-rust">Il processo</span>
        <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-ink min-[375px]:text-3xl sm:text-4xl">
          Come funziona un ritiro
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 md:grid-cols-3 md:gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative border-b border-line pb-8 last:border-b-0 last:pb-0 md:border-b-0 md:pb-0">
              <div className="flex flex-col gap-1 min-[375px]:flex-row min-[375px]:items-baseline min-[375px]:gap-3">
                <span className="font-display text-4xl font-bold text-brand-green min-[375px]:text-5xl">{step.number}</span>
                <h3 className="font-display text-lg font-bold uppercase leading-tight tracking-tight text-ink min-[375px]:text-xl sm:text-2xl">
                  {step.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-steel sm:text-base">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="mt-6 hidden h-px w-full bg-line md:block" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
