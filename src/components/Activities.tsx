import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export default function Activities() {
  const { t } = useTranslation()
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Images de l'activité terrain - remplacées par les vraies images
  const activityImages = [
    { id: 1, src: '/images/image1.jpeg', caption: 'Rencontre avec la communauté Aka' },
    { id: 2, src: '/images/image2.jpeg', caption: 'Atelier participatif' },
    { id: 3, src: '/images/image3.jpeg', caption: 'Évaluation des besoins' },
    { id: 4, src: '/images/image4.jpeg', caption: 'Discussion avec les anciens' },
    { id: 5, src: '/images/image5.jpeg', caption: 'Activités avec les enfants' },
    { id: 6, src: '/images/image6.jpeg', caption: 'Distribution des produits de première nécessité à la communauté' }
  ]

  return (
    <section className="awabel-section bg-light">
      <div className="awabel-container">
        <span className="section-tag">{t('activities.title')}</span>
        <h2 className="section-title">{t('activities.title')}</h2>
        <div className="section-divider" />
        
        <p className="text-center mb-5" style={{ maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.1rem', color: '#5a6480' }}>
          {t('activities.description')}
        </p>

        {/* Grille d'images */}
        <div className="row g-4 mb-4">
          {activityImages.map((image, index) => (
            <div className="col-md-6 col-lg-4" key={image.id}>
              <div 
                className="activity-card position-relative overflow-hidden rounded-3 shadow-sm"
                style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }}
                onClick={() => setSelectedImage(index)}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
                }}
              >
                <div className="ratio ratio-4x3">
                  <img 
                    src={image.src}
                    alt={`${t('activities.altPrefix')} ${image.caption}`}
                    className="img-fluid object-fit-cover w-100 h-100"
                    onError={(e) => {
                      // Image placeholder si l'image n'existe pas
                      const target = e.target as HTMLImageElement
                      target.src = `https://picsum.photos/seed/awabel${image.id}/400/300.jpg`
                    }}
                  />
                </div>
                <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-gradient-to-t from-dark/80 to-transparent">
                  <p className="text-white mb-0 small fw-semibold">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal pour afficher l'image en grand */}
        {selectedImage !== null && (
          <div 
            className="modal fade show d-block" 
            style={{ backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 9999 }}
            onClick={() => setSelectedImage(null)}
          >
            <div className="modal-dialog modal-xl modal-dialog-centered d-flex align-items-center justify-content-center">
              <div className="modal-content bg-transparent border-0">
                <div className="modal-body p-0">
                  <button 
                    type="button" 
                    className="btn-close btn-close-white position-absolute top-0 end-0 m-3" 
                    style={{ zIndex: 10000 }}
                    onClick={() => setSelectedImage(null)}
                  />
                  <img 
                    src={activityImages[selectedImage].src}
                    alt={`${t('activities.altPrefix')} ${activityImages[selectedImage].caption}`}
                    className="img-fluid rounded"
                    style={{ maxHeight: '80vh', width: 'auto' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `https://picsum.photos/seed/awabel${activityImages[selectedImage].id}/1200/800.jpg`
                    }}
                  />
                  <div className="text-center mt-3">
                    <p className="text-white mb-0">{activityImages[selectedImage].caption}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bouton voir plus */}
        <div className="text-center mt-5">
          <button className="btn btn-outline-primary btn-lg px-4 py-2">
            {t('activities.viewMore')}
          </button>
        </div>
      </div>

      {/* Styles additionnels */}
      <style>{`
        .activity-card {
          height: 250px;
          overflow: hidden;
        }
        
        .bg-gradient-to-t {
          background: linear-gradient(to top, rgba(13, 38, 128, 0.8), transparent);
        }
        
        .from-dark\\/80 {
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
        }
      `}</style>
    </section>
  )
}
