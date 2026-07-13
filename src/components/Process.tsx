import Reveal from './Reveal'
import SectionIntro from './SectionIntro'

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
    <section id="come-funziona" className="section-y bg-ink">
      <div className="container-page">
        <Reveal>
          <SectionIntro
            align="center"
            label="Il processo"
            title="Come funziona un ritiro"
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 100}>
            <article
              className="interactive-lift ticket-edge flex h-full flex-col border border-paper/10 bg-ink-soft p-6 pt-5 sm:p-8 sm:pt-6 lg:p-8 lg:pt-7"
            >
              <span className="font-display text-4xl font-bold text-brand-green min-[375px]:text-5xl lg:text-6xl">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold uppercase leading-tight tracking-tight text-paper min-[375px]:text-xl sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-steel sm:text-base lg:mt-4 lg:leading-7">
                {step.description}
              </p>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
