// import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import './styles/App.css'
import Details from './components/Details/Details'

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Details />
      <Footer />
    </div>
  )
}

export default App
