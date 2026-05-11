import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { sendEmail, formatJoinEmail } from '@/services/emailService'

type Tab = 'adhesion' | 'benevolat' | 'partenariat'

function AdhesionForm() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { register, handleSubmit, reset } = useForm()
  
  const onSubmit = async (data: Record<string, string>) => {
    setStatus('loading')
    
    try {
      const fullName = `${data.firstName} ${data.lastName}`
      const emailData = formatJoinEmail({
        name: fullName,
        email: data.email,
        phone: data.phone,
        motivation: data.motivation,
        skills: `${data.nationality} - ${data.email}`,
        availability: 'Disponible pour adhésion'
      })

      const success = await sendEmail(emailData)
      
      if (success) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Erreur:', error)
      setStatus('error')
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="row g-3 mb-3">
        <div className="col-md-6"><label className="form-label fw-bold" style={{fontSize:'.72rem',textTransform:'uppercase'}}>{t('join.memberTitle')}</label><input className="awabel-input" type="text" placeholder="Prénom" {...register('firstName')} /></div>
        <div className="col-md-6"><label className="form-label fw-bold" style={{fontSize:'.72rem',textTransform:'uppercase',visibility:'hidden'}}>.</label><input className="awabel-input" type="text" placeholder="Nom" {...register('lastName')} /></div>
      </div>
      <div className="row g-3 mb-3">
        <div className="col-md-6"><label className="form-label fw-bold" style={{fontSize:'.72rem',textTransform:'uppercase'}}>Nationalité</label><input className="awabel-input" type="text" placeholder="Ex: Centrafricaine" {...register('nationality')} /></div>
        <div className="col-md-6"><label className="form-label fw-bold" style={{fontSize:'.72rem',textTransform:'uppercase'}}>Email</label><input className="awabel-input" type="email" placeholder="votre@email.com" {...register('email')} /></div>
      </div>
      <div className="mb-3"><label className="form-label fw-bold" style={{fontSize:'.72rem',textTransform:'uppercase'}}>Téléphone</label><input className="awabel-input" type="tel" placeholder="+236 XX XX XX XX" {...register('phone')} /></div>
      <div className="mb-3"><label className="form-label fw-bold" style={{fontSize:'.72rem',textTransform:'uppercase'}}>Motivation</label><textarea className="awabel-input" rows={4} placeholder="Pourquoi souhaitez-vous rejoindre AWABEL ?" {...register('motivation')} /></div>
      <button type="submit" className="btn-awabel" disabled={status==='loading'}>{status==='loading'?'Envoi...':'Envoyer ma candidature →'}</button>
      {status==='success'&&<div className="alert-awabel-success mt-3">✅ Votre demande d'adhésion a été envoyée !</div>}
      {status==='error'&&<div className="alert-awabel-error mt-3">❌ Erreur. Écrivez directement à awabel26@gmail.com</div>}
    </form>
  )
}

function BenevolatForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { register, handleSubmit, reset } = useForm()
  
  const onSubmit = async (data: Record<string, string>) => {
    setStatus('loading')
    
    try {
      const emailData = formatJoinEmail({
        name: data.name,
        email: data.email,
        phone: '',
        motivation: data.message || 'Candidature bénévolat',
        skills: data.skills,
        availability: data.availability
      })

      const success = await sendEmail(emailData)
      
      if (success) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Erreur:', error)
      setStatus('error')
    }
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row g-3 mb-3">
        <div className="col-md-6"><label className="form-label fw-bold" style={{fontSize:'.72rem',textTransform:'uppercase'}}>Nom complet</label><input className="awabel-input" type="text" placeholder="Votre nom" {...register('name')} /></div>
        <div className="col-md-6"><label className="form-label fw-bold" style={{fontSize:'.72rem',textTransform:'uppercase'}}>Email</label><input className="awabel-input" type="email" placeholder="votre@email.com" {...register('email')} /></div>
      </div>
      <div className="mb-3"><label className="form-label fw-bold" style={{fontSize:'.72rem',textTransform:'uppercase'}}>Compétences</label><input className="awabel-input" type="text" placeholder="Ex: Santé, Agriculture, Communication..." {...register('skills')} /></div>
      <div className="mb-3"><label className="form-label fw-bold" style={{fontSize:'.72rem',textTransform:'uppercase'}}>Disponibilité</label><input className="awabel-input" type="text" placeholder="Ex: Weekends, temps partiel..." {...register('availability')} /></div>
      <div className="mb-3"><label className="form-label fw-bold" style={{fontSize:'.72rem',textTransform:'uppercase'}}>Message</label><textarea className="awabel-input" rows={4} placeholder="Décrivez votre motivation..." {...register('message')} /></div>
      <button type="submit" className="btn-awabel" disabled={status==='loading'}>{status==='loading'?'Envoi...':'Envoyer ma candidature →'}</button>
      {status==='success'&&<div className="alert-awabel-success mt-3">✅ Votre candidature bénévolat a été envoyée !</div>}
      {status==='error'&&<div className="alert-awabel-error mt-3">❌ Erreur. Écrivez directement à awabel26@gmail.com</div>}
    </form>
  )
}

function PartnerForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { register, handleSubmit, reset } = useForm()
  
  const onSubmit = async (data: Record<string, string>) => {
    setStatus('loading')
    
    try {
      const emailData = formatJoinEmail({
        name: `${data.organization} - ${data.contactName}`,
        email: data.email,
        phone: '',
        motivation: `Partenariat: ${data.partnerType}`,
        skills: `Organisation: ${data.organization}`,
        availability: 'Disponible pour partenariat'
      })

      const success = await sendEmail(emailData)
      
      if (success) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Erreur:', error)
      setStatus('error')
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row g-3 mb-3">
        <div className="col-md-6"><label className="form-label fw-bold" style={{fontSize:'.72rem',textTransform:'uppercase'}}>Organisation</label><input className="awabel-input" type="text" placeholder="Nom de votre organisation" {...register('organization')} /></div>
        <div className="col-md-6"><label className="form-label fw-bold" style={{fontSize:'.72rem',textTransform:'uppercase'}}>Contact</label><input className="awabel-input" type="text" placeholder="Nom du représentant" {...register('contactName')} /></div>
      </div>
      <div className="row g-3 mb-3">
        <div className="col-md-6"><label className="form-label fw-bold" style={{fontSize:'.72rem',textTransform:'uppercase'}}>Email</label><input className="awabel-input" type="email" placeholder="contact@organisation.org" {...register('email')} /></div>
        <div className="col-md-6"><label className="form-label fw-bold" style={{fontSize:'.72rem',textTransform:'uppercase'}}>Type de partenariat</label>
          <select className="awabel-input" {...register('partnerType')}>
            <option>Partenariat technique</option>
            <option>Partenariat financier</option>
            <option>Partenariat institutionnel</option>
            <option>Autre</option>
          </select>
        </div>
      </div>
      <div className="mb-3"><label className="form-label fw-bold" style={{fontSize:'.72rem',textTransform:'uppercase'}}>Message</label><textarea className="awabel-input" rows={4} placeholder="Décrivez votre proposition..." {...register('message')} /></div>
      <button type="submit" className="btn-awabel" disabled={status==='loading'}>{status==='loading'?'Envoi...':'Envoyer ma proposition →'}</button>
      {status==='success'&&<div className="alert-awabel-success mt-3">✅ Votre proposition a été envoyée !</div>}
      {status==='error'&&<div className="alert-awabel-error mt-3">❌ Erreur. Écrivez directement à awabel26@gmail.com</div>}
    </form>
  )
}

export default function Join() {
  const { t } = useTranslation()
  const [tab, setTab] = useState<Tab>('adhesion')

  const TABS: { key: Tab; labelFr: string; labelEn: string; emoji: string }[] = [
    { key: 'adhesion', labelFr: 'Devenir membre', labelEn: 'Become a member', emoji: '👤' },
    { key: 'benevolat', labelFr: 'Bénévolat', labelEn: 'Volunteering', emoji: '🙋' },
    { key: 'partenariat', labelFr: 'Partenariat', labelEn: 'Partnership', emoji: '🤝' },
  ]

  return (
    <>
      <Helmet><title>{t('join.title')} — AWABEL</title></Helmet>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg,#0D2680 0%,#1A3FA8 100%)', color: '#fff', paddingBottom: '3rem' }}>
        <div className="awabel-container">
          <span className="section-tag" style={{ background: 'rgba(255,255,255,.2)' }}>{t('join.tag')}</span>
          <h1 style={{ fontFamily: 'Nunito', fontWeight: 900, fontSize: '2.2rem', color: '#fff', marginTop: '1rem', marginBottom: '.75rem' }}>{t('join.title')}</h1>
          <p style={{ opacity: .88, maxWidth: 600 }}>Contribuez à notre mission humanitaire en devenant membre, bénévole ou en proposant un partenariat.</p>
        </div>
      </div>

      <section className="awabel-section">
        <div className="awabel-container" style={{ maxWidth: 800 }}>
          {/* Tabs */}
          <div className="d-flex gap-2 mb-4 flex-wrap">
            {TABS.map((t_) => (
              <button key={t_.key}
                onClick={() => setTab(t_.key)}
                style={{
                  background: tab === t_.key ? '#1A3FA8' : '#EBF0FF',
                  color: tab === t_.key ? '#fff' : '#1A3FA8',
                  border: '1.5px solid #1A3FA8',
                  borderRadius: 8, padding: '10px 22px',
                  fontSize: '.875rem', fontWeight: 700, cursor: 'pointer',
                  fontFamily: 'Open Sans, sans-serif', transition: 'all .2s',
                }}
              >
                {t_.emoji} {t_.labelFr}
              </button>
            ))}
          </div>

          {/* Forms */}
          <div style={{ background: '#fff', borderRadius: 14, padding: '2rem', border: '1.5px solid #dde4f5' }}>
            {tab === 'adhesion' && (<><h3 style={{ fontFamily: 'Nunito', fontSize: '1.1rem', fontWeight: 800, color: '#0D2680', marginBottom: '1.5rem' }}>Formulaire d'adhésion membre</h3><AdhesionForm /></>)}
            {tab === 'benevolat' && (<><h3 style={{ fontFamily: 'Nunito', fontSize: '1.1rem', fontWeight: 800, color: '#0D2680', marginBottom: '1.5rem' }}>Candidature bénévolat</h3><BenevolatForm /></>)}
            {tab === 'partenariat' && (<><h3 style={{ fontFamily: 'Nunito', fontSize: '1.1rem', fontWeight: 800, color: '#0D2680', marginBottom: '1.5rem' }}>Proposition de partenariat</h3><PartnerForm /></>)}
          </div>
        </div>
      </section>
    </>
  )
}
