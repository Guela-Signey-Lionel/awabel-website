import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import ContactForm from '@/components/ui/ContactForm'
import { AWABEL_CONTACTS } from '@/data'

// Fix leaflet default icon
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

export default function Contact() {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{t('meta.contactTitle')}</title>
      </Helmet>

      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #0D2680 0%, #1A3FA8 100%)', color: '#fff', paddingBottom: '3rem' }}>
        <div className="awabel-container">
          <span className="section-tag" style={{ background: 'rgba(255,255,255,0.2)' }}>{t('contact.tag')}</span>
          <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '2.2rem', color: '#fff', marginTop: '1rem', marginBottom: '0.75rem' }}>
            {t('contact.title')}
          </h1>
        </div>
      </div>

      <section className="awabel-section">
        <div className="awabel-container">
          <div className="row g-5">
            {/* Contact info */}
            <div className="col-lg-5">
              <div className="contact-info-block">
                <h3>{t('contact.infoTitle')}</h3>

                <div className="contact-row">
                  <div className="c-icon">📍</div>
                  <div>
                    <div className="c-label">{t('contact.labelAddress')}</div>
                    <div className="c-val" style={{ whiteSpace: 'pre-line' }}>{t('contact.addressVal')}</div>
                  </div>
                </div>

                <div className="contact-row">
                  <div className="c-icon">📞</div>
                  <div>
                    <div className="c-label">{t('contact.labelPhone')}</div>
                    {AWABEL_CONTACTS.phones.map((phone, index) => (
                      <div key={index} className="c-val">
                        <a href={`tel:${phone.number.replace(/\s/g, '')}`}>
                          <span style={{ color: phone.isWhatsApp ? '#25D366' : 'inherit' }}>
                            {phone.label}
                          </span>
                          {phone.isWhatsApp ? ' WhatsApp' : ''} {phone.number}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="contact-row">
                  <div className="c-icon">✉️</div>
                  <div>
                    <div className="c-label">{t('contact.labelEmail')}</div>
                    <div className="c-val">
                      <a href={`mailto:${AWABEL_CONTACTS.email}`}>{AWABEL_CONTACTS.email}</a>
                    </div>
                  </div>
                </div>

                <div className="contact-row">
                  <div className="c-icon">🌐</div>
                  <div>
                    <div className="c-label">{t('contact.labelSocial')}</div>
                    <div className="d-flex gap-2 mt-2 flex-wrap">
                      {[
                        { cls: 'fb', label: 'Facebook', href: 'https://www.facebook.com/share/1Tfo58ytWu/' },
                        { cls: 'wa', label: 'WhatsApp', href: 'https://wa.me/23672125663' },
                      ].map(({ cls, label, href }) => (
                        <a key={cls} href={href} target="_blank" rel="noopener noreferrer" className={`social-btn ${cls}`}
                          style={{ width: 'auto', borderRadius: 6, padding: '6px 12px', fontSize: '0.75rem' }}
                          title={label} aria-label={label}
                        >
                          {label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-4">
                  <MapContainer
                    center={[AWABEL_CONTACTS.coordinates.lat, AWABEL_CONTACTS.coordinates.lng]}
                    zoom={13}
                    className="map-container"
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[AWABEL_CONTACTS.coordinates.lat, AWABEL_CONTACTS.coordinates.lng]}>
                      <Popup>
                        <strong>AWABEL</strong><br />
                        Quartier MODOUA, 6ème arrondissement<br />
                        Bangui, République Centrafricaine<br />
                        📞 +236 74 71 99 99
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="col-lg-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
