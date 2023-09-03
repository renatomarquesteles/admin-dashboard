'use client'

import { Box, Typography, useTheme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'

import { tokens } from '@/styles/theme'
import { BarChart } from '@/components/bar-chart'
import { GeographyChart } from '@/components/geography-chart'
import { ProgressCircle } from '@/components/progress-circle'

export function DashboardCharts() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const isNonMobile = useMediaQuery('(min-width:600px)')

  return (
    <>
      <Box
        gridColumn={isNonMobile ? 'span 4' : 'span 12'}
        gridRow="span 2"
        p="30px"
        sx={{ backgroundColor: colors.primary[400] }}
      >
        <Typography variant="h5" fontWeight="600">
          Campaign
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt="25px"
        >
          <ProgressCircle size={125} />
          <Typography
            variant="h5"
            color={colors.greenAccent[500]}
            sx={{ mt: '15px' }}
          >
            $21,222 revenue generated
          </Typography>
          <Typography>Includes extra misc expenditures and costs</Typography>
        </Box>
      </Box>
      <Box
        gridColumn={isNonMobile ? 'span 4' : 'span 12'}
        gridRow="span 2"
        sx={{ backgroundColor: colors.primary[400] }}
      >
        <Typography
          variant="h5"
          fontWeight="600"
          sx={{ padding: '30px 30px 0 30px' }}
        >
          Sales Quantity
        </Typography>
        <Box height="250px" mt="-20px">
          <BarChart isDashboard={true} />
        </Box>
      </Box>
      <Box
        gridColumn={isNonMobile ? 'span 4' : 'span 12'}
        gridRow="span 2"
        padding="30px"
        sx={{ backgroundColor: colors.primary[400] }}
      >
        <Typography variant="h5" fontWeight="600" sx={{ marginBottom: '15px' }}>
          Geography Based Traffic
        </Typography>
        <Box height="200px">
          <GeographyChart isDashboard={true} />
        </Box>
      </Box>
    </>
  )
}
