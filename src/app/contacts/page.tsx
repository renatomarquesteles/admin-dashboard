'use client'

import { Box, useTheme } from '@mui/material'
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'

import { Header } from '@/components/header'
import { tokens } from '@/styles/theme'
import { mockDataContacts } from '@/data/mockData'

export default function Contacts() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', maxWidth: 86 },
    { field: 'registrarId', headerName: 'Registrar ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
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
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'address', headerName: 'Address', flex: 1 },
    { field: 'city', headerName: 'City' },
    { field: 'zipCode', headerName: 'ZipCode' },
  ]

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of contacts for future reference"
      />

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
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  )
}
