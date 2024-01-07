import "./ProductList.css"
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from "react";

const ProductList = () => {
    const [data,setData] = useState(productRows);
    const handleDelete=(id)=>{
          setData(data.filter((item)=>item.id!==id));
    }
    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      {
        field: 'name',
        headerName: 'Product',
        width: 350,
        editable: true,
        renderCell : (params)=>{
          return (
            <div className='userListUser'>
              <img className='userListImg' src={params.row.img} alt=''></img>
              {params.row.name}
            </div>
          )
        }
      },
      {
        field: 'stock',
        headerName: 'Stock',
        width: 60,
        editable: true,
      },
      {
        field: 'price',
        headerName: 'Price',
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
            <Link to={"/product/" + params.row.id}>
            <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteIcon className='userListDelete' onClick={()=>{handleDelete(params.row.id)}}  />
            </>
          )
        }
      },
    ];
    
    
  return (
    <div className="productList">
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

export default ProductList
