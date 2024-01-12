import "./ProductList.css";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getMovieList = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/movies/", {
          headers: {
            token:
            `Bearer ` + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    // Call the function when the component mounts
    getMovieList();
  }, [data]); // Empty dependency array to ensure it runs only once
 
  const handleDelete = async(id) => {
    try{
        await axios.delete(`http://localhost:3000/api/movies/${id}`,{
          headers:{
            token : `Bearer ` + JSON.parse(localStorage.getItem("user")).accessToken,
          }
        });
    }
    catch(err){
      console.log(err);
    }
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "movie",
      headerName: "Movie",
      width: 250,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.img} alt=""></img>
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "genre",
      headerName: "Genre",
      width: 90,
      editable: true,
    },
    {
      field: "year",
      headerName: "Year",
      type: "string",
      width: 90,
      editable: true,
    },
    { field: "limit", headerName: "Age Limit", width: 90 },
    {
      field: "isSeries",
      headerName: "Category",
      width: 90,
      renderCell: (params) => (
        <>
          {params.value === true ? <p>Series</p> : <p>Movie</p>}
        </>
      ),
    },
    {
      field: "Action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        // {console.log(params)}
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteIcon
              className="userListDelete"
              onClick={() => {
                handleDelete(params.row._id);
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <Box sx={{ height: 600, width: "100%" }}>
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
          getRowId={(r)=>r._id}
        />
      </Box>
    </div>
  );
};

export default ProductList;
