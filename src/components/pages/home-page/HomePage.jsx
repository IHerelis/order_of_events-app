import React from 'react';
import './HomePage.css';
import TaskList from '../../TaskList/TaskList';


const HomePage = () => {

  const definitionPoint = (e) => {
    const dinamicWrapper = window.document.querySelector(".main-container");
    const rect = e.currentTarget.getBoundingClientRect();

    dinamicWrapper.style.setProperty('--mouse-x', e.clientX-rect.left + 'px');
    dinamicWrapper.style.setProperty('--mouse-y', e.clientY-rect.top + 'px');

    // dinamicWrapper.style.setProperty('--mouse-x', e.clientX + 'px');
    // dinamicWrapper.style.setProperty('--mouse-y', e.clientY + 'px');
    // console.log('--mouse-x', e.clientX);
    // console.log('--mouse-y', e.clientY);
  };


  return (
    <div className='main-container'>
      <div className='home-page__container' onMouseMove={(e) => definitionPoint(e)}>
        <section className='dinamic-light__wrapper'>
          <div className='light__structure'></div>
        </section>
        <TaskList />
      </div>
    </div>
  );
}

export default HomePage;
