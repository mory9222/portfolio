import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { FiSun, FiMoon, FiMenu } from 'react-icons/fi'
import { useLang } from '../i18n.jsx'
import profilePic from '../assets/moryphoto1.jpeg'
import { motion } from 'framer-motion'

export default function Header({ mode = 'light', toggleMode = () => {} }) {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const { lang, setLang, t } = useLang()

  const nav = [
    { to: '/', label: t('header.nav.home') },
    { to: '/about', label: t('header.nav.about') },
    { to: '/projects', label: t('header.nav.projects') },
    { to: '/contact', label: t('header.nav.contact') },
  ]

  const themeSwitchLabel = mode === 'light' ? (lang === 'en' ? 'Switch to Dark' : 'Basculer en mode sombre') : (lang === 'en' ? 'Switch to Light' : 'Basculer en mode jour')

  return (
    <>
      <AppBar position="sticky" color="primary" elevation={8}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar src={profilePic} alt="Mory" sx={{ width: 48, height: 48, boxShadow: 3 }}>
              MT
            </Avatar>
            <Typography variant="h6" component={RouterLink} to="/" sx={{ color: 'inherit', textDecoration: 'none', fontWeight: 700 }}>
              {t('header.name')}
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {nav.map((n) => (
              <Button key={n.to} color={location.pathname === n.to ? 'secondary' : 'inherit'} component={RouterLink} to={n.to} sx={{ fontWeight: 600 }}>{n.label}</Button>
            ))}

            <IconButton onClick={toggleMode} color="inherit" sx={{ ml: 1 }} aria-label="toggle theme">
              {mode === 'light' ? <FiMoon /> : <FiSun />}
            </IconButton>

            <Box sx={{ display: 'flex', ml: 1, gap: 0.5 }}>
              <motion.button whileTap={{ scale: 0.96 }} onClick={() => setLang('en')} style={{ background: lang === 'en' ? 'linear-gradient(90deg,#7c4dff,#1e88e5)' : 'transparent', color: lang === 'en' ? '#fff' : 'inherit', border: 'none', padding: '6px 10px', borderRadius: 6, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6 }}><span aria-hidden="true">🇬🇧</span><span>EN</span></motion.button>
              <motion.button whileTap={{ scale: 0.96 }} onClick={() => setLang('fr')} style={{ background: lang === 'fr' ? 'linear-gradient(90deg,#ff6f61,#ffb300)' : 'transparent', color: lang === 'fr' ? '#fff' : 'inherit', border: 'none', padding: '6px 10px', borderRadius: 6, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6 }}><span aria-hidden="true">🇫🇷</span><span>FR</span></motion.button>
            </Box>
          </Box>

          <IconButton color="inherit" sx={{ display: { xs: 'inline-flex', md: 'none' } }} onClick={() => setOpen(true)} aria-label="menu">
            <FiMenu />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: theme => ({
            background: theme.palette.mode === 'dark'
              ? 'linear-gradient(180deg, rgba(6,12,26,0.92), rgba(10,18,30,0.94))'
              : 'linear-gradient(180deg, rgba(255,255,255,0.96), rgba(250,250,255,0.98))',
            color: theme.palette.text.primary,
            borderTopLeftRadius: 12,
            borderBottomLeftRadius: 12,
            boxShadow: theme.palette.mode === 'dark' ? '0 12px 40px rgba(2,6,23,0.6)' : '0 10px 30px rgba(16,24,40,0.06)'
          })
        }}
      >
        <Box sx={{ width: 320, p: 2 }} role="presentation">
          <List>
            {nav.map((n, i) => (
              <motion.div key={n.to} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                <ListItem disablePadding>
                  <ListItemButton component={RouterLink} to={n.to} selected={location.pathname === n.to} sx={{ borderRadius: 1, mb: 0.5, color: 'inherit' }}>
                    <ListItemText primary={n.label} primaryTypographyProps={{ color: 'inherit', sx: { fontWeight: 700 } }} />
                  </ListItemButton>
                </ListItem>
              </motion.div>
            ))}

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
              <ListItem>
                <ListItemButton onClick={toggleMode} sx={{ borderRadius: 1 }}>
                  <ListItemText primary={themeSwitchLabel} />
                </ListItemButton>
              </ListItem>
            </motion.div>

            <Box sx={{ display: 'flex', gap: 1, mt: 2, justifyContent: 'center' }}>
              <motion.button whileTap={{ scale: 0.96 }} onClick={() => setLang('en')} style={{ background: lang === 'en' ? 'linear-gradient(90deg,#7c4dff,#1e88e5)' : 'transparent', color: lang === 'en' ? '#fff' : 'inherit', border: 'none', padding: '8px 12px', borderRadius: 8, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6 }}><span aria-hidden="true">🇬🇧</span><span>EN</span></motion.button>
              <motion.button whileTap={{ scale: 0.96 }} onClick={() => setLang('fr')} style={{ background: lang === 'fr' ? 'linear-gradient(90deg,#ff6f61,#ffb300)' : 'transparent', color: lang === 'fr' ? '#fff' : 'inherit', border: 'none', padding: '8px 12px', borderRadius: 8, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6 }}><span aria-hidden="true">🇫🇷</span><span>FR</span></motion.button>
            </Box>
          </List>
        </Box>
      </Drawer>
    </>
  )
}
