import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { useLang } from '../i18n.jsx'
import project1Img from '../assets/projet1.png'

const SAMPLE_PROJECTS = [
  { id: 1, title: 'King Chaussures (Demo)', tags: ['html', 'css', 'demo'], desc: 'Screenshot and demo for the King Chaussures project.', image: project1Img, repo: '#', demoUrl: 'https://mory9222.github.io/king-chaussures/' },
  { id: 2, title: 'Web Scraper', tags: ['python', 'scraping'], desc: 'Scrapes and processes data using BeautifulSoup and requests.', image: 'https://images.unsplash.com/photo-1526378725107-0c2b24f6f8b4?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=2', repo: '#', demoUrl: '' },
  { id: 3, title: 'Automation Suite', tags: ['python', 'automation'], desc: 'Desktop automation with PyAutoGUI and Selenium flows.', image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=3', repo: '#', demoUrl: '' },
]

export default function Projects() {
  const { t } = useLang()
  const [q, setQ] = useState('')
  const filtered = SAMPLE_PROJECTS.filter(p => (p.title + p.tags.join(' ')).toLowerCase().includes(q.toLowerCase()))

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>{t('projects.title')}</Typography>
      <Typography color="text.secondary" sx={{ mb: 2 }}>{t('projects.description')}</Typography>
      <TextField placeholder={t('projects.searchPlaceholder')} value={q} onChange={(e) => setQ(e.target.value)} sx={{ mb: 3 }} fullWidth />

      <Grid container spacing={3}>
        {filtered.map(p => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={p.id}>
            <motion.div whileHover={{ y: -6 }} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
              <ProjectCard project={p} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
