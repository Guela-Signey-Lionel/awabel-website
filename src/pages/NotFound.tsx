import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '3rem 1.5rem' }}>
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
      <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '3rem', color: '#1A3FA8', marginBottom: '.5rem' }}>{t('notfound.title')}</h1>
      <p style={{ color: '#5a6480', marginBottom: '2rem', fontSize: '1rem' }}>{t('notfound.message')}</p>
      <Link to="/" style={{ background: '#1A3FA8', color: '#fff', padding: '12px 28px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: '.875rem' }}>
        {t('notfound.backHome')}
      </Link>
    </div>
  )
}
