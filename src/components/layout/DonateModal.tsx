import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { sendEmail, formatDonateEmail } from '@/services/emailService'

interface DonateModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DonateModal({ isOpen, onClose }: DonateModalProps) {
  const { t } = useTranslation()
  const [selectedAmount, setSelectedAmount] = useState<string>('')
  const [customAmount, setCustomAmount] = useState<string>('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('orange')

  if (!isOpen) return null

  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const finalAmount = selectedAmount || customAmount
    if (!finalAmount || !formData.name || !formData.email) return

    setIsSubmitting(true)

    try {
      const emailData = formatDonateEmail({
        ...formData,
        amount: finalAmount,
        paymentMethod
      })

      const success = await sendEmail(emailData)
      
      if (success) {
        alert(`${t('donate.payment.instructions')}\n\n${t('donate.form.amountLabel')}: ${finalAmount}FCFA\n${t('donate.form.nameLabel')}: ${formData.name}\n\nUn email de confirmation a été envoyé à awabel26@gmail.com`)
        onClose()
        
        // Réinitialiser le formulaire
        setSelectedAmount('')
        setCustomAmount('')
        setFormData({ name: '', email: '', phone: '', message: '' })
        setPaymentMethod('orange')
      } else {
        alert('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.')
      }
    } catch (error) {
      console.error('Erreur:', error)
      alert('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex={-1}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-0">
            <h5 className="modal-title fw-bold">{t('donate.title')}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          
          <div className="modal-body">
            <p className="text-muted mb-4">{t('donate.subtitle')}</p>
            
            <form onSubmit={handleSubmit}>
              {/* Montants prédéfinis */}
              <div className="mb-4">
                <label className="form-label fw-semibold">{t('donate.form.amountLabel')}</label>
                <div className="row g-2 mb-3">
                  {['10', '25', '50', '100'].map((amount) => (
                    <div className="col-6 col-md-3" key={amount}>
                      <button
                        type="button"
                        className={`btn w-100 ${selectedAmount === amount ? 'btn-warning' : 'btn-outline-warning'}`}
                        onClick={() => handleAmountSelect(amount)}
                      >
                        {t(`donate.amounts.${amount}`)}
                      </button>
                    </div>
                  ))}
                </div>
                
                {/* Montant personnalisé */}
                <div className="input-group">
                  <span className="input-group-text">FCFA</span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder={t('donate.amounts.custom')}
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    min="1"
                  />
                </div>
              </div>

              {/* Informations du donateur */}
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">{t('donate.form.nameLabel')}</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">{t('donate.form.emailLabel')}</label>
                  <input
                    type="email"
                    className="form-control"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">{t('donate.form.phoneLabel')}</label>
                  <input
                    type="tel"
                    className="form-control"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">{t('donate.form.messageLabel')}</label>
                  <textarea
                    className="form-control"
                    rows={1}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
              </div>

              {/* Moyens de paiement */}
              <div className="mb-4">
                <h6 className="fw-semibold mb-3">{t('donate.payment.methods')}</h6>
                <div className="d-flex gap-3 flex-wrap">
                  <div className="form-check">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="payment" 
                      id="orange" 
                      checked={paymentMethod === 'orange'}
                      onChange={() => setPaymentMethod('orange')}
                    />
                    <label className="form-check-label" htmlFor="orange">
                      📱 {t('donate.payment.orange')}
                    </label>
                  </div>
                  <div className="form-check">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="payment" 
                      id="moov" 
                      checked={paymentMethod === 'moov'}
                      onChange={() => setPaymentMethod('moov')}
                    />
                    <label className="form-check-label" htmlFor="moov">
                      📱 {t('donate.payment.moov')}
                    </label>
                  </div>
                  <div className="form-check">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="payment" 
                      id="bank" 
                      checked={paymentMethod === 'bank'}
                      onChange={() => setPaymentMethod('bank')}
                    />
                    <label className="form-check-label" htmlFor="bank">
                      🏦 {t('donate.payment.bank')}
                    </label>
                  </div>
                </div>
              </div>

              {/* Boutons */}
              <div className="d-flex gap-2 justify-content-end">
                <button type="button" className="btn btn-secondary" onClick={onClose}>
                  {t('donate.form.cancel')}
                </button>
                <button type="submit" className="btn btn-warning" disabled={isSubmitting}>
                  {isSubmitting ? 'Envoi en cours...' : t('donate.form.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
