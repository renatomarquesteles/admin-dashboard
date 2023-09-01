import { Box } from '@mui/material'

import { BarChart } from '@/components/bar-chart'
import { Header } from '@/components/header'

export default function Bar() {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple bar chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  )
}
