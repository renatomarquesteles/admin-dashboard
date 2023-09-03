'use client'

import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'

import { Header } from '@/components/header'
import { tokens } from '@/styles/theme'
import { mockDataTeam } from '@/data/mockData'

export default function Team() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', maxWidth: 86 },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      cellClassName: 'name-column-cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
      maxWidth: 86,
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      headerAlign: 'left',
      align: 'left',
    },
    { field: 'email', headerName: 'Email', flex: 1, minWidth: 200 },
    {
      field: 'access',
      headerName: 'Access Level',
      headerAlign: 'center',
      flex: 1,
      minWidth: 200,
      renderCell: ({ row: { access } }: GridRenderCellParams) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
            sx={{
              backgroundColor:
                access === 'admin'
                  ? colors.greenAccent[600]
                  : colors.greenAccent[700],
            }}
          >
            {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
            {access === 'manager' && <SecurityOutlinedIcon />}
            {access === 'user' && <LockOpenOutlinedIcon />}

            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {access}
            </Typography>
          </Box>
        )
      },
    },
  ]

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column-cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: colors.blueAccent[700],
            borderTop: 'none',
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  )
}
