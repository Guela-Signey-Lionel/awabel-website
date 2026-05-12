import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import HeroCarousel from '@/components/HeroCarousel'


export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .hero-inner {
            flex-direction: column-reverse !important;
          }
          .hero-text {
            order: 2 !important;
          }
          .hero-logo-wrap {
            order: 1 !important;
            margin-bottom: 2rem !important;
          }
        }
      `}</style>
    <section className="awabel-hero">
      <div className="hero-decoration-2"></div>
      <div className="awabel-container">
        <div className="hero-inner">

          {/* ── Texte gauche ── */}
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.div
              className="hero-welcome"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              style={{ 
                display: 'inline-block',
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '20px',
                padding: '0.45rem 1.2rem',
                fontSize: '0.85rem',
                fontWeight: '700',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
                color: 'white'
              }}
            >
              Bienvenue sur le site officiel d'AWABEL
            </motion.div>

            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              {t('hero.badge')}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              {t('hero.title')} <span style={{ color: '#FFC107' }}>{t('hero.titleHighlight')}</span>
            </motion.h1>

            <motion.p
              className="hero-slogan"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              {t('hero.slogan')}
            </motion.p>

            <motion.p
              className="hero-desc"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              {t('hero.desc')}
            </motion.p>

            <motion.div
              className="hero-btns"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
            >
              <Link to="/programs" className="btn btn-hero-primary">
                {t('hero.btnPrograms')}
              </Link>
              <Link to="/contact" className="btn btn-hero-outline">
                {t('hero.btnContact')}
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Carrousel d'images droit ── */}
          <motion.div
            className="hero-logo-wrap"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
          >
            <HeroCarousel />
          </motion.div>

        </div>
      </div>
    </section>
    </>
  )
}
