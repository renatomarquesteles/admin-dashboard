'use client'

import { Box, Button, useTheme } from '@mui/material'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'

import { Header } from '@/components/header'
import { tokens } from '@/styles/theme'

export function DashboardHeader() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        '@media (max-width: 600px)': {
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          pb: '20px',
        },
      }}
    >
      <Header title="Dashboard" subtitle="Welcome to your dashboard." />

      <Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: '14px',
            fontWeight: 'bold',
            padding: '10px 20px',
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: '10px' }} />
          Download Reports
        </Button>
      </Box>
    </Box>
  )
}
