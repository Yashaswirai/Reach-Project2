import React from 'react'
import Nav from './components/Nav'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquess from './components/Marquess'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-[#1C1C1C] text-white'>
      <Nav/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marquess/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
