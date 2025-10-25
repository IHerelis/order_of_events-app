import React from 'react';
import './HomeHeader.css';
import { Link } from 'react-router-dom';

const HomeHeader = () => {

  return (
    <div className='home-header__container'>
      <div className='header'>
        <div className='header__logo'>
          <Link to="/">Order_Of_Events</Link>
        </div>
        <nav className='header__nav'>
          <h1>Happy start project !</h1>
        </nav>
      </div>
    </div>
  );
}

export default HomeHeader;
