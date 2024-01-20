
import './Featured.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LeoLogo from '../../images/LeoLogo.png'
import Fimage from './LEO.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Featured = ({type}) => {
  const [content,setContent] = useState({});

  useEffect(()=>{
    const randomContent = async ()=>{
      try{
        const res = await axios.get(`http://localhost:3000/api/movies/random?type=${type}`,{
          headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODljZGI0NDBmNjRjMzM4NGY3NjE0YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNTY1NTA2NiwiZXhwIjoxNzA2MDg3MDY2fQ.BYVU_F_4KQD7wFgQPABRxmPhbOZOdpWCW2BmnbTYv-o"
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
