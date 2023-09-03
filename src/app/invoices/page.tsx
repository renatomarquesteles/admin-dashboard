'use client'

import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

import { Header } from '@/components/header'
import { tokens } from '@/styles/theme'
import { mockDataInvoices } from '@/data/mockData'

export default function Invoices() {
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
      field: 'phone',
      headerName: 'Phone Number',
      headerAlign: 'left',
      align: 'left',
    },
    { field: 'email', headerName: 'Email', flex: 1, minWidth: 200 },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      minWidth: 100,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    { field: 'date', headerName: 'Date' },
  ]

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of invoice balances" />

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
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={mockDataInvoices} columns={columns} checkboxSelection />
      </Box>
    </Box>
  )
}
