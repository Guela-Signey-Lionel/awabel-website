import { useState, useCallback } from 'react'
import { sendEmail, type FormType } from '@/services/emailjs.service'

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export function useEmailJS(formType: FormType) {
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [error, setError] = useState<string | null>(null)

  const submit = useCallback(
    async (templateParams: Record<string, string>) => {
      setStatus('loading')
      setError(null)
      try {
        await sendEmail(formType, templateParams)
        setStatus('success')
      } catch (err) {
        setStatus('error')
        setError(err instanceof Error ? err.message : 'Unknown error')
      }
    },
    [formType]
  )

  const reset = useCallback(() => {
    setStatus('idle')
    setError(null)
  }, [])

  return { status, error, submit, reset }
}
