import React from 'react'
import "./WidgetSm.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
const WidgetSm = () => {
  return (
    <div className='widgetSm'>
     <span className="widgetSmTitle">New Join Members</span>
     <ul className='widgetSmList'>
      <li className='widgetSmListItem'>
      <img className='widgetSmImage' src='https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg' alt='' height="30px" width="30px"></img>
      <div className='widgetSmUser'>
        <span className='widgetSmUsername'>Anna Keller</span>
        <span className='widgetSmUserTitle'>Software Engineer</span>
        </div>
        <button className="widgetSmButton">
          <VisibilityIcon/>
        </button>
      </li>
      <li className='widgetSmListItem'>
      <img className='widgetSmImage' src='https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg' alt='' height="30px" width="30px"></img>
      <div className='widgetSmUser'>
        <span className='widgetSmUsername'>Anna Keller</span>
        <span className='widgetSmUserTitle'>Software Engineer</span>
        </div>
        <button className="widgetSmButton">
          <VisibilityIcon className='widgetSmIcon'/>
        </button>
      </li>
      <li className='widgetSmListItem'>
      <img className='widgetSmImage' src='https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg' alt='' height="30px" width="30px"></img>
      <div className='widgetSmUser'>
        <span className='widgetSmUsername'>Anna Keller</span>
        <span className='widgetSmUserTitle'>Software Engineer</span>
        </div>
        <button className="widgetSmButton">
          <VisibilityIcon/>
        </button>
      </li>
      <li className='widgetSmListItem'>
      <img className='widgetSmImage' src='https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg' alt='' height="30px" width="30px"></img>
      <div className='widgetSmUser'>
        <span className='widgetSmUsername'>Anna Keller</span>
        <span className='widgetSmUserTitle'>Software Engineer</span>
        </div>
        <button className="widgetSmButton">
          <VisibilityIcon/>
        </button>
      </li>
     </ul>
    </div>
  )
}

export default WidgetSm
