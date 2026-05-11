import { NavLink, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import type { Language } from '@/types'
import DonateModal from './DonateModal'


const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [expanded, setExpanded] = useState(false)
  const [donateModalOpen, setDonateModalOpen] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0]

  const handleLangChange = (lang: Language) => {
    i18n.changeLanguage(lang)
    setLangDropdownOpen(false)
  }

  const close = () => setExpanded(false)

  // Fermer le dropdown quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest('#langDropdown') && !target.closest('#langDropdownMenu')) {
        setLangDropdownOpen(false)
      }
    }

    if (langDropdownOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [langDropdownOpen])

  return (
    <>
      <nav className="awabel-navbar navbar navbar-expand-lg sticky-top py-0">
        <div className="awabel-container d-flex align-items-center w-100">

          {/* ── Brand / Logo ── */}
          <Link className="navbar-brand d-flex align-items-center gap-2 py-2 me-auto" to="/" onClick={close}>
            <img
              src="/logo.jpeg"
              alt="Logo AWABEL"
              className="nav-logo-img"
            />
            <div className="d-flex flex-column">
              <span className="brand-name">AWABEL</span>
              <span className="brand-tagline">Association Wali ti Béafrica Londo</span>
            </div>
          </Link>

          {/* ── Mobile toggle ── */}
          <button
            className="navbar-toggler border-0 ms-2"
            type="button"
            aria-controls="awabelNav"
            aria-expanded={expanded}
            aria-label="Toggle navigation"
            onClick={() => setExpanded(!expanded)}
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* ── Nav links ── */}
          <div className={`collapse navbar-collapse${expanded ? ' show' : ''}`} id="awabelNav">
            {/* Mobile close button */}
            <button 
              className="mobile-close-btn d-lg-none"
              onClick={close}
              aria-label="Close menu"
            >
              <span className="close-icon">×</span>
            </button>
            
            <ul className="navbar-nav ms-auto align-items-lg-center gap-1 py-2 py-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end onClick={close}>{t('nav.home')}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" onClick={close}>{t('nav.about')}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/programs" onClick={close}>{t('nav.programs')}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/news" onClick={close}>{t('nav.news')}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/partners" onClick={close}>{t('nav.partners')}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/join" onClick={close}>{t('nav.join')}</NavLink>
              </li>

              {/* ── Language switcher ── */}
              <li className="nav-item dropdown ms-lg-2">
                <button
                  className="nav-link dropdown-toggle border-0 bg-transparent d-flex align-items-center gap-1"
                  id="langDropdown"
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  style={{ fontSize: '0.8rem', fontWeight: 700 }}
                >
                  {currentLang.flag} {currentLang.code.toUpperCase()}
                </button>
                <ul 
                  id="langDropdownMenu"
                  className={`dropdown-menu dropdown-menu-end shadow-sm${langDropdownOpen ? ' show' : ''}`} 
                  style={{ 
                    position: 'absolute',
                    top: '100%',
                    right: '0',
                    zIndex: 1000
                  }}
                >
                  {LANGUAGES.map((lang) => (
                    <li key={lang.code}>
                      <button
                        className={`dropdown-item${i18n.language === lang.code ? ' active' : ''}`}
                        onClick={() => { 
                          handleLangChange(lang.code); 
                          close();
                        }}
                        style={{ fontSize: '0.875rem' }}
                      >
                        {lang.flag} {lang.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>

              {/* ── Donate Button ── */}
              <li className="nav-item ms-lg-2">
                <button 
                  className="nav-link nav-donate" 
                  onClick={() => { setDonateModalOpen(true); close() }}
                  style={{ 
                    background: '#1A3FA8', 
                    color: 'white !important', 
                    border: 'none', 
                    padding: '0.5rem 1rem', 
                    borderRadius: '0.375rem',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#0D2680'
                    e.currentTarget.style.transform = 'translateY(-1px)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = '#1A3FA8'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  {t('nav.donate')}
                </button>
              </li>

              {/* ── CTA ── */}
              <li className="nav-item ms-lg-2">
                <NavLink className="nav-link nav-cta" to="/contact" onClick={close}>
                  {t('nav.cta')}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      {/* Donate Modal */}
      <DonateModal 
        isOpen={donateModalOpen} 
        onClose={() => setDonateModalOpen(false)} 
      />
    </>
  )
}
