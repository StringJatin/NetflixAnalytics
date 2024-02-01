
import './Featured.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LeoLogo from '../../images/LeoLogo.png'
import Fimage from './LEO.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';
const Featured = ({type}) => {
  const [content,setContent] = useState({});
  const {user} = useContext(AuthContext);
  // console.log(user);

  useEffect(()=>{
    const randomContent = async ()=>{
      try{
        const res = await axios.get(`https://netflix-analytics-4u5n.vercel.app/api/movies/random?type=${type}`,{
          headers:{
            token : `Bearer ` + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0]);
      }
      catch(err){
        console.log(err);
      }
    }
    randomContent();
  },[type]);
console.log(content);

  return (
    <div className='featured'>
       {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select className='selectMov' name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
    <img width="100%" src={content.img} ></img> 
    <div className='info'>
        <img src={content.imgTitle}></img>
    
    <div className='description'>
        <span>
        {content.desc}
        </span>
    </div>
      <div className='buttons'>
        <button className='play'>
        <PlayArrowIcon/>
        <span>Play</span>
      </button>
      <button className='more'>
      <InfoOutlinedIcon/>
      <span>Info</span>
      </button>
    </div>
    </div>
    </div>
  )
}

export default Featured
