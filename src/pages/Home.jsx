import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import TypedText from '../components/TypedText'
import { useLang } from '../i18n.jsx'
import { motion } from 'framer-motion'
import { useTheme } from '@mui/material/styles'
import { Link as RouterLink } from 'react-router-dom'
import profilePic from '../assets/moryphoto1.jpeg'
import heroPic from '../assets/moryphoto2.jpeg'

const SKILLS = ['React', 'JavaScript', 'Python', 'Automation', 'SEO', 'Firebase']

export default function Home() {
  const { t } = useLang()
  const theme = useTheme()
  return (
    <Container sx={{ py: 6 }}>
      <Box className="hero" sx={{ borderRadius: 2, p: { xs: 2, md: 3 }, backgroundImage: theme.palette.mode === 'dark' ? `linear-gradient(rgba(0,0,0,0.22), rgba(0,0,0,0.12)), url(${heroPic})` : 'none', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Avatar src={profilePic} alt="Mory" sx={{ width: 200, height: 200, mx: { xs: 'auto', md: 0 }, boxShadow: 6 }} />
          </Grid>

          <Grid item xs={12} md={8}>
            <motion.div initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Typography variant="h3" gutterBottom className="gradient-text">{t('home.title')}</Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                <TypedText strings={t('home.subtitle')} typeSpeed={40} backSpeed={30} loop />
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {t('home.bio')}
              </Typography>

              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                {SKILLS.map(s => <Chip key={s} label={s} color="primary" />)}
              </Box>

              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="contained" component={RouterLink} to="/projects">{t('home.ctaProjects')}</Button>
                <Button variant="outlined" component={RouterLink} to="/contact">{t('home.ctaContact')}</Button>
              </Box>
              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" sx={{ mt: 2 }} className="section-title">{t('home.missionTitle')}</Typography>
                <Typography color="text.secondary">{t('home.missionContent')}</Typography>

                <Typography variant="h6" sx={{ mt: 2 }} className="section-title">{t('home.funFactsTitle')}</Typography>
                <Typography color="text.secondary">{t('home.funFactsContent')}</Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
