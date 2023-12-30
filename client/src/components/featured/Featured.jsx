
import './Featured.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LeoLogo from '../../images/LeoLogo.png'
import Fimage from './LEO.jpg';
const Featured = ({type}) => {
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
    <img width="100%" src={Fimage} ></img> 
    <div className='info'>
        <img src={LeoLogo}></img>
    
    <div className='description'>
        <span>
        In a world on the brink of chaos, 'Ephemeral Horizon' unfolds a gripping tale of love, sacrifice, and redemption. As society crumbles under the weight of a mysterious pandemic, brilliant scientist Dr. Elena Hart races against time to discover a cure. "
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
