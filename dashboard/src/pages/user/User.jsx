import React, { useContext, useState, useEffect } from 'react';
import "./user.css";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext/AuthContext';
import axios from 'axios';
import Loader from '../../components/loader/Loader';

const User = () => {
  const [data, setData] = useState();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getUsers = async () => {
      try {
        let userResults = await axios.get('https://netflix-analytics-4u5n.vercel.app/api/users/', {
          headers: {
            token: 'Bearer ' + user.accessToken,
          }
        });
        // Adding id field to each user for DataGrid
        const usersWithId = userResults.data.map((user, index) => ({
          ...user,
          id: user._id // DataGrid expects a field named 'id' for each row
        }));
        setData(usersWithId);
      } catch (err) {
        console.log(err);
      }
    }
    getUsers();
  }, [user]);


  const handleDelete = async(id) => {
    const confirmed = window.confirm('Are you sure you wish to delete this item?');
    if (confirmed) {
      try {
        await axios.delete(`https://netflix-analytics-4u5n.vercel.app/api/users/${id}`, {
          headers: {
            token: 'Bearer ' + user.accessToken,
          }
        });
        setData(prevItems => prevItems.filter(item => item.id !== id)); // Update based on 'id'
      } catch (err) {
        console.log(err);
      }
    }

  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'username',
      headerName: 'Username',
      width: 150,
      editable: true,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img className='userListImg' src={params.row.profilePic || "https://via.placeholder.com/150"} alt='' />
            {params.row.username}
          </div>
        )
      }
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      editable: true,
    },
    {
      field: 'isAdmin',
      headerName: 'Account Status',
      width: 150,
      editable: true,
      renderCell: (params) => {
        return params.row.isAdmin ? "Admin" : "User";
      }
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 200,
      editable: true,
      renderCell:(params)=>{
        return params.row.createdAt.slice(0,10);
      }
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteIcon className='userListDelete' onClick={() => { handleDelete(params.row.id) }} />
          </>
        )
      }
    },
  ];

  if(!data) return <Loader/>

  return (
    <div className='user'>
     <div className="productTitleContainer">
        <h1 className="productTitle">All Users</h1>
      </div>
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
          pageSizeOptions={[5, 8, 10]}
          checkboxSelection
        />
      </Box>
    </div>
  )
}

export default User;
