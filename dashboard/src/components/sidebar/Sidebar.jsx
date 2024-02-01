import React, { useState } from 'react'
import "./Sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import NotificationsNone from '@mui/icons-material/NotificationsNone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import {Link} from "react-router-dom"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ListIcon from '@mui/icons-material/List';
const Sidebar = () => {

  const [activeTab,setActiveTab] = useState(1);

  const handleOnClick=(tab)=>{
    setActiveTab(tab);
  }

  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
            <h3 className='sidebarTitle'>
                Dashboard
            </h3>
            <ul className='sidebarList'>
            <Link to="/" className='noCss'>
                <li className={`sidebarListItem ${activeTab ===1 ? 'active' : ''}`} onClick={()=>{handleOnClick(1)}} >
                <LineStyleIcon className='sidebarIcon'/>
                Home
                </li>
                </Link>
                <li className='sidebarListItem'>
                <TimelineIcon className='sidebarIcon'/>
                    Analytics
                </li>
                <li className='sidebarListItem'>
                <TrendingUpIcon className='sidebarIcon'/>
                    Sales
                </li>
            </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
          <Link to="/user" className='noCss'>
          <li className={`sidebarListItem ${activeTab ===2 ? 'active' : ''}`} onClick={()=>{handleOnClick(2)}}>
                <PermIdentityIcon className="sidebarIcon" />
              Users  
              </li>
              </Link>
           
           <Link to={"/movies"} className='noCss'>
           <li className={`sidebarListItem ${activeTab ===3 ? 'active' : ''}`} onClick={()=>{handleOnClick(3)}}>
                <PlayArrowIcon className="sidebarIcon" />
                Movies
              </li>
              </Link>
              <Link to={"/movieLists"} className='noCss'>
           <li className={`sidebarListItem ${activeTab ===4 ? 'active' : ''}`} onClick={()=>{handleOnClick(4)}}>
                <ListIcon className="sidebarIcon" />
                List
              </li>
              </Link>
            
            <li className="sidebarListItem">
              <LiveTvIcon className="sidebarIcon" />
              Go to Netflix UI
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlineIcon className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeedIcon className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineIcon className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutlineIcon className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <ReportIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
