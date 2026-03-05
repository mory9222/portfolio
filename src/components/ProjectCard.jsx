import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import Box from '@mui/material/Box'
import CardActionArea from '@mui/material/CardActionArea'
import { motion } from 'framer-motion'
import { useLang } from '../i18n.jsx'

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)
  const openDemo = () => setOpen(true)
  const closeDemo = () => setOpen(false)
  const { t } = useLang()

  return (
    <>
      <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.995 }}>
        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <CardActionArea onClick={openDemo} sx={{ textAlign: 'left' }}>
            <Box sx={{ position: 'relative' }}>
              <CardMedia component="img" image={project.image} alt={project.title} sx={{ width: '100%', height: { xs: 180, sm: 200, md: 160 }, objectFit: 'cover' }} />
              <Box sx={{ position: 'absolute', left: 12, top: 12, bgcolor: 'rgba(0,0,0,0.45)', color: '#fff', px: 1, py: 0.5, borderRadius: 1, fontWeight: 700 }}>{project.featured ? t('project.featured') : ''}</Box>
            </Box>
            <CardContent>
              <Typography variant="h6">{project.title}</Typography>
              <Typography variant="body2" color="text.secondary">{project.desc}</Typography>
            </CardContent>
          </CardActionArea>

          <Box sx={{ flexGrow: 1 }} />
          <CardActions sx={{ pt: 0 }}>
            <Box sx={{ display: 'flex', gap: 1, flexGrow: 1, flexWrap: 'wrap' }}>
              {project.tags.map(t => <Chip key={t} size="small" label={t} />)}
            </Box>
            <Button size="small" onClick={openDemo}>{t('project.demo')}</Button>
            {project.demoUrl && (
              <Button size="small" href={project.demoUrl} target="_blank" rel="noopener noreferrer">{t('project.open')}</Button>
            )}
            <Button size="small" href={project.repo} target="_blank">{t('project.code')}</Button>
          </CardActions>
        </Card>
      </motion.div>

      <Dialog open={open} onClose={closeDemo} fullWidth maxWidth="md">
        <DialogTitle>{project.title}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'grid', gap: 2 }}>
            {project.demoUrl ? (
              <Box sx={{ position: 'relative', pt: '56.25%' }}>
                <iframe title="demo" src={project.demoUrl} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} />
              </Box>
            ) : (
              <img src={project.image} alt={project.title} style={{ width: '100%', borderRadius: 8 }} />
            )}
            {project.demoUrl && (
              <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                <Button variant="outlined" href={project.demoUrl} target="_blank" rel="noopener noreferrer">{t('project.openInNewTab')}</Button>
              </Box>
            )}
            <Typography variant="body2">{project.longDesc || project.desc}</Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}
