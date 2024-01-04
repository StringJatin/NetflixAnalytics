import React from 'react'
import "./topbar.css"
import logo from "./logo.png"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';


const Topbar = () => {
  return (
    <div>
      <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='left'>
                <span className='logo'>
                    <img src={logo} alt='' width="100px" />
                </span>
            </div>
            <div className='right'>
                <div className='topbarIconContainer'>
                    <NotificationsNoneIcon/>
                    <span className='topIconBadge'>
                        2
                    </span>
                </div>
                <div className='topbarIconContainer'>
                    <LanguageIcon/>
                    <span className='topIconBadge'>
                        2
                    </span>
                </div>
                <div className='topbarIconContainer'>
                    <SettingsIcon/>
                
                </div>
                <img src='https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw' className='topAvatar' alt='' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
