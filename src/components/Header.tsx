import { useEffect, useState } from 'react'
import Logo from './Logo'

const navItems = [
  { label: 'Servizi', href: '#servizi' },
  { label: 'Materiali', href: '#materiali' },
  { label: 'Come funziona', href: '#come-funziona' },
  { label: 'Zona servita', href: '#zona' },
  { label: 'Galleria', href: '#galleria' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="safe-top fixed inset-x-0 top-0 z-50 border-b border-paper/10 bg-ink/95 backdrop-blur transition-[background-color,box-shadow] duration-300 supports-[backdrop-filter]:bg-ink/90">
      <div className="container-page grid grid-cols-3 items-center py-3 lg:flex lg:justify-between lg:gap-4 lg:py-4">
        <a
          href="#home"
          aria-label="ECO SERVIZI JMC — Home"
          className="col-start-2 justify-self-center shrink-0 lg:col-auto lg:justify-self-auto"
          onClick={closeMenu}
        >
          <Logo variant="light" size="header" />
        </a>

        <nav aria-label="Navigazione principale" className="hidden lg:block lg:flex-1 lg:px-6 xl:px-8">
          <ul className="flex items-center justify-center gap-5 xl:gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="nav-link font-mono text-xs uppercase tracking-widest text-steel transition-colors hover:text-paper"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-start-3 flex shrink-0 items-center justify-self-end gap-2">
          <a
            href="tel:+393276039651"
            aria-label="Chiama ora"
            className="tap-target flex items-center justify-center border-2 border-brand-green bg-brand-green p-2.5 text-ink transition-colors hover:border-paper hover:bg-paper hover:text-ink sm:gap-2 sm:px-5 sm:py-2 sm:text-sm"
          >
            <svg className="h-5 w-5 shrink-0 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="hidden text-xs font-semibold uppercase tracking-wide sm:inline sm:text-sm">Chiama ora</span>
          </a>

          <button
            type="button"
            className="tap-target flex items-center justify-center border-2 border-paper/20 p-2 text-paper lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Navigazione mobile"
          className="border-t border-paper/10 bg-ink-soft lg:hidden"
        >
          <ul className="safe-x container-page py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="tap-target flex items-center border-b border-paper/10 py-3 font-mono text-sm uppercase tracking-widest text-paper last:border-b-0"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
