import { ArrowBackIosOutlined, ArrowBackOutlined } from '@mui/icons-material'
import './Watch.scss'
import videoTr from '../../images/Animal.mp4'
import { Link, useLocation } from 'react-router-dom'

const Watch = () => {
  const location = useLocation();
  const movieDetails = location.state?.movie;
  console.log(location)
  // const movie = location.movie;
  return (
    <div className='watch'>
    <Link to="/"><div className='back'>
        <ArrowBackOutlined/>
        Home
    </div>
    </Link>
    
    <video src={videoTr} autoPlay progress controls ></video>
      
    </div>
  )
}

export default Watch
