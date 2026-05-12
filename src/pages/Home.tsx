import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import Activities from '@/components/Activities'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function Home() {
  const { t } = useTranslation()
  const programs = t('programs.items', { returnObjects: true }) as Array<{
    icon: string; title: string; desc: string; cta?: boolean
  }>
  const domains = t('about.domains', { returnObjects: true }) as string[]

  return (
    <>
      <Helmet>
        <title>{t('meta.homeTitle')}</title>
        <meta name="description" content={t('meta.homeDesc')} />
        <meta property="og:title" content={t('meta.homeTitle')} />
        <meta property="og:description" content={t('meta.homeDesc')} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'NGO',
          name: 'AWABEL',
          alternateName: 'A Wali ti Béafrica E Londo',
          url: import.meta.env.VITE_SITE_URL || 'https://awabel.org',
          email: 'awabel26@gmail.com',
          telephone: '+23674719999',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Quartier MODOUA, 6ème arrondissement',
            addressLocality: 'Bangui',
            addressCountry: 'CF',
          },
          foundingDate: '2022-11-25',
          description: 'ONG Nationale d\'Action Humanitaire et Sociale, République Centrafricaine',
        })}</script>
      </Helmet>

      <HeroSection />
      <StatsSection />

      {/* ABOUT */}
      <motion.section
        className="awabel-section"
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
      >
        <div className="awabel-container">
          <span className="section-tag">{t('about.tag')}</span>
          <h2 className="section-title">{t('about.title')}</h2>
          <div className="section-divider" />
          <div className="row g-4 align-items-start">
            <div className="col-lg-7">
              <p className="mb-3" style={{ color: '#5a6480' }}>{t('about.desc1')}</p>
              <p className="mb-3" style={{ color: '#5a6480' }}>{t('about.desc2')}</p>
              <p className="mb-4" style={{ color: '#5a6480' }}>{t('about.desc3')}</p>
              <div className="d-flex flex-wrap gap-2">
                <span className="value-chip">💙 Solidarité</span>
                <span className="value-chip">⚖️ Justice</span>
                <span className="value-chip">🤝 Égalité</span>
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
      </motion.section>

      {/* PROGRAMS */}
      <motion.section
        className="awabel-section section-bg-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
      >
        <div className="awabel-container">
          <span className="section-tag">{t('programs.tag')}</span>
          <h2 className="section-title">{t('programs.title')}</h2>
          <div className="section-divider" />
          <p className="mb-4" style={{ color: '#5a6480', maxWidth: 560 }}>{t('programs.sub')}</p>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
            {programs.map((prog, i) => (
              <div key={i} className="col">
                <div className={`prog-card${prog.cta ? ' prog-card--cta' : ''}`}>
                  <div className="prog-icon">{prog.icon}</div>
                  <h3>{prog.title}</h3>
                  <p>{prog.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link to="/programs"
              style={{
                background: '#1A3FA8', color: '#fff', padding: '12px 28px',
                borderRadius: '8px', fontWeight: 700, fontSize: '0.875rem',
                textDecoration: 'none', display: 'inline-block',
              }}
            >
              Voir tous les programmes →
            </Link>
          </div>
        </div>
      </motion.section>

      
      {/* ACTIVITIES SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
      >
        <Activities />
      </motion.div>

      {/* CTA BAND */}
      <section style={{ background: '#1A3FA8', color: '#fff', padding: '4rem 0' }}>
        <div className="awabel-container text-center">
          <h2 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '1.8rem', color: '#fff', marginBottom: '1rem' }}>
            Rejoignez le mouvement AWABEL
          </h2>
          <p style={{ opacity: 0.88, marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>
            Devenez membre, bénévole ou partenaire pour contribuer au développement durable de la République Centrafricaine.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link to="/join"
              style={{ background: '#FFC107', color: '#000', padding: '13px 28px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '0.875rem' }}
            >
              Rejoindre AWABEL
            </Link>
            <Link to="/contact"
              style={{ background: 'transparent', color: '#fff', padding: '13px 28px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '0.875rem', border: '2px solid rgba(255,255,255,0.5)' }}
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
