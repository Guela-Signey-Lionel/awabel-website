import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AWABEL_CONTACTS } from '@/data'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="awabel-footer">
      <div className="awabel-container">
        <div className="row g-4 mb-4">
          {/* Brand */}
          <div className="col-lg-4 col-md-6">
            <p className="footer-brand-name">AWABEL</p>
            <p className="footer-desc" style={{ whiteSpace: 'pre-line' }}>
              {t('footer.desc')}
            </p>
            <p className="footer-slogan">{t('footer.slogan')}</p>
            <div className="d-flex gap-2 flex-wrap">
              <a href="#" className="social-btn fb" title="Facebook" aria-label="Facebook">f</a>
              <a href="#" className="social-btn li" title="LinkedIn" aria-label="LinkedIn">in</a>
              <a href="#" className="social-btn tw" title="Twitter/X" aria-label="Twitter">𝕏</a>
              <a href="#" className="social-btn wa" title="WhatsApp" aria-label="WhatsApp">W</a>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-lg-2 col-md-3 col-6">
            <h4>{t('footer.quicklinks')}</h4>
            <ul>
              <li><Link to="/">{t('nav.home')}</Link></li>
              <li><Link to="/about">{t('nav.about')}</Link></li>
              <li><Link to="/programs">{t('nav.programs')}</Link></li>
              <li><Link to="/news">{t('nav.news')}</Link></li>
              <li><Link to="/partners">{t('nav.partners')}</Link></li>
              <li><Link to="/join">{t('nav.join')}</Link></li>
              <li><Link to="/contact">{t('nav.contact')}</Link></li>
              <li><Link to="/legal">{t('footer.legal')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-3 col-6">
            <h4>{t('footer.contactTitle')}</h4>
            <p className="footer-contact-val">
              📍 {AWABEL_CONTACTS.address}<br />
              {AWABEL_CONTACTS.country}
            </p>
            {AWABEL_CONTACTS.phones.map((phone) => (
              <p key={phone} className="footer-contact-val">
                📞 <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
              </p>
            ))}
            <p className="footer-contact-val">
              ✉ <a href={`mailto:${AWABEL_CONTACTS.email}`}
                style={{ color: '#93C5FD' }}>{AWABEL_CONTACTS.email}</a>
            </p>
          </div>

          {/* Mission */}
          <div className="col-lg-3 col-md-12">
            <h4>Mission</h4>
            <p className="footer-contact-val" style={{ fontSize: '0.8rem', lineHeight: 1.7 }}>
              AWABEL œuvre pour la protection des droits des femmes, la lutte contre la pauvreté
              et le développement durable en République Centrafricaine.
            </p>
            <div className="mt-3">
              <Link to="/join"
                className="btn btn-sm"
                style={{
                  background: '#1A3FA8',
                  color: '#fff',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '6px 16px',
                  textDecoration: 'none',
                }}
              >
                Rejoindre AWABEL →
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  )
}
