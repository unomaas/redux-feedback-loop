//#region ⬇⬇ Document setup below: 
import React from 'react'
import './Header.css';
//#endregion ⬆⬆ Document setup above. 


export default function Header() {
  return (
    <div>
      <header className='header'>
        <div className="logo">
          <img src="./images/logo1.png" height="65"></img>
        </div>
        <div className="header-main">
          <span>
            <p className='header-title'>Feedback App</p>
            <p className="header-subtitle"> v1.0</p>
          </span>
        </div>

      </header>
    </div>
  ) // End return
} // End Header
