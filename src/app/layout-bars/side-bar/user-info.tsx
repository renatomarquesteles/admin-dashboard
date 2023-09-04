'use client'

import Image from 'next/image'
import { Box, Typography, useTheme } from '@mui/material'

import profilePicture from '@/assets/pfp.png'
import { tokens } from '@/styles/theme'

export function UserInfo() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box mb="25px">
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image
          src={profilePicture}
          alt="Profile picture"
          width={100}
          height={100}
          style={{ cursor: 'pointer', borderRadius: '50%' }}
        />
      </Box>

      <Box textAlign="center">
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ m: '10px 0 0 0' }}
        >
          Renato M.
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[500]}>
          CTO Admin
        </Typography>
      </Box>
    </Box>
  )
}
