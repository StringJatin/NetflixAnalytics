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
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' className='topAvatar' alt='' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
