import React from 'react'
import Header from './components/header/Header'
import Hero from './components/Hero/Hero'

const App = () => {
  return (
    <div>
      <Header />
      <div className="hero">
        <Hero />
      </div>
    </div>
  )
}

export default App