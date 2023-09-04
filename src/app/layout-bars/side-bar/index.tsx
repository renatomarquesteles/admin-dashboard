'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'

import { tokens } from '@/styles/theme'
import { SideBarItem } from './item'
import { UserInfo } from './user-info'

interface SideBarProps {
  toggled: boolean
  hideSideBar: () => void
}

export function SideBar({ toggled, hideSideBar }: SideBarProps) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState(pathname)

  return (
    <Box
      sx={{
        '& .ps-sidebar-container': {
          background: `${colors.primary[400]} !important`,
        },
        '& .ps-sidebar-root': {
          border: 'none',
        },
        '& .ps-menu-button:hover': {
          backgroundColor: `transparent !important`,
          color: `${colors.blueAccent[400]} !important`,
        },
        '& .ps-menu-button.ps-active': {
          color: `${colors.blueAccent[500]} !important`,
        },
      }}
    >
      <Sidebar
        collapsed={isCollapsed}
        style={{ height: '100%' }}
        toggled={toggled}
        breakPoint="md"
        onBackdropClick={hideSideBar}
      >
        <Menu>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            rootStyles={{
              margin: '10px 0 20px 0',
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!isCollapsed && <UserInfo />}

          {/* MENU ITEMS */}
          <Box>
            <SideBarItem
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              hideSideBar={hideSideBar}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Data
            </Typography>

            <SideBarItem
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              hideSideBar={hideSideBar}
            />
            <SideBarItem
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              hideSideBar={hideSideBar}
            />
            <SideBarItem
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              hideSideBar={hideSideBar}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Pages
            </Typography>

            <SideBarItem
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              hideSideBar={hideSideBar}
            />
            <SideBarItem
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              hideSideBar={hideSideBar}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Charts
            </Typography>

            <SideBarItem
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              hideSideBar={hideSideBar}
            />
            <SideBarItem
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              hideSideBar={hideSideBar}
            />
            <SideBarItem
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              hideSideBar={hideSideBar}
            />
            <SideBarItem
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              hideSideBar={hideSideBar}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  )
}
