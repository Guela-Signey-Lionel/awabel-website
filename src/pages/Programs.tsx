import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Programs() {
  const { t } = useTranslation()
  const programs = t('programs.items', { returnObjects: true }) as Array<{
    icon: string; title: string; desc: string; cta?: boolean
  }>

  return (
    <>
      <Helmet>
        <title>{t('meta.programsTitle')}</title>
      </Helmet>

      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #0D2680 0%, #1A3FA8 100%)', color: '#fff', paddingBottom: '3rem' }}>
        <div className="awabel-container">
          <span className="section-tag" style={{ background: 'rgba(255,255,255,0.2)' }}>Programmes</span>
          <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '2.2rem', color: '#fff', marginTop: '1rem', marginBottom: '0.75rem' }}>
            {t('programs.title')}
          </h1>
          <p style={{ opacity: 0.88, maxWidth: 600 }}>{t('programs.sub')}</p>
        </div>
      </div>

      <section className="awabel-section">
        <div className="awabel-container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            {programs.filter(p => !p.cta).map((prog, i) => (
              <div key={i} className="col">
                <div className="prog-card h-100">
                  <div className="prog-icon" style={{ width: 60, height: 60, fontSize: '1.8rem' }}>{prog.icon}</div>
                  <h3 style={{ fontSize: '1.1rem' }}>{prog.title}</h3>
                  <p>{prog.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 text-center" style={{ padding: '3rem', background: '#EBF0FF', borderRadius: 16 }}>
            <h3 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#0D2680', marginBottom: '1rem' }}>
              Soutenez nos programmes
            </h3>
            <p style={{ color: '#5a6480', marginBottom: '1.5rem', maxWidth: 500, margin: '0 auto 1.5rem' }}>
              Rejoignez AWABEL comme bénévole, membre ou partenaire pour renforcer notre impact humanitaire en RCA.
            </p>
            <Link to="/join" style={{
              background: '#1A3FA8', color: '#fff', padding: '13px 28px',
              borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '0.875rem',
            }}>
              Rejoindre AWABEL →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
