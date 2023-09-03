'use client'

import { Box, IconButton, Typography, useTheme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'

import { mockTransactions } from '@/data/mockData'
import { tokens } from '@/styles/theme'
import { LineChart } from '@/components/line-chart'

export function Revenue() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const isNonMobile = useMediaQuery('(min-width:600px)')

  return (
    <>
      <Box
        gridColumn={isNonMobile ? 'span 8' : 'span 12'}
        gridRow="span 2"
        sx={{ backgroundColor: colors.primary[400] }}
      >
        <Box
          mt="25px"
          p="0 30px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
              Revenue Generated
            </Typography>
            <Typography
              variant="h3"
              fontWeight="500"
              color={colors.greenAccent[500]}
            >
              $61,718,192
            </Typography>
          </Box>

          <Box>
            <IconButton>
              <DownloadOutlinedIcon
                sx={{ fontSize: '26px', color: colors.greenAccent[500] }}
              />
            </IconButton>
          </Box>
        </Box>

        <Box height="250px" ml="-20px">
          <LineChart isDashboard />
        </Box>
      </Box>

      {/* TRANSACTIONS */}
      <Box
        gridColumn={isNonMobile ? 'span 4' : 'span 12'}
        gridRow="span 2"
        overflow="auto"
        sx={{ backgroundColor: colors.primary[400] }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid ${colors.primary[500]}`}
          color={colors.grey[100]}
          p="15px"
        >
          <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
            Recent Transactions
          </Typography>
        </Box>
        {mockTransactions.map((transaction, i) => (
          <Box
            key={`${transaction.txId}-${i}`}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                {transaction.txId}
              </Typography>
              <Typography color={colors.grey[100]}>
                {transaction.user}
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>{transaction.date}</Box>
            <Box
              p="5px 10px"
              borderRadius="4px"
              sx={{ backgroundColor: colors.greenAccent[600] }}
            >
              ${transaction.cost}
            </Box>
          </Box>
        ))}
      </Box>
    </>
  )
}
