'use client'

import dynamic from 'next/dynamic'
import { ReactNode, useState } from 'react'
import { Box, IconButton } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'

import { TopBar } from './top-bar'

const SideBar = dynamic<{ toggled: boolean; hideSideBar: () => void }>(
  () => import('./side-bar').then((mod) => mod.SideBar),
  { ssr: false },
)

interface BarsWrapperProps {
  children: ReactNode
}

export function BarsWrapper({ children }: BarsWrapperProps) {
  const [isSideBarToggled, setIsSideBarToggled] = useState(false)
  const isNonMobile = useMediaQuery('(min-width:600px)')

  function hideSideBar() {
    setIsSideBarToggled(false)
  }

  return (
    <Box minHeight="100vh" display="flex">
      <SideBar toggled={isSideBarToggled} hideSideBar={hideSideBar} />

      <Box width="100%">
        <Box display="flex" alignItems="center" pl="5px">
          {!isNonMobile && (
            <IconButton onClick={() => setIsSideBarToggled(true)}>
              <MenuOutlinedIcon />
            </IconButton>
          )}

          <TopBar />
        </Box>
        {children}
      </Box>
    </Box>
  )
}
