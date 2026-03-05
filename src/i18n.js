import React, { createContext, useContext, useState } from 'react'

const translations = {
  en: {
    header: { name: 'Mory Tounkara', nav: { home: 'Home', about: 'About', projects: 'Projects', contact: 'Contact' } },
    home: {
      title: "Hello — I'm Mory Tounkara",
      subtitle: ['Software Developer', 'Automation Engineer', 'Digital Marketer', 'AI Enthusiast'],
      bio: "I build polished web apps, automate workflows with Python, and help projects grow online through data-driven marketing.",
      ctaProjects: 'See Projects',
      ctaContact: 'Contact Me'
    },
    about: {
      extraExperience: [
        { role: 'Frontend Engineer (Freelance)', period: '2023 - Present', desc: 'Designed interactive UI/UX for multiple small businesses, improving user engagement by 30%.' },
        { role: 'Automation Engineer (Contract)', period: '2022 - 2023', desc: 'Built automation pipelines to replace repetitive tasks, saving clients 100+ hours monthly.' },
      ],
      certifications: [
        'Certified Frontend Developer — Web Institute',
        'Google Analytics Certified',
        'Advanced Python Automation — Remote Academy'
      ],
      more: 'Also proficient in growth strategies, A/B testing, and integrating AI tools to accelerate workflows.'
    }
  },
  fr: {
    header: { name: 'Mory Tounkara', nav: { home: 'Accueil', about: 'À propos', projects: 'Projets', contact: 'Contact' } },
    home: {
      title: "Bonjour — Je suis Mory Tounkara",
      subtitle: ['Développeur', 'Ingénieur en automatisation', 'Marketeur digital', 'Passionné d’IA'],
      bio: "Je crée des applications web soignées, automatise des workflows en Python, et aide la croissance grâce au marketing data-driven.",
      ctaProjects: 'Voir les projets',
      ctaContact: 'Me contacter'
    },
    about: {
      extraExperience: [
        { role: 'Ingénieur Frontend (Freelance)', period: '2023 - Présent', desc: 'Conception d’interfaces interactives, augmentation de l’engagement utilisateur de 30%.' },
        { role: 'Ingénieur Automatisation (Contract)', period: '2022 - 2023', desc: 'Mise en place de pipelines d’automatisation, économisant 100+ heures par mois.' },
      ],
      certifications: [
        'Développeur Frontend Certifié — Web Institute',
        'Certificat Google Analytics',
        'Automatisation Python Avancée — Remote Academy'
      ],
      more: 'Compétent aussi en stratégies de croissance, tests A/B et intégration d’outils IA.'
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
