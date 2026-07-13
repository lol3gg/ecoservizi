import { COMPANY_ADDRESS_SHORT } from '../data/company'

const footerLinks = [
  { label: 'Servizi', href: '#servizi' },
  { label: 'Materiali', href: '#materiali' },
  { label: 'Galleria', href: '#galleria' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink py-8 lg:py-10">
      <div className="container-page">
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wide text-paper lg:text-base">
              ECO SERVIZI JMC SRLS
            </p>
            <p className="mt-1 font-mono text-xs text-paper/50">
              {COMPANY_ADDRESS_SHORT}
            </p>
          </div>

          <nav aria-label="Link footer">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 lg:justify-end">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-mono text-xs uppercase tracking-widest text-steel transition-colors hover:text-paper"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="font-mono text-xs text-paper/50 lg:text-right">
            © {new Date().getFullYear()} Tutti i diritti riservati
          </p>
        </div>
      </div>
    </footer>
  )
}
