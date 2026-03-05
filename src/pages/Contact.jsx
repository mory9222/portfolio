import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import LinearProgress from '@mui/material/LinearProgress'
import emailjs from '@emailjs/browser'
import { useLang } from '../i18n.jsx'

export default function Contact() {
  const { t } = useLang()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })

    // Environment variables (set in .env.local):
    // VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus({ loading: false, success: false, error: t('contact.errorService') })
      return
    }

    try {
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      }

      const res = await emailjs.send(serviceId, templateId, templateParams, publicKey)
      setStatus({ loading: false, success: true, error: null })
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, success: false, error: err?.text || err?.message || t('contact.failure') })
    }
  }

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>{t('contact.title')}</Typography>

      {status.loading && <LinearProgress sx={{ mb: 2 }} />}
      {status.success && <Alert severity="success" sx={{ mb: 2 }}>{t('contact.success')}</Alert>}
      {status.error && <Alert severity="error" sx={{ mb: 2 }}>{status.error}</Alert>}

      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 2, maxWidth: 720 }}>
        <TextField label={t('contact.name')} name="name" value={form.name} onChange={onChange} required />
        <TextField label={t('contact.email')} name="email" type="email" value={form.email} onChange={onChange} required />
        <TextField label={t('contact.message')} name="message" multiline rows={6} value={form.message} onChange={onChange} required />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" type="submit" disabled={status.loading}>{t('contact.sendButton')}</Button>
          <Button variant="outlined" href="mailto:tmory519@gmail.com">{t('contact.openClient')}</Button>
        </Box>
      </Box>

      <Typography sx={{ mt: 3 }}>{t('contact.contactLine')}</Typography>
    </Container>
  )
}
