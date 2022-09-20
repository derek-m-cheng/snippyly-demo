import React from 'react';
import './navbar.css';
import desktop from '../../assets/desktop.png';
import export_pic from '../../assets/export.png';
import home from '../../assets/home.png'
import mobile from '../../assets/mobile.png'
import publish from '../../assets/publish.png'
import redo from '../../assets/redo.png'
import tablet from '../../assets/tablet.png'
import undo from '../../assets/undo.png'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className ='navbar-links'>
        <div className='navbar-links_container'>
          <a href='#home'><img src={home} alt='home'></img></a>
          <a href='#desktop'><img src={desktop} alt='desktop'></img></a>
          <a href='#tablet'><img src={tablet} alt='tablet'></img></a>
          <a href='#mobile'><img src={mobile} alt='mobile'></img></a>
          <a href='#undo'><img src={undo} alt='undo'></img></a>
          <a href='#redo'><img src={redo} alt='redo'></img></a>
          <a href='#export'><img src={export_pic} alt='export'></img></a>
          <a href='#publish'><img src={publish} alt='publish'></img></a>
        </div>
      </div>
      <div className="navbar-settings">
        <p>Account: DC</p>
        <button type='button'>Settings</button>
      </div>
    </div>
  )
}

export default Navbar