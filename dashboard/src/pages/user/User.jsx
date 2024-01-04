import React from 'react'
import "./user.css"
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
const User = () => {
  

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'Username',
    headerName: 'Username',
    width: 150,
    editable: true,
    renderCell : (params)=>{
      return (
        <div className='userListUser'>
          <img className='userListImg' src={params.row.avatar} alt=''></img>
          {params.row.Username}
        </div>
      )
    }
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 60,
    editable: true,
  },
  {
    field: 'Transaction',
    headerName: 'Transaction',
    type: 'number',
    width:90,
    editable: true,
  },
  {
    field: 'Email',
    headerName: 'Email',
    width:150,
    editable: true,
  },
];

const rows = [
  { id: 1, Username: 'Snow', Avatar: 'Jon', Email: "john@gmail.com", status: "Active", Transaction:"$100.00" },
  { id: 2, Username: 'Snow', Avatar: 'Jon', Email: "john@gmail.com", status: "Active", Transaction:"$100.00" },
  { id: 3, Username: 'Snow', Avatar: 'Jon', Email: "john@gmail.com", status: "Active", Transaction:"$100.00" },
  { id: 4, Username: 'Snow', Avatar: 'Jon', Email: "john@gmail.com", status: "Active", Transaction:"$100.00" },
  { id: 5, Username: 'Snow', Avatar: 'Jon', Email: "john@gmail.com", status: "Active", Transaction:"$100.00" },
  { id: 6, Username: 'Snow', Avatar: 'Jon', Email: "john@gmail.com", status: "Active", Transaction:"$100.00" },
  { id: 7, Username: 'Snow', Avatar: 'Jon', Email: "john@gmail.com", status: "Active", Transaction:"$100.00" },
  { id: 8, Username: 'Snow', Avatar: 'Jon', Email: "john@gmail.com", status: "Active", Transaction:"$100.00" },
  { id: 9, Username: 'Snow', Avatar: 'Jon', Email: "john@gmail.com", status: "Active", Transaction:"$100.00" },
  { id: 10, Username: 'Snow', Avatar: 'Jon', Email: "john@gmail.com", status: "Active", Transaction:"$100.00" },

 
];

  return (
    <div className='user'>
       <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </div>
  )
}

export default User
