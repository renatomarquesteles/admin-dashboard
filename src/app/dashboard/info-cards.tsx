'use client'

import { Box, useTheme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import EmailIcon from '@mui/icons-material/Email'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import TrafficIcon from '@mui/icons-material/Traffic'

import { StatBox } from '@/components/stat-box'
import { tokens } from '@/styles/theme'

export function InfoCards() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const isNonMobile = useMediaQuery('(min-width:600px)')

  return (
    <>
      <Box
        gridColumn={isNonMobile ? 'span 3' : 'span 12'}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: colors.primary[400] }}
      >
        <StatBox
          title="12,345"
          subtitle="Emails Sent"
          progress={0.75}
          increase="+14%"
          icon={
            <EmailIcon
              sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
            />
          }
        />
      </Box>
      <Box
        gridColumn={isNonMobile ? 'span 3' : 'span 12'}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: colors.primary[400] }}
      >
        <StatBox
          title="678,910"
          subtitle="Sales Obtained"
          progress={0.5}
          increase="+21%"
          icon={
            <PointOfSaleIcon
              sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
            />
          }
        />
      </Box>
      <Box
        gridColumn={isNonMobile ? 'span 3' : 'span 12'}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: colors.primary[400] }}
      >
        <StatBox
          title="11,121"
          subtitle="New Clients"
          progress={0.3}
          increase="+5%"
          icon={
            <PersonAddIcon
              sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
            />
          }
        />
      </Box>
      <Box
        gridColumn={isNonMobile ? 'span 3' : 'span 12'}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: colors.primary[400] }}
      >
        <StatBox
          title="1,314,151"
          subtitle="Traffic Inbound"
          progress={0.8}
          increase="+43%"
          icon={
            <TrafficIcon
              sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
            />
          }
        />
      </Box>
    </>
  )
}
