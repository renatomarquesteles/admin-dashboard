import { Box } from '@mui/material'

import { GeographyChart } from '@/components/geography-chart'
import { Header } from '@/components/header'

export default function Geography() {
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="Simple geography chart" />
      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  )
}
