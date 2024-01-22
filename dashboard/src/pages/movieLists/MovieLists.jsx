import './movieLists.css'
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieLists = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getMovieList = async () => {
      try {
        const res = await axios.get("https://netflix-analytics-4u5n.vercel.app/api/lists/", {
          headers: {
            token:
            'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    // Call the function when the component mounts
    getMovieList();
  }, []); // Empty dependency array to ensure it runs only once
 
  const handleDelete = async(id) => {
    try{
        await axios.delete(`https://netflix-analytics-4u5n.vercel.app/api/lists/${id}`,{
          headers:{
            token : `Bearer ` + JSON.parse(localStorage.getItem("user")).accessToken,
          }
        });
        setData((prevItems) => prevItems.filter(item => item._id !== id));
    }
    catch(err){
      console.log(err);
    }

  };
  const columns = [
    { field: "_id", headerName: "ID", width: 100 },
    {
      field: "title",
      headerName: "Title",
      width: 350,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {/* <img className="userListImg" src={params.row.img} alt=""></img> */}
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
      field: "type",
      headerName: "Type",
      type: "string",
      width: 90,
      editable: true,
    },
    // { field: "content", headerName: "Content", width: 90 },
    {
      field: "Action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        // {console.log(params)}
        return (
          <>
            <Link to={"/movieLists/" + params.row._id}>
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
    <div className='movieLists'>
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
  )
}

export default MovieLists;

