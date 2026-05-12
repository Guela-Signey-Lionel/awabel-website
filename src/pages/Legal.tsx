import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

export default function Legal() {
  const { t } = useTranslation()

  const legalData = [
    [t('legal.identification'), 'A Wali ti Béafrica E Londo (AWABEL)'],
    ['Dénomination', 'A Wali ti Béafrica E Londo (AWABEL)'],
    ['Siège social', 'Bangui, 6ème arrondissement, Quartier MODOUA, République Centrafricaine'],
    ['Date de création', '25 Novembre 2022 — Assemblée Générale constitutive'],
    ['Statuts adoptés', '27 Janvier 2026'],
    ['Règlement Intérieur', '15 Janvier 2026'],
    ['Cadre légal', 'Loi N° 61/233 du 27 mai 1961'],
    ['Constitution', 'Constitution de la RCA du 30 Août 2023'],
    ['Nature', 'ONG nationale, à but non lucratif, apolitique, interconfessionnelle'],
    ['Contact', 'awabel26@gmail.com | +236 74 71 99 99'],
  ]

  return (
    <>
      <Helmet><title>{t('footer.legal')} — AWABEL</title></Helmet>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg,#0D2680 0%,#1A3FA8 100%)', color: '#fff', paddingBottom: '3rem' }}>
        <div className="awabel-container">
          <span className="section-tag" style={{ background: 'rgba(255,255,255,.2)' }}>{t('legal.tag')}</span>
          <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '2.2rem', color: '#fff', marginTop: '1rem', marginBottom: '.75rem' }}>{t('legal.title')}</h1>
        </div>
      </div>
      <section className="awabel-section">
        <div className="awabel-container" style={{ maxWidth: 800 }}>
          <div style={{ background: '#EBF0FF', borderRadius: 12, padding: '2rem', marginBottom: '1.5rem' }}>
            <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#0D2680', fontSize: '1.2rem', marginBottom: '1rem' }}>{t('legal.identification')}</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.875rem' }}>
              {legalData.map(([k, v]) => (
                <tr key={k} style={{ borderBottom: '1px solid #dde4f5' }}>
                  <td style={{ padding: '8px 12px 8px 0', fontWeight: 700, color: '#1A3FA8', whiteSpace: 'nowrap', verticalAlign: 'top', width: '35%' }}>{k}</td>
                  <td style={{ padding: '8px 0', color: '#1a1a2e' }}>{v}</td>
                </tr>
              ))}
            </table>
          </div>
          <div style={{ background: '#fff', borderRadius: 12, padding: '2rem', border: '1.5px solid #dde4f5', marginBottom: '1.5rem' }}>
            <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#0D2680', fontSize: '1.2rem', marginBottom: '1rem' }}>{t('legal.privacy')}</h2>
            <p style={{ color: '#5a6480', fontSize: '.875rem', lineHeight: 1.8, marginBottom: '.875rem' }}>
              {t('legal.privacyText1')}
            </p>
            <p style={{ color: '#5a6480', fontSize: '.875rem', lineHeight: 1.8 }}>
              {t('legal.privacyText2')}
            </p>
          </div>
          <div style={{ background: '#fff', borderRadius: 12, padding: '2rem', border: '1.5px solid #dde4f5' }}>
            <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, color: '#0D2680', fontSize: '1.2rem', marginBottom: '1rem' }}>{t('legal.hosting')}</h2>
            <p style={{ color: '#5a6480', fontSize: '.875rem', lineHeight: 1.8 }}>
              {t('legal.hostingText')}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
