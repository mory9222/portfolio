import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import LinearProgress from '@mui/material/LinearProgress'
import { motion } from 'framer-motion'
import { useLang } from '../i18n.jsx'

const SKILLS = [
  { name: 'HTML & CSS', level: 90, desc: 'Semantic markup, responsive layouts, Flexbox, Grid, accessibility basics.' },
  { name: 'JavaScript (ES6+)', level: 88, desc: 'Modern JS, DOM, fetch, async/await, tooling and bundlers.' },
  { name: 'React.js', level: 90, desc: 'Hooks, component design, state management, routing, performance optimizations.' },
  { name: 'Material-UI / Styling', level: 82, desc: 'Theming, responsive systems, styled components and CSS-in-JS patterns.' },
  { name: 'Node.js basics', level: 70, desc: 'Express fundamentals, REST APIs, package management and simple servers.' },
  { name: 'Firebase', level: 72, desc: 'Auth, Firestore/Realtime DB, Hosting and serverless functions.' },
  { name: 'Python', level: 92, desc: 'Scripting, automation, web scraping, data processing with Pandas.' },
  { name: 'Automation (Selenium, PyAutoGUI)', level: 88, desc: 'Automating browser flows and desktop actions for repetitive tasks.' },
  { name: 'Web Scraping (BeautifulSoup)', level: 86, desc: 'Parsing HTML, extracting data, handling rate limits and storage.' },
  { name: 'Data (Pandas, CSV)', level: 80, desc: 'Data cleaning, transformation and lightweight analysis pipelines.' },
  { name: 'Digital Marketing & SEO', level: 76, desc: 'Campaign strategies, analytics, SEO basics and growth tactics for social platforms.' },
  { name: 'AI Integration', level: 68, desc: 'Using modern AI tools to automate and augment workflows; practical integrations.' },
]

export default function About() {
  const { t } = useLang()
  return (
    <Container sx={{ py: 6 }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <Typography variant="h4" gutterBottom className="section-title active">{t('about.biographyTitle') || 'Biography'}</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }} className="glass">
              <Typography paragraph>{t('about.bio1') || 'My name is Mory Tounkara, a 24-year-old IT professional and technology enthusiast with a strong passion for software development, automation, and digital innovation. I hold a Bachelor\'s degree in Computer Science and have completed professional training in Web Development and Digital Marketing.'}</Typography>
              <Typography paragraph>{t('about.bio2') || 'I studied in Bangalore, India, at Indo Asian Academy and Ray Integrated Colleges, where I strengthened my academic and technical foundation while developing strong communication skills in English. I am fluent in both English and French and enjoy working in international and multicultural environments.'}</Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6">{t('about.contactTitle')}</Typography>
              <Typography>{t('contact.contactLine')}</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }} className="glass">
              <Typography variant="h6" gutterBottom className="section-title">{t('about.skillsTitle') || 'Technical Skills & Levels'}</Typography>
              <Box sx={{ display: 'grid', gap: 2 }}>
                {SKILLS.map((s, i) => (
                  <motion.div key={s.name} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                    <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>{s.name} <span style={{ opacity: 0.8 }}>{s.level}%</span></Typography>
                    <LinearProgress variant="determinate" value={s.level} sx={{ height: 10, borderRadius: 6, mb: 1 }} />
                    <Typography variant="body2" color="text.secondary">{s.desc}</Typography>
                  </motion.div>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom className="section-title">{t('about.experienceTitle') || 'Experience'}</Typography>
          <Box sx={{ display: 'grid', gap: 2 }}>
            {(t('about.extraExperience') || []).map((e, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
                <Paper sx={{ p: 2, mb: 1 }} className="glass">
                  <Typography sx={{ fontWeight: 700 }}>{e.role} <span style={{ fontWeight: 400, opacity: 0.8 }}> — {e.period}</span></Typography>
                  <Typography variant="body2" color="text.secondary">{e.desc}</Typography>
                </Paper>
              </motion.div>
            ))}
          </Box>

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }} className="section-title">{t('about.certificationsTitle') || 'Certifications & Awards'}</Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {(t('about.certifications') || []).map((c, i) => (
              <Paper key={i} sx={{ p: 1, px: 2 }} className="glass">
                <Typography variant="body2">{c}</Typography>
              </Paper>
            ))}
          </Box>

          <Typography variant="body1" sx={{ mt: 3 }} color="text.secondary">{t('about.more')}</Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }} className="section-title">{t('about.dreamTitle') || 'Dream & Story'}</Typography>
          <Paper sx={{ p: 2 }} className="glass">
            <Typography variant="h6">{t('about.dream')}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{t('about.story')}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontStyle: 'italic' }}>{t('about.anecdote')}</Typography>
          </Paper>
        </Box>
      </motion.div>
    </Container>
  )
}
