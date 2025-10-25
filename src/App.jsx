import { useState } from 'react'
import './StyleNull.css'
import './App.css'
import { Outlet } from 'react-router-dom'
import HomeHeader from './components/header/HomeHeader'
import HomeFooter from './components/footer/HomeFooter'


function App() {
  

  return (
    <>
      <div className='main-block-wrapper'>
        <header>
          <HomeHeader />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <HomeFooter />
        </footer>
      </div>
    </>
  )
}

export default App
