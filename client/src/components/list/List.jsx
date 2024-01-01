import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import "./List.scss"
import Listitem from '../listitem/Listitem'
import { useRef, useState } from 'react'

const List = ({list}) => {
    const listRef = useRef();
    const [slideNumber,setSlideNumber] = useState(0);
    const [isMoved,setIsMoved] = useState(false);
    const handleOnClick = (direction)=>{
      setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if(direction === "left" && slideNumber > 0){
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
            setSlideNumber(slideNumber-1);
            

        }
        if(direction === "right" && slideNumber < 5){
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
            setSlideNumber(slideNumber+1);
            
        }
    }

  return (
    <div className='list'>
      <span className='listTitle'>
       {list.title}
      </span>
      <div className='wrapper'>
      { isMoved && (<ArrowBackIosOutlined className='sliderArrow left' onClick={()=>{
            handleOnClick("left")
        }}/>)}
        <div className='container' ref={listRef}>
            {list.content.map((item,i)=>(
              <Listitem index={i} item={item}/>
            ))}
           
        </div>
        <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>{
            handleOnClick("right");
        }} />
      </div>
    </div>
  )
}

export default List
