import React, { useState } from 'react'
import "./user.css"
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { rows } from '../../dummyData';
import { Link } from 'react-router-dom';
const User = () => {
  const [data,setData] = useState(rows);
const handleDelete=(id)=>{
      setData(data.filter((item)=>item.id!==id));
}
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
    field: 'Action',
    headerName: 'Action',
    width:150,
    renderCell: (params)=>{
      // {console.log(params)}
      return (
        <>
        <Link to={"/user/" + params.row.id}>
        <button className='userListEdit'>Edit</button>
        </Link>
        <DeleteIcon className='userListDelete' onClick={()=>{handleDelete(params.row.id)}}  />
        </>
      )
    }
  },
  {
    field: 'Email',
    headerName: 'Email',
    width:150,
    editable: true,
  },
];



  return (
    <div className='user'>
       <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        
      />
    </Box>
    </div>
  )
}

export default User
