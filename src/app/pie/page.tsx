import { Box } from '@mui/material'

import { PieChart } from '@/components/pie-chart'
import { Header } from '@/components/header'

export default function Pie() {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  )
}
