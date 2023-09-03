'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Dispatch, ReactNode, SetStateAction, useState } from 'react'
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
import profilePicture from '@/assets/pfp.png'

interface ItemProps {
  title: string
  to: string
  icon: ReactNode
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
  hideSideBar: () => void
}

function Item({
  title,
  to,
  icon,
  selected,
  setSelected,
  hideSideBar,
}: ItemProps) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  function handleClick() {
    setSelected(to)
    hideSideBar()
  }

  return (
    <Link href={to} style={{ textDecoration: 'none' }}>
      <MenuItem
        active={selected === to}
        style={{ color: colors.grey[100] }}
        onClick={handleClick}
        icon={icon}
        component="div"
      >
        <Typography>{title}</Typography>
      </MenuItem>
    </Link>
  )
}

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
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  src={profilePicture}
                  alt="Profile picture"
                  width={100}
                  height={100}
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: '10px 0 0 0' }}
                >
                  Renato M.
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  CTO Admin
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          <Box>
            <Item
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
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              hideSideBar={hideSideBar}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              hideSideBar={hideSideBar}
            />
            <Item
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
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              hideSideBar={hideSideBar}
            />
            <Item
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
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              hideSideBar={hideSideBar}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              hideSideBar={hideSideBar}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              hideSideBar={hideSideBar}
            />
            <Item
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
