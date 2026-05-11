import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslation } from 'react-i18next'
import { sendEmail, formatContactEmail } from '@/services/emailService'

const schema = z.object({
  name: z.string().min(2, 'Nom requis (min. 2 caractères)'),
  email: z.string().email('Adresse e-mail invalide'),
  subject: z.string().min(1, 'Sujet requis'),
  message: z.string().min(10, 'Message requis (min. 10 caractères)'),
})

type FormData = z.infer<typeof schema>

export default function ContactForm() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    
    try {
      const emailData = formatContactEmail({
        ...data,
        phone: '', // Pas de champ téléphone dans le formulaire de contact
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

  const subjects = t('contact.subjects', { returnObjects: true }) as string[]

  return (
    <div className="form-card">
      <h3>{t('contact.formTitle')}</h3>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-3">
          <label className="form-label fw-bold" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
            {t('contact.fields.name')}
          </label>
          <input
            className="awabel-input"
            type="text"
            placeholder={t('contact.fields.namePlaceholder')}
            {...register('name')}
          />
          {errors.name && <div style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: 4 }}>{errors.name.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
            {t('contact.fields.email')}
          </label>
          <input
            className="awabel-input"
            type="email"
            placeholder={t('contact.fields.emailPlaceholder')}
            {...register('email')}
          />
          {errors.email && <div style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: 4 }}>{errors.email.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
            {t('contact.fields.subject')}
          </label>
          <select className="awabel-input" {...register('subject')}>
            <option value="">-- Choisir --</option>
            {subjects.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.subject && <div style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: 4 }}>{errors.subject.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
            {t('contact.fields.message')}
          </label>
          <textarea
            className="awabel-input"
            rows={4}
            placeholder={t('contact.fields.messagePlaceholder')}
            {...register('message')}
          />
          {errors.message && <div style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: 4 }}>{errors.message.message}</div>}
        </div>

        <button
          type="submit"
          className="btn-awabel"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? t('contact.sending') : t('contact.fields.submit')}
        </button>

        {status === 'success' && (
          <div className="alert-awabel-success mt-3">{t('contact.success')}</div>
        )}
        {status === 'error' && (
          <div className="alert-awabel-error mt-3">
            {t('contact.error')}
          </div>
        )}
      </form>
    </div>
  )
}
