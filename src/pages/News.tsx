import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { NEWS_ARTICLES } from '@/data'

const CATEGORY_COLORS: Record<string, string> = {
  programme: '#1A3FA8',
  communique: '#0D2680',
  rapport: '#059669',
  evenement: '#dc6b19',
}
const CATEGORY_ICONS: Record<string, string> = {
  programme: '📋',
  communique: '📢',
  rapport: '📊',
  evenement: '🗓️',
}

export default function News() {
  const { t, i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  return (
    <>
      <Helmet>
        <title>{t('meta.newsTitle')}</title>
      </Helmet>

      <div className="page-hero" style={{ background: 'linear-gradient(135deg,#0D2680 0%,#1A3FA8 100%)', color: '#fff', paddingBottom: '3rem' }}>
        <div className="awabel-container">
          <span className="section-tag" style={{ background: 'rgba(255,255,255,.2)' }}>{t('news.tag')}</span>
          <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '2.2rem', color: '#fff', marginTop: '1rem', marginBottom: '.75rem' }}>{t('news.title')}</h1>
          <p style={{ opacity: .88, maxWidth: 600 }}>{t('news.sub')}</p>
        </div>
      </div>

      <section className="awabel-section">
        <div className="awabel-container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {NEWS_ARTICLES.map((article) => (
              <div key={article.id} className="col">
                <div style={{ background: '#fff', borderRadius: 12, border: '1.5px solid #dde4f5', overflow: 'hidden', height: '100%', transition: 'all .25s', cursor: 'default' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(26,63,168,.1)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '' }}
                >
                  <div style={{ height: 140, background: `linear-gradient(135deg,${CATEGORY_COLORS[article.category]},#1A3FA8)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                    {CATEGORY_ICONS[article.category]}
                  </div>
                  <div style={{ padding: '1.25rem' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.8px', textTransform: 'uppercase', color: CATEGORY_COLORS[article.category], marginBottom: '.5rem' }}>
                      {article.category}
                    </div>
                    <h3 style={{ fontFamily: 'Nunito', fontSize: '.95rem', fontWeight: 800, color: '#0D2680', marginBottom: '.5rem', lineHeight: 1.4 }}>
                      {isEn ? article.titleEn : article.titleFr}
                    </h3>
                    <p style={{ fontSize: '.83rem', color: '#5a6480', lineHeight: 1.6, marginBottom: '.875rem' }}>
                      {isEn ? article.excerptEn : article.excerptFr}
                    </p>
                    <div style={{ fontSize: '.75rem', color: '#5a6480' }}>{article.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
