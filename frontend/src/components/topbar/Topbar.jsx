import React from 'react'
import './topbar.css'
import { Language, NotificationsNone, Settings } from '@material-ui/icons'

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Spymon | Admin</span>
        </div>
        <div className="topbarRight">
          <div className="topbarIconsContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
            <Settings />
          </div>
          <img
            src="https://i.pinimg.com/originals/36/0e/6e/360e6e1318dd257c51f01f37cf27c862.jpg"
            alt="avatar picture"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  )
}

export default Topbar
