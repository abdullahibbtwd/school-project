import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Services from './component/Services/Services'
import Banner from './component/Banner/Banner'
import Facilities from './component/Facilities/Facilities'
import Campus from './component/Campus/Campus'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'


const App = () => {
  return (
    <main className='overflow-x-hidden bg-white text-dark'>
     <Hero/>
      <Services/>
      <Banner/>
      <Facilities/>
      <Campus/>
      <Contact/>
      <Footer />
    </main>
  )
}

export default App
