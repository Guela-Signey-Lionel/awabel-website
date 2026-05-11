import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''

const TEMPLATES = {
  contact: import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT || '',
  adhesion: import.meta.env.VITE_EMAILJS_TEMPLATE_ADHESION || '',
  benevolat: import.meta.env.VITE_EMAILJS_TEMPLATE_BENEVOLAT || '',
  partenariat: import.meta.env.VITE_EMAILJS_TEMPLATE_PARTENARIAT || '',
}

export type FormType = keyof typeof TEMPLATES

export async function sendEmail(
  formType: FormType,
  templateParams: Record<string, string>
): Promise<void> {
  if (!SERVICE_ID || !PUBLIC_KEY) {
    throw new Error('EmailJS not configured. Please set environment variables.')
  }

  await emailjs.send(SERVICE_ID, TEMPLATES[formType], templateParams, PUBLIC_KEY)
}

export function isEmailJSConfigured(): boolean {
  return Boolean(SERVICE_ID && PUBLIC_KEY && TEMPLATES.contact)
}
