import React, { useMemo, useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { AnimatePresence, motion } from 'framer-motion'

function buildTheme(mode) {
  return createTheme({
    palette: {
      mode,
      primary: { main: mode === 'dark' ? '#90caf9' : '#1e88e5' },
      secondary: { main: mode === 'dark' ? '#ffcc80' : '#ffb300' },
      background: { default: mode === 'dark' ? '#071125' : '#f7fbff', paper: mode === 'dark' ? '#0f1724' : '#fff' },
      text: {
        primary: mode === 'dark' ? 'rgba(230,240,255,0.95)' : 'rgba(12,16,25,0.95)',
        secondary: mode === 'dark' ? 'rgba(200,220,255,0.75)' : 'rgba(80,88,100,0.8)'
      },
      action: {
        active: mode === 'dark' ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.6)',
        hover: mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)'
      },
    },
    typography: { fontFamily: 'Inter, Roboto, sans-serif' },
  })
}

function AnimatedRoute({ children }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()
  const [mode, setMode] = useState('dark')
  const theme = useMemo(() => buildTheme(mode), [mode])

  useEffect(() => {
    try { document.documentElement.setAttribute('data-theme', mode) } catch (e) {}
  }, [mode])

  const toggleMode = () => setMode(m => (m === 'light' ? 'dark' : 'light'))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header mode={mode} toggleMode={toggleMode} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedRoute><Home /></AnimatedRoute>} />
          <Route path="/about" element={<AnimatedRoute><About /></AnimatedRoute>} />
          <Route path="/projects" element={<AnimatedRoute><Projects /></AnimatedRoute>} />
          <Route path="/contact" element={<AnimatedRoute><Contact /></AnimatedRoute>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  )
}
