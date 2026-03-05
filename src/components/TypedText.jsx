import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'

export default function TypedText({ strings = [], typeSpeed = 80, backSpeed = 40, loop = true }) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const mounted = useRef(true)

  useEffect(() => {
    mounted.current = true
    return () => { mounted.current = false }
  }, [])

  useEffect(() => {
    if (!strings || strings.length === 0) return
    const current = strings[index % strings.length]
    let timeout = null

    if (!isDeleting) {
      timeout = setTimeout(() => {
        if (!mounted.current) return
        setText(current.substring(0, text.length + 1))
        if (text.length + 1 === current.length) {
          // pause before deleting
          timeout = setTimeout(() => {
            if (!mounted.current) return
            setIsDeleting(true)
          }, 800)
        }
      }, typeSpeed)
    } else {
      timeout = setTimeout(() => {
        if (!mounted.current) return
        setText(current.substring(0, text.length - 1))
        if (text.length - 1 === 0) {
          setIsDeleting(false)
          setIndex(i => i + 1)
        }
      }, backSpeed)
    }

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDeleting, index, strings])

  return (
    <Box component="span" sx={{ fontWeight: 600 }}>
      <span>{text}</span>
      <span style={{ display: 'inline-block', width: 10, marginLeft: 6, opacity: 0.85 }} className="typed-caret">|</span>
      <style>{`.typed-caret{animation: blink 1s step-end infinite}@keyframes blink{50%{opacity:0}}`}</style>
    </Box>
  )
}
