import type { TeamMember, NewsArticle, Partner } from '@/types'

export const TEAM_MEMBERS: TeamMember[] = [
  { id: '1', initials: 'MJ', name: 'MOUNDJOUTENDE Jolie Judas', role: 'Coordonnatrice Nationale', image: '/images/Coordo.png' },
  { id: '2', initials: 'DL', name: 'DALI-KPANA NAYO Larissa', role: 'Responsable Programmes & Projets', image: '/images/logo.jpeg' },
  { id: '3', initials: 'CN', name: 'Mme CAMEGO Née NGOY P.', role: 'Responsable Mobilisation des Ressources', image: '/images/logo.jpeg' },
  { id: '4', initials: 'NG', name: 'NGARO Gisèle', role: 'Responsable Ressources Humaines', image: '/images/logo.jpeg' },
  { id: '5', initials: 'GL', name: 'GRENGONDA Lisa Sandrine', role: 'Comptable', image: '/images/logo.jpeg' },
  { id: '6', initials: 'PD', name: 'POUNOUBADA Doris', role: 'Responsable Suivi-Évaluation', image: '/images/logo.jpeg' },
  { id: '7', initials: 'NM', name: 'NINGADAMA Milca', role: 'Chargée Mobilisation Communautaire', image: '/images/CMC.png' },
  { id: '8', initials: 'ZJ', name: 'ZOZOKOPA Jordan Stéphane', role: 'Responsable Logistique', image: '/images/logo.jpeg' },
  { id: '9', initials: 'KC', name: 'KAZIMO Cédric', role: 'Conseiller Juridique', image: '/images/logo.jpeg' },
  { id: '10', initials: 'MF', name: 'MBAMBA Flora', role: 'Assistante Mobilisatrice', image: '/images/AM.jpeg' },
]

export const PARTNERS: Partner[] = [
  { emoji: '🇺🇳', name: 'Agences ONU', type: 'Nations Unies' },
  { emoji: '🌍', name: 'ONG Internationales', type: 'International' },
  { emoji: '🏛️', name: 'Ambassades', type: 'Diplomatique' },
  { emoji: '🇨🇫', name: 'État Centrafricain', type: 'Gouvernemental' },
  { emoji: '🏥', name: 'ONG Nationales', type: 'National' },
  { emoji: '📚', name: 'Institutions Éducatives', type: 'Éducation' },
  { emoji: '💼', name: 'Secteur Privé', type: 'Économique' },
  { emoji: '🤝', name: 'Société Civile', type: 'Civil' },
]

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: '1',
    date: '2026-04-15',
    category: 'communique',
    titleFr: "Lancement officiel du site web AWABEL",
    titleEn: "Official launch of the AWABEL website",
    excerptFr: "AWABEL franchit une nouvelle étape en lançant son site web officiel pour renforcer sa visibilité internationale.",
    excerptEn: "AWABEL takes a new step by launching its official website to strengthen its international visibility.",
  },
  {
    id: '2',
    date: '2026-03-08',
    category: 'evenement',
    titleFr: "Journée Internationale des Droits des Femmes 2026",
    titleEn: "International Women's Day 2026",
    excerptFr: "À l'occasion du 8 mars, AWABEL a organisé des ateliers de sensibilisation sur l'autonomisation des femmes à Bangui.",
    excerptEn: "On March 8, AWABEL organized awareness workshops on women's empowerment in Bangui.",
  },
  {
    id: '3',
    date: '2026-02-20',
    category: 'programme',
    titleFr: "Programme d'alphabétisation — Bilan du premier trimestre",
    titleEn: "Literacy program — First quarter report",
    excerptFr: "Le programme d'alphabétisation du premier trimestre 2026 a touché plus de 200 bénéficiaires dans 3 quartiers de Bangui.",
    excerptEn: "The 2026 first quarter literacy program reached more than 200 beneficiaries in 3 districts of Bangui.",
  },
  {
    id: '4',
    date: '2026-01-27',
    category: 'rapport',
    titleFr: "Adoption des Statuts et Règlement Intérieur AWABEL",
    titleEn: "Adoption of AWABEL Statutes and Internal Regulations",
    excerptFr: "Les Statuts de l'ONG AWABEL ont été officiellement adoptés le 27 janvier 2026, suivant l'adoption du Règlement Intérieur le 15 janvier.",
    excerptEn: "AWABEL's Statutes were officially adopted on January 27, 2026, following the adoption of the Internal Regulations on January 15.",
  },
]

export const AWABEL_COLORS = {
  primary: '#1A3FA8',
  dark: '#0D2680',
  light: '#EBF0FF',
  accent: '#93C5FD',
  white: '#FFFFFF',
}

export const AWABEL_CONTACTS = {
  phones: [
    { number: '+236 74 71 99 99', label: '📞', isWhatsApp: false },
    { number: '+236 70 05 05 87', label: '📞', isWhatsApp: false },
    { number: '+236 72 12 56 63', label: '💬', isWhatsApp: true }
  ],
  email: 'awabel26@gmail.com',
  address: 'Bangui, 6ème arrondissement, quartier MODOUA',
  country: 'République Centrafricaine',
  coordinates: { lat: 4.3612, lng: 18.5550 },
}
