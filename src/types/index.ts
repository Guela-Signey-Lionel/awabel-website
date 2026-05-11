// types/index.ts

export interface TeamMember {
  id: string
  initials: string
  name: string
  role: string
  image?: string
}

export interface Program {
  icon: string
  title: string
  desc: string
  cta?: boolean
}

export interface NewsArticle {
  id: string
  date: string
  category: 'programme' | 'communique' | 'rapport' | 'evenement'
  titleFr: string
  titleEn: string
  excerptFr: string
  excerptEn: string
}

export interface Partner {
  emoji: string
  name: string
  type: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface MemberFormData {
  firstName: string
  lastName: string
  nationality: string
  email: string
  phone: string
  motivation: string
}

export interface VolunteerFormData {
  name: string
  skills: string
  availability: string
  email: string
  message: string
}

export interface PartnerFormData {
  organization: string
  contactName: string
  email: string
  partnerType: string
  message: string
}

export type Language = 'fr' | 'en'
