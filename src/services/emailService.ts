interface EmailData {
  to: string
  subject: string
  body: string
  from?: string
  replyTo?: string
}

export async function sendEmail(data: EmailData): Promise<boolean> {
  try {
    // Simulation d'envoi d'email pour le développement
    const emailParams = {
      to_email: data.to,
      from_name: data.from || 'Site Web AWABEL',
      reply_to: data.replyTo || 'awabel26@gmail.com',
      subject: data.subject,
      message: data.body,
    }

    console.log('Email envoyé:', emailParams)
    
    // Simulation réussie
    return true
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    return false
  }
}

export function formatContactEmail(formData: any): EmailData {
  const { name, email, phone, subject, message } = formData
  
  return {
    to: 'awabel26@gmail.com',
    subject: `Nouveau message de contact - ${subject}`,
    from: name,
    replyTo: email,
    body: `
Nouveau message de contact depuis le site AWABEL:

Nom: ${name}
Email: ${email}
Téléphone: ${phone}
Sujet: ${subject}

Message:
${message}

---
Envoyé depuis le site web de l'ONG AWABEL
    `.trim()
  }
}

export function formatDonateEmail(formData: any): EmailData {
  const { name, email, phone, amount, message, paymentMethod } = formData
  
  return {
    to: 'awabel26@gmail.com',
    subject: `Nouvelle intention de don - ${amount}€`,
    from: name,
    replyTo: email,
    body: `
Nouvelle intention de don depuis le site AWABEL:

Nom: ${name}
Email: ${email}
Téléphone: ${phone}
Montant: ${amount}€
Méthode de paiement souhaitée: ${paymentMethod}

Message personnel:
${message || 'Aucun message'}

---
Cette personne souhaite faire un don à l'ONG AWABEL.
Veuillez la contacter pour finaliser le paiement.
    `.trim()
  }
}

export function formatJoinEmail(formData: any): EmailData {
  const { name, email, phone, motivation, skills, availability } = formData
  
  return {
    to: 'awabel26@gmail.com',
    subject: `Nouvelle demande d'adhésion - ${name}`,
    from: name,
    replyTo: email,
    body: `
Nouvelle demande d'adhésion depuis le site AWABEL:

Nom: ${name}
Email: ${email}
Téléphone: ${phone}

Motivation:
${motivation}

Compétences:
${skills}

Disponibilité:
${availability}

---
Cette personne souhaite rejoindre l'ONG AWABEL.
    `.trim()
  }
}
