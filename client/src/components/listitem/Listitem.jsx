import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import './ListItem.scss'
import { useEffect, useState } from 'react'
import animal from '../../images/animal.mp4'
import axios from 'axios'
const Listitem = ({index,item}) => {
  const [isHovered,setIsHovered] = useState(false);
  const trailer = "https://drive.google.com/file/d/1K0BUuIe2JEPsvBSWEATgLO_9nhtTx1Vr/view?usp=sharing";
  
  const [movie,setMovie] = useState({});

  useEffect(()=>{
    const getMovie = async ()=>{
      try{
        const res = await axios.get("http://localhost:3000/api/movies/find/"+item,{
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODljZGI0NDBmNjRjMzM4NGY3NjE0YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMzg2ODAzOCwiZXhwIjoxNzA0MzAwMDM4fQ.HDWGwcrglsowbaoTh1_OZx4T9BsrCdd5jvNnp3l0Quk",

          },
        });
        setMovie(res.data); 
      }
      catch(err){
        console.log(err);
      }
    };
    getMovie();
  },[item]);
  
  console.log(movie);
  return (
    <div className='listItem' onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}}
    style={{left: isHovered && (index*220) - 50 + (index*2.5)}} >
      <img src='https://wallpapercave.com/wp/wp8807405.jpg'></img>
    {isHovered && <>
    {/* <video src={animal} autoPlay={false} loop  ></video> */}
     <div className='itemInfo'>
        <div className='icons'>
          <PlayArrow className='icon' />
          <Add className='icon'/>
          <ThumbUpAltOutlined className='icon'/>
          <ThumbDownAltOutlined className='icon'/>
        </div>
        <div className='itemInfoTop'>
          <span>{movie.duration}</span>
          <span className='limit'>+{movie.limit}</span>
          <span>1999</span>

        </div>
        <div className='desc'>
          {movie.desc}
        </div>
        <div className='genre'>{movie.genre}</div>
      </div></>}
    </div>
  )
}

export default Listitem
