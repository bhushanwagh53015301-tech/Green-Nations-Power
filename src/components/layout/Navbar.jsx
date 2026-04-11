import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'
import gnpLogo from '../../../assets/Gnp-logo.svg'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Residential', path: '/residential' },
  { label: 'Commercial', path: '/commercial' },
  { label: 'EPC', path: '/epc' },
  { label: 'Areas', path: '/locations' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

function navLinkClass({ isActive }) {
  return `text-sm font-medium transition ${
    isActive ? 'text-brand-green' : 'text-black hover:text-brand-green'
  }`
}

function Navbar({ onOpenCalculator }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3 md:ml-6" aria-label="Green Nations Power">
            <img src={gnpLogo} alt="Green Nations Power logo" className="h-20 w-auto" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button onClick={() => onOpenCalculator('residential')}>
            Calculate Savings
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-slate-300 text-black md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 pt-3 md:hidden">
          <nav className="grid gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 text-base font-medium ${
                    isActive
                      ? 'text-brand-green'
                      : 'text-black hover:text-brand-green'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Button
            className="mt-4 w-full"
            onClick={() => {
              setIsMobileOpen(false)
              onOpenCalculator('residential')
            }}
          >
            Calculate Savings
          </Button>
        </div>
      )}
    </header>
  )
}

export default Navbar

