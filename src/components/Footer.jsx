import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useLang } from '../i18n.jsx'

export default function Footer() {
  const { t } = useLang()
  return (
    <Box component="footer" sx={{ mt: 6, py: 4, textAlign: 'center', bgcolor: 'background.paper' }}>
      <Typography variant="body2">© {new Date().getFullYear()} Mory Tounkara — {t('footer.text')}</Typography>
    </Box>
  )
}
