import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  '/images/image1.jpeg',
  '/images/image2.jpeg',
  '/images/image4.jpeg',
  '/images/image5.jpeg',
  '/images/image6.jpeg'
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <>
      <style>{`
        .hero-carousel-img {
          width: auto;
          height: auto;
          max-width: 550px;
          max-height: 450px;
          border-radius: 12px;
          object-fit: contain;
        }
        
        @media (max-width: 768px) {
          .hero-carousel-img {
            max-width: 400px;
            max-height: 300px;
          }
        }
        
        @media (max-width: 480px) {
          .hero-carousel-img {
            max-width: 360px;
            max-height: 270px;
          }
        }
        
        @media (max-width: 360px) {
          .hero-carousel-img {
            max-width: 320px;
            max-height: 240px;
          }
        }
        
        @media (max-width: 768px) {
          .carousel-nav-btn {
            display: none !important;
          }
        }
      `}</style>
      <div className="position-relative" style={{ borderRadius: '20px', overflow: 'hidden' }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="hero-carousel-img"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </AnimatePresence>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="position-absolute top-50 start-0 translate-middle-y btn btn-dark bg-opacity-30 border-0 ms-3 carousel-nav-btn"
        style={{ zIndex: 10 }}
        aria-label="Previous image"
      >
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="position-absolute top-50 end-0 translate-middle-y btn btn-dark bg-opacity-30 border-0 me-3 carousel-nav-btn"
        style={{ zIndex: 10 }}
        aria-label="Next image"
      >
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>

      {/* Indicators */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3" style={{ zIndex: 10 }}>
        <div className="d-flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`btn rounded-circle p-1 ${index === currentIndex ? 'btn-primary' : 'btn-secondary bg-opacity-50'}`}
              style={{ width: '10px', height: '10px' }}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
      </div>
    </>
  )
}
