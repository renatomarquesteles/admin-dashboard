'use client'

import Link from 'next/link'
import { Dispatch, ReactNode, SetStateAction } from 'react'
import { MenuItem } from 'react-pro-sidebar'
import { Typography, useTheme } from '@mui/material'

import { tokens } from '@/styles/theme'

interface ItemProps {
  title: string
  to: string
  icon: ReactNode
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
  hideSideBar: () => void
}

export function SideBarItem({
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
