import React, { useEffect, useState } from 'react'
import "./home.scss";
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import axios from "axios";
export default function Home({type}) {
  const [lists,setLists] = useState([]);
  const [genre,setGenre] = useState(null);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODljZGI0NDBmNjRjMzM4NGY3NjE0YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNDk5MjM0MSwiZXhwIjoxNzA1NDI0MzQxfQ.aL8BXWr3VlbxasWK2-_2VEXWjCBO7DRJT49p2cJafe4",
            },
          }
        );
        setLists(res.data);
        console.log(res)
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className='home'>
      <Navbar/>
      <Featured type={type} setGenre={genre} />
      {/* {lists.map((list)=>{
        <List list={list} />
      })} */}
      {lists.map((list) => (
        <List list={list} />
      ))}
  </div>
  )
}
