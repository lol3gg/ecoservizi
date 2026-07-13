import { useState, type FormEvent } from 'react'
import Logo from './Logo'

export default function Contact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Richiesta ritiro — ${name || 'nuovo contatto'}`)
    const body = encodeURIComponent(`Nome: ${name}\nTelefono: ${phone}\n\nMessaggio:\n${message}`)
    window.location.href = `mailto:ECOSERVIZIJMC@GMAIL.COM?subject=${subject}&body=${body}`
  }

  return (
    <section id="contatti" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-between gap-8 bg-ink-soft px-4 py-10 sm:gap-10 sm:px-10 sm:py-16 md:px-12 md:py-20">
          <div>
            <Logo variant="light" size="lg" />
            <h2 className="mt-6 font-display text-2xl font-bold uppercase tracking-tight text-paper min-[375px]:text-3xl sm:mt-8 sm:text-4xl">
              Contattaci oggi stesso
            </h2>
            <p className="mt-3 text-sm text-paper/70 sm:text-base">
              ECO SERVIZI JMC · Fossombrone (PU), Italia
            </p>
          </div>

          <div className="flex flex-col gap-3 min-[375px]:flex-row min-[375px]:flex-wrap">
            <a
              href="tel:+393276609651"
              className="btn-mobile-full tap-target inline-flex items-center justify-center gap-2 bg-brand-green px-5 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-opacity hover:opacity-90"
            >
              +39 327 660 9651
            </a>
            <a
              href="https://wa.me/393276609651"
              target="_blank"
              rel="noreferrer"
              className="btn-mobile-full tap-target inline-flex items-center justify-center gap-2 border border-paper/40 px-5 py-3.5 text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:border-paper hover:bg-paper/10"
            >
              WhatsApp
            </a>
          </div>

          <dl className="ticket-edge-dark grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-widest text-brand-green">Orari</dt>
              <dd className="mt-1 text-sm text-paper sm:text-base">
                Lun–Ven: 08:00–18:00
                <br />
                Sab: 08:00–12:00 · Dom: chiuso
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-widest text-brand-green">Email</dt>
              <dd className="mt-1 text-sm text-paper sm:text-base">
                <a
                  href="mailto:ECOSERVIZIJMC@GMAIL.COM"
                  className="break-all transition-colors hover:text-brand-green"
                >
                  ecoservizijmc@gmail.com
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="bg-ink px-4 py-10 sm:px-10 sm:py-16 md:px-12 md:py-20">
          <span className="font-mono text-xs uppercase tracking-widest text-rust">Richiesta rapida</span>
          <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-tight text-paper min-[375px]:text-2xl sm:text-3xl">
            Descrivici cosa devi smaltire
          </h3>
          <p className="mt-3 text-sm text-steel sm:text-base">
            Compila il modulo: si aprirà la tua email già pronta per l&apos;invio. Ti rispondiamo
            entro un giorno lavorativo.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5 sm:mt-8">
            <div>
              <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-steel">
                Nome e cognome
              </label>
              <input
                id="name"
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-mobile mt-2 w-full min-h-[48px] border border-paper/15 bg-ink-elevated px-4 py-3 text-paper outline-none placeholder:text-steel/60 focus:border-brand-green"
                placeholder="Mario Rossi"
              />
            </div>
            <div>
              <label htmlFor="phone" className="font-mono text-xs uppercase tracking-widest text-steel">
                Telefono
              </label>
              <input
                id="phone"
                type="tel"
                required
                inputMode="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input-mobile mt-2 w-full min-h-[48px] border border-paper/15 bg-ink-elevated px-4 py-3 text-paper outline-none placeholder:text-steel/60 focus:border-brand-green"
                placeholder="333 123 4567"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-steel">
                Cosa devi smaltire?
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="input-mobile mt-2 w-full resize-none border border-paper/15 bg-ink-elevated px-4 py-3 text-paper outline-none placeholder:text-steel/60 focus:border-brand-green"
                placeholder="Es. rottami di ferro da cantiere, circa 2 tonnellate, a Fossombrone"
              />
            </div>
            <button
              type="submit"
              className="tap-target w-full bg-brand-green px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-opacity hover:opacity-90 sm:w-fit"
            >
              Invia richiesta
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
