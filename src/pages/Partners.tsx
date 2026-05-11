import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { PARTNERS } from '@/data'

export default function Partners() {
  const { t } = useTranslation()
  return (
    <>
      <Helmet><title>{t('meta.homeTitle')}</title></Helmet>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg,#0D2680 0%,#1A3FA8 100%)', color: '#fff', paddingBottom: '3rem' }}>
        <div className="awabel-container">
          <span className="section-tag" style={{ background: 'rgba(255,255,255,.2)' }}>{t('partners.tag')}</span>
          <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '2.2rem', color: '#fff', marginTop: '1rem', marginBottom: '.75rem' }}>{t('partners.title')}</h1>
          <p style={{ opacity: .88, maxWidth: 600 }}>{t('partners.sub')}</p>
        </div>
      </div>
      <section className="awabel-section">
        <div className="awabel-container">
          <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 g-3">
            {PARTNERS.map((p) => (
              <div key={p.name} className="col">
                <div className="partner-chip">
                  <span className="partner-emoji">{p.emoji}</span>
                  <strong>{p.name}</strong>
                  <div style={{ fontSize: '.7rem', color: '#5a6480', marginTop: 4 }}>{p.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
