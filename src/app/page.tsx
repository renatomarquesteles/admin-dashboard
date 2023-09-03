import { Box } from '@mui/material'

import { DashboardHeader } from './dashboard/header'
import { InfoCards } from './dashboard/info-cards'
import { Revenue } from './dashboard/revenue'
import { DashboardCharts } from './dashboard/charts'

export default function Dashboard() {
  return (
    <Box component="main" m="20px">
      {/* HEADER */}
      <DashboardHeader />

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <InfoCards />

        {/* ROW 2 */}
        <Revenue />

        {/* ROW 3 */}
        <DashboardCharts />
      </Box>
    </Box>
  )
}
