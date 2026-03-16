import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { useLang } from '../i18n.jsx'
import { PROJECTS } from '../assets/projectsData.js'

export default function Projects() {
  const { t } = useLang()
  const [q, setQ] = useState('')
  const filtered = PROJECTS.filter(p => (p.title + p.tags.join(' ')).toLowerCase().includes(q.toLowerCase()))

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
