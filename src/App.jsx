import React from 'react'
import NavBar from './components/NavBar'
import CountryContainer from './components/CountryContainer'

const App = () => {
  return (
    <main className='font-sans'>
      <NavBar/>
      <CountryContainer />
    </main>
  )
}

export default App
