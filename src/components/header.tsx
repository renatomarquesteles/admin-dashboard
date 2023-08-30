'use client'

import { Box, Typography, useTheme } from '@mui/material'

import { tokens } from '@/styles/theme'

interface HeaderProps {
  title: string
  subtitle: string
}

export function Header({ title, subtitle }: HeaderProps) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: '5' }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  )
}
