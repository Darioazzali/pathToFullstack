import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <div className="container">
      <div className="logo">logo</div>
      <div className='menu'>
        <ul >
          <a href="/api/notes">Home</a>
        </ul>
      </div>
    </div>
  );
}

export default NavBar