import React, { useEffect, useState } from 'react'
import "./Home.scss";
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import axios from "axios";
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';
import { createContext } from 'react';
export default function Home({type}) {
  const [lists,setLists] = useState([]);
  const [genre,setGenre] = useState(null);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `https://netflix-analytics-4u5n.vercel.app/api/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token : `Bearer ` + JSON.parse(localStorage.getItem("user")).accessToken,
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
        const movieResponse = await axios.get('https://netflix-analytics-4u5n.vercel.app/api/movies/', {
          headers: {
            token:  'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken,
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
  
  return (
    <div className='home'>
      <Navbar/>
      <Featured type={type} setGenre={genre} />
      {lists
      .filter(list => list.content.length > 0) // Filter out lists with no content
      .map((list) => (
        <List key={list._id} list={list} />
      ))}
  </div>
  )
}
