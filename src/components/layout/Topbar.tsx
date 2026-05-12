import { useTranslation } from 'react-i18next'
import { AWABEL_CONTACTS } from '@/data'

const TICKER_ITEMS = [
  '🌍 AWABEL — A Wali ti Béafrica E Londo · ONG Nationale, République Centrafricaine',
  '💙 Solidarité · ⚖️ Justice · 🤝 Égalité — Valeurs fondatrices d\'AWABEL',
  '📞 +236 74 71 99 99 | 📞 +236 70 05 05 87 | 💬 WhatsApp +236 72 12 56 63 · ✉ awabel26@gmail.com',
  '🇨🇫 Bangui, 6ème arrondissement, Quartier MODOUA — République Centrafricaine',
  '🎯 5 domaines : Éducation · Sécurité Alimentaire · Environnement · Femmes · Santé',
  '🤝 Partenariats avec les Agences ONU, ONG Internationales et Ambassades',
  '📅 Fondée le 25 Nov. 2022 · Statuts adoptés le 27 Jan. 2026 · Loi N° 61/233',
]

export default function Topbar() {
  const { t } = useTranslation()
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <>
      {/* ── Ticker barre de défilement ── */}
      <div className="awabel-ticker" role="marquee" aria-label="Informations AWABEL">
        <div className="awabel-ticker__track">
          {doubled.map((item, i) => (
            <span key={i} className="awabel-ticker__item">
              {item}
              <span className="awabel-ticker__sep" aria-hidden="true"> ◆ </span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Topbar contacts ── */}
      <div className="awabel-topbar">
        <div className="awabel-container">
          <div className="d-flex justify-content-between align-items-center">
            <span>📍 {t('topbar.address')}</span>
            <div className="topbar-right d-none d-md-flex gap-3">
              {AWABEL_CONTACTS.phones.map((phone, index) => (
                <a key={index} href={`tel:${phone.number.replace(/\s/g, '')}`}>
                  <span style={{ color: phone.isWhatsApp ? '#25D366' : 'inherit' }}>
                    {phone.label}
                  </span>
                  {phone.isWhatsApp ? ' WhatsApp' : ''} {phone.number}
                </a>
              ))}
              <a href={`mailto:${AWABEL_CONTACTS.email}`}>
                ✉ {AWABEL_CONTACTS.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
