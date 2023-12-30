import { ArrowBackIosOutlined, ArrowBackOutlined } from '@mui/icons-material'
import './Watch.scss'
import videoTr from '../../images/Animal.mp4'
const Watch = () => {
  return (
    <div className='watch'>
    <div className='back'>
        <ArrowBackOutlined/>
        Home
    </div>
    <video src={videoTr} autoPlay progress controls ></video>
      
    </div>
  )
}

export default Watch
