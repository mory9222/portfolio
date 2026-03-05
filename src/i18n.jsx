import React, { createContext, useContext, useState } from 'react'

const translations = {
  en: {
    header: { name: 'Mory Tounkara', nav: { home: 'Home', about: 'About', projects: 'Projects', contact: 'Contact' } },
    home: {
      title: "Hello — I'm Mory Tounkara",
      subtitle: ['Software Developer', 'Automation Engineer', 'Digital Marketer', 'AI Enthusiast'],
      bio: "I build polished web apps, automate workflows with Python, and help projects grow online through data-driven marketing.",
      ctaProjects: 'See Projects',
      ctaContact: 'Contact Me',
      missionTitle: 'Mission',
      missionContent: 'I aim to combine automation, clean UX and data-driven growth to deliver measurable results.',
      funFactsTitle: 'Fun Facts',
      funFactsContent: 'I love exploring new UI animations, and I collect vintage keyboards — one helped me code a small automation tool that I still use.'
    },
    about: {
      biographyTitle: 'Biography',
      bio1: "My name is Mory Tounkara, a 24-year-old IT professional and technology enthusiast with a strong passion for software development, automation, and digital innovation. I hold a Bachelor's degree in Computer Science and have completed professional training in Web Development and Digital Marketing.",
      bio2: "I studied in Bangalore, India, at Indo Asian Academy and Ray Integrated Colleges, where I strengthened my academic and technical foundation while developing strong communication skills in English. I am fluent in both English and French and enjoy working in international and multicultural environments.",
      contactTitle: 'Contact',
      skillsTitle: 'Technical Skills & Levels',
      experienceTitle: 'Experience',
      certificationsTitle: 'Certifications & Awards',
      dreamTitle: 'Dream & Story',
      extraExperience: [
        { role: 'Frontend Engineer (Freelance)', period: '2023 - Present', desc: 'Designed interactive UI/UX for multiple small businesses, improving user engagement by 30%.' },
        { role: 'Automation Engineer (Contract)', period: '2022 - 2023', desc: 'Built automation pipelines to replace repetitive tasks, saving clients 100+ hours monthly.' },
      ],
      certifications: [
        'Certified Frontend Developer — Web Institute',
        'Google Analytics Certified',
        'Advanced Python Automation — Remote Academy'
      ],
      more: 'Also proficient in growth strategies, A/B testing, and integrating AI tools to accelerate workflows.',
      dream: 'My dream is to build tools that make human work more creative — blending automation with delightful user experiences.',
      story: 'I began coding as a teenager, building small scripts to automate game tasks. That curiosity grew into a passion for building real-world solutions.',
      anecdote: 'Once I automated a report generation pipeline for a client; it freed up an entire day each week for their team.'
    }
    ,
    projects: {
      title: 'Projects & Demos',
      description: 'Interactive demos are shown in modals — click "Demo" to preview or add your own demo URLs.',
      searchPlaceholder: 'Search projects or tags'
    },
    project: {
      demo: 'Demo',
      open: 'Open',
      openInNewTab: 'Open in new tab',
      code: 'Code',
      featured: 'Featured'
    },
    contact: {
      title: 'Contact',
      sending: 'Sending...',
      success: 'Message sent — I will reply soon.',
      errorService: 'Email service not configured. Set VITE_EMAILJS_* env variables.',
      failure: 'Failed to send message.',
      sendButton: 'Send message',
      openClient: 'Open email client',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      contactLine: 'Phone: +223 90 60 51 95 — Email: tmory519@gmail.com'
    },
    footer: {
      text: 'Built with React & MUI'
    }
  },
  fr: {
    header: { name: 'Mory Tounkara', nav: { home: 'Accueil', about: 'À propos', projects: 'Projets', contact: 'Contact' } },
    home: {
      title: "Bonjour — Je suis Mory Tounkara",
      subtitle: ['Développeur', 'Ingénieur en automatisation', 'Marketeur digital', 'Passionné d’IA'],
      bio: "Je crée des applications web soignées, automatise des workflows en Python, et aide la croissance grâce au marketing data-driven.",
      ctaProjects: 'Voir les projets',
      ctaContact: 'Me contacter',
      missionTitle: 'Mission',
      missionContent: 'Je combine automatisation, UX soignée et croissance pilotée par les données pour des résultats mesurables.',
      funFactsTitle: 'Anecdotes',
      funFactsContent: 'J’adore explorer de nouvelles animations UI et je collectionne des claviers vintage — l’un d’eux m’a aidé à coder un petit outil d’automatisation que j’utilise encore.'
    },
    about: {
      biographyTitle: 'Biographie',
      bio1: "Je m'appelle Mory Tounkara, informaticien et passionné de technologie de 24 ans, spécialisé en développement logiciel, automatisation et innovation numérique. J'ai un diplôme en informatique et des formations en développement web et marketing digital.",
      bio2: "J'ai étudié à Bangalore, en Inde, à l'Indo Asian Academy et Ray Integrated Colleges, où j'ai renforcé mes bases techniques et développé de solides compétences en communication. Je parle couramment anglais et français et apprécie les environnements internationaux.",
      contactTitle: 'Contact',
      skillsTitle: 'Compétences techniques & niveaux',
      experienceTitle: 'Expérience',
      certificationsTitle: 'Certifications & Récompenses',
      dreamTitle: 'Rêve & Histoire',
      extraExperience: [
        { role: 'Ingénieur Frontend (Freelance)', period: '2023 - Présent', desc: 'Conception d’interfaces interactives, augmentation de l’engagement utilisateur de 30%.' },
        { role: 'Ingénieur Automatisation (Contract)', period: '2022 - 2023', desc: 'Mise en place de pipelines d’automatisation, économisant 100+ heures par mois.' },
      ],
      certifications: [
        'Développeur Frontend Certifié — Web Institute',
        'Certificat Google Analytics',
        'Automatisation Python Avancée — Remote Academy'
      ],
      more: 'Compétent aussi en stratégies de croissance, tests A/B et intégration d’outils IA.',
      dream: 'Mon rêve est de créer des outils qui rendent le travail humain plus créatif — en mêlant automatisation et expériences utilisateur plaisantes.',
      story: 'J’ai commencé à coder adolescent, en écrivant de petits scripts pour automatiser des tâches. Cette curiosité est devenue une passion pour les solutions concrètes.',
      anecdote: 'J’ai automatisé une fois la génération de rapports pour un client; cela lui a permis de récupérer une journée entière par semaine.'
    }
    ,
    projects: {
      title: 'Projets & Démos',
      description: 'Les démos interactives s’affichent dans des modales — cliquez sur "Demo" pour prévisualiser ou ajoutez vos propres URLs de démo.',
      searchPlaceholder: 'Rechercher projets ou tags'
    },
    project: {
      demo: 'Demo',
      open: 'Ouvrir',
      openInNewTab: 'Ouvrir dans un nouvel onglet',
      code: 'Code',
      featured: 'À la une'
    },
    contact: {
      title: 'Contact',
      sending: 'Envoi...',
      success: 'Message envoyé — je répondrai bientôt.',
      errorService: 'Service email non configuré. Ajoutez les variables VITE_EMAILJS_*.',
      failure: 'Échec de l’envoi du message.',
      sendButton: 'Envoyer le message',
      openClient: 'Ouvrir le client mail',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      contactLine: 'Téléphone : +223 90 60 51 95 — Email : tmory519@gmail.com'
    },
    footer: {
      text: 'Construit avec React & MUI'
    }
  }
}

const LangContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  const t = (path) => {
    if (!path) return ''
    const parts = path.split('.')
    let cur = translations[lang]
    for (const p of parts) {
      if (!cur) return ''
      cur = cur[p]
    }
    return cur
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}

export default translations
