# AWABEL — Site Web Officiel

**Association Wali ti Béafrica Londo**  
ONG Nationale d'Action Humanitaire et Sociale — République Centrafricaine

> Solidarité · Justice · Égalité

---

## 🚀 Installation & Démarrage

### Prérequis
- Node.js >= 20
- npm >= 10

### Installation
```bash
# Cloner le dépôt
git clone https://github.com/[votre-org]/awabel-website.git
cd awabel-website

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env
# Remplir .env avec vos clés EmailJS

# Démarrer le serveur de développement
npm run dev
```

### Build production
```bash
npm run build
npm run preview   # Prévisualiser le build
```

---

## 🔑 Variables d'environnement

Copiez `.env.example` en `.env` et remplissez :

| Variable | Description |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | ID du service EmailJS |
| `VITE_EMAILJS_TEMPLATE_CONTACT` | Template formulaire contact |
| `VITE_EMAILJS_TEMPLATE_ADHESION` | Template adhésion membre |
| `VITE_EMAILJS_TEMPLATE_BENEVOLAT` | Template bénévolat |
| `VITE_EMAILJS_TEMPLATE_PARTENARIAT` | Template partenariat |
| `VITE_EMAILJS_PUBLIC_KEY` | Clé publique EmailJS |
| `VITE_SITE_URL` | URL du site en production |

> ⚠️ Ne jamais committer le fichier `.env` — il est dans `.gitignore`

---

## 📁 Structure du projet

```
awabel-website/
├── public/
│   ├── logo.jpeg              # Logo officiel AWABEL
│   ├── team/                  # Photos membres (membre1.jpg ... membre9.jpg)
│   ├── awabel-site.html       # Version HTML standalone (sans build)
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── layout/            # Topbar, Navbar, Footer, Layout
│   │   ├── ui/                # ContactForm, boutons
│   │   └── sections/          # HeroSection, StatsSection
│   ├── pages/                 # Home, About, Programs, News, Join, Contact...
│   ├── hooks/                 # useEmailJS
│   ├── services/              # emailjs.service.ts
│   ├── types/                 # Interfaces TypeScript
│   ├── i18n/                  # fr.json, en.json, sg.json
│   ├── data/                  # Données statiques (équipe, partenaires, news)
│   └── styles/                # _variables.scss, _global.scss
├── .env.example
├── .github/workflows/ci.yml
├── vercel.json
└── vite.config.ts
```

---

## 📸 Personnaliser les photos de l'équipe

Remplacez les fichiers SVG dans `public/team/` par les vraies photos :

| Fichier | Membre |
|---|---|
| `public/team/membre1.jpg` | MOUNDJOUTENDE Jolie Judas — Coordonnatrice |
| `public/team/membre2.jpg` | DALI-KPANA NAYO Larissa — Responsable Programmes |
| `public/team/membre3.jpg` | Mme CAMEGO Née NGOY P. — Mobilisation des Ressources |
| `public/team/membre4.jpg` | NGARO Gisèle — Ressources Humaines |
| `public/team/membre5.jpg` | GRENGONDA Lisa Sandrine — Comptable |
| `public/team/membre6.jpg` | POUNOUBADA Doris — Suivi-Évaluation |
| `public/team/membre7.jpg` | NINGADAMA Milca — Mobilisation Communautaire |
| `public/team/membre8.jpg` | ZOZOKOPA Jordan Stéphane — Logistique |
| `public/team/membre9.jpg` | KAZIMO Cédric — Conseiller Juridique |

> Format recommandé : JPEG/WebP, 400×400px minimum, ratio carré (1:1)

---

## 📰 Modifier les actualités

Les actualités sont dans `src/data/index.ts` — tableau `NEWS_ARTICLES`.  
Ajoutez un article en copiant la structure :

```ts
{
  id: '5',
  date: '2026-05-01',
  category: 'programme', // programme | communique | rapport | evenement
  titleFr: 'Titre en français',
  titleEn: 'Title in English',
  excerptFr: 'Résumé en français...',
  excerptEn: 'Summary in English...',
}
```

---

## 🌍 Traductions

Fichiers dans `src/i18n/` :
- `fr.json` — Français (langue par défaut)
- `en.json` — Anglais
- `sg.json` — Sango

---

## 📧 Configuration EmailJS

1. Créez un compte sur [emailjs.com](https://www.emailjs.com)
2. Créez un service e-mail (Gmail recommandé)
3. Créez 4 templates (contact, adhésion, bénévolat, partenariat)
4. Copiez les IDs dans votre fichier `.env`
5. Autorisez votre domaine dans le tableau de bord EmailJS

---

## 🚀 Déploiement

### Vercel (recommandé)
```bash
npm i -g vercel
vercel --prod
```
Ajoutez les variables d'environnement dans le dashboard Vercel.

### Render
Connectez votre repo GitHub à Render.  
Build command : `npm run build`  
Publish directory : `dist`

### Version HTML standalone
Le fichier `public/awabel-site.html` est une version **100% autonome** sans dépendances — ouvrez-le directement dans un navigateur. Idéal pour démonstration hors ligne.

---

## 🧪 Tests

```bash
npm run test              # Tests unitaires
npm run test:coverage     # Couverture de code
```

---

## 📞 Contact

- **Email** : awabel26@gmail.com
- **Tél** : +236 74 71 99 99 | +236 70 05 05 87
- **Adresse** : Bangui, 6ème arrondissement, Quartier MODOUA, RCA
- **Développeur** : signeylguela@gmail.com | +236 72 90 33 59

---

*© 2026 AWABEL — Association Wali ti Béafrica Londo. Loi N° 61/233 du 27 mai 1961 — République Centrafricaine*
