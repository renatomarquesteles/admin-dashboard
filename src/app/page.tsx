import { Box } from '@mui/material'

import { Header } from '@/components/header'

export default function Home() {
  return (
    <Box component="main" m="20px">
      <Header title="Dashboard" subtitle="Welcome to your dashboard." />
    </Box>
  )
}
