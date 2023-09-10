import { Link } from 'react-router-dom';
import '../styles/Header.css';

import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className='title'>Quiz App</Link>
      <hr className='divider'/>
    </div>
  )
}

export default Header