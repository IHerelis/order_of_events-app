import React from 'react';
import './HomePage.css';
import TaskList from '../../TaskList/TaskList';


const HomePage = () => {


  return (
    <div className='main-container'>
      <div className='home-page__container'>
        <TaskList />
      </div>
    </div>
  );
}

export default HomePage;
