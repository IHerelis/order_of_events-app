import React from 'react';
import './HomeFooter.css';

import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const HomeFooter = () => {
  return (
    <div className='home-footer__container'>
      <div className='footer-logo'>
          <Link to="/">Order_Of_Events</Link>
      </div>
      <div className='footer-socials'>
        <div className='footer-socials__icons'>
          <Link to='#'><LinkedInIcon /></Link>
          <Link to='#'><YouTubeIcon /></Link>
          <Link to='#'><InstagramIcon /></Link>
          <Link to='#'><FacebookIcon /></Link>
        </div>
      </div>
    </div>
  );
}

export default HomeFooter;
