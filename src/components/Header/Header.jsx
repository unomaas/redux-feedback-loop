//#region ⬇⬇ Document setup below: 
import React from 'react'
import './Header.css';
//#endregion ⬆⬆ Document setup above. 


export default function Header() {
  return (
    <div>
      <header className='header'>
        <h1 className='header-title'>Feedback!</h1>
        <h4 className='header-subtitle'>Don't forget it!</h4>
      </header>
    </div>
  ) // End return
} // End Header
