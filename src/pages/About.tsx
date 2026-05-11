import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { TEAM_MEMBERS } from '@/data'

export default function About() {
  const { t } = useTranslation()
  const domains = t('about.domains', { returnObjects: true }) as string[]

  return (
    <>
      <Helmet>
        <title>{t('meta.aboutTitle')}</title>
      </Helmet>

      {/* Page header */}
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #0D2680 0%, #1A3FA8 100%)', color: '#fff', paddingBottom: '3rem' }}>
        <div className="awabel-container">
          <span className="section-tag" style={{ background: 'rgba(255,255,255,0.2)', marginBottom: '1rem' }}>À propos</span>
          <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '2.2rem', color: '#fff', marginBottom: '0.75rem' }}>
            Association Wali ti Béafrica Londo
          </h1>
          <p style={{ opacity: 0.88, maxWidth: 600, fontSize: '1rem' }}>
            ONG Nationale d'Action Humanitaire et Sociale — République Centrafricaine
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="awabel-section">
        <div className="awabel-container">
          <span className="section-tag">{t('about.tag')}</span>
          <h2 className="section-title">{t('about.title')}</h2>
          <div className="section-divider" />
          <div className="row g-4 align-items-start">
            <div className="col-lg-7">
              <p className="mb-3" style={{ color: '#5a6480' }}>{t('about.desc1')}</p>
              <p className="mb-3" style={{ color: '#5a6480' }}>{t('about.desc2')}</p>
              <p className="mb-4" style={{ color: '#5a6480' }}>{t('about.desc3')}</p>
              <div className="d-flex flex-wrap gap-2 mb-4">
                <span className="value-chip">💙 Solidarité</span>
                <span className="value-chip">⚖️ Justice</span>
                <span className="value-chip">🤝 Égalité</span>
              </div>
              {/* Identité */}
              <div style={{ background: '#EBF0FF', borderRadius: 12, padding: '1.5rem' }}>
                <h3 style={{ fontFamily: 'Nunito', fontSize: '1rem', fontWeight: 800, color: '#0D2680', marginBottom: '1rem' }}>
                  📋 Identification
                </h3>
                <table style={{ width: '100%', fontSize: '0.85rem' }}>
                  <tbody>
                    {[
                      ['Dénomination', 'Association Wali ti Béafrica Londo (AWABEL)'],
                      ['Siège social', 'Bangui, 6ème arrondissement, quartier MODOUA, RCA'],
                      ['Création', '25 Novembre 2022 — Assemblée Générale constitutive'],
                      ['Statuts adoptés', '27 Janvier 2026'],
                      ['Règlement Intérieur', '15 Janvier 2026'],
                      ['Cadre légal', 'Loi N° 61/233 du 27 mai 1961 — Constitution RCA du 30 Août 2023'],
                      ['Nature', 'ONG nationale, à but non lucratif, apolitique, interconfessionnelle'],
                    ].map(([k, v]) => (
                      <tr key={k}>
                        <td style={{ fontWeight: 700, color: '#1A3FA8', padding: '5px 12px 5px 0', whiteSpace: 'nowrap', verticalAlign: 'top' }}>{k}</td>
                        <td style={{ color: '#1a1a2e', padding: '5px 0' }}>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="mission-card-dark">
                <h3>{t('about.domainsTitle')}</h3>
                {domains.map((d, i) => (
                  <div key={i} className="mission-item">
                    <div className="dot" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="awabel-section section-bg-light">
        <div className="awabel-container">
          <span className="section-tag">{t('team.tag')}</span>
          <h2 className="section-title">{t('team.title')}</h2>
          <div className="section-divider" />
          <p className="mb-4" style={{ color: '#5a6480', maxWidth: 560 }}>{t('team.sub')}</p>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 g-3">
            {TEAM_MEMBERS.map((m) => (
              <div key={m.id} className="col">
                <div className="member-card">
                  {m.image ? (
                    <img 
                      src={m.image} 
                      alt={m.name} 
                      className="member-photo"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const avatar = target.nextElementSibling as HTMLElement;
                        if (avatar) avatar.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className="member-avatar" style={{ display: m.image ? 'none' : 'flex' }}>
                    {m.initials}
                  </div>
                  <h4>{m.name}</h4>
                  <p className="member-role">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
