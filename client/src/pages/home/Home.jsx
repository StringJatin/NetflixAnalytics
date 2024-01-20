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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODljZGI0NDBmNjRjMzM4NGY3NjE0YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNTY1NTA2NiwiZXhwIjoxNzA2MDg3MDY2fQ.BYVU_F_4KQD7wFgQPABRxmPhbOZOdpWCW2BmnbTYv-o",
            },
          }
        );
        setLists(res.data);
       
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);


  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const movieResponse = await axios.get('http://localhost:3000/api/movies/', {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODljZGI0NDBmNjRjMzM4NGY3NjE0YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNTY1NTA2NiwiZXhwIjoxNzA2MDg3MDY2fQ.BYVU_F_4KQD7wFgQPABRxmPhbOZOdpWCW2BmnbTYv-o", // Replace with your actual access token
          },
        });
        const allMovieIds = movieResponse.data.map(movie => movie._id);
  
        // Filter out movie IDs that don't exist in the current list
        setLists(prevLists => prevLists.map(list => ({
          ...list,
          content: list.content.filter(movieId => allMovieIds.includes(movieId))
        })));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
  
    fetchAllMovies();
  }, []);
  


  // console.log("lists content",lists.content);
  return (
    <div className='home'>
      <Navbar/>
      <Featured type={type} setGenre={genre} />
      {/* {lists.map((list)=>{
        <List list={list} />
      })} */}
      {/* {lists.map((list) => (
        <List list={list} />
      ))} */}
      {lists
      .filter(list => list.content.length > 0) // Filter out lists with no content
      .map((list) => (
        <List key={list._id} list={list} />
      ))}
  </div>
  )
}
