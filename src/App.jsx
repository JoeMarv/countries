import React from 'react'
import NavBar from './components/NavBar'
import CountryContainer from './components/CountryContainer'

const App = () => {
  return (
    <main className='font-sans w-full overflow-x-hidden'>
      <NavBar/>
      <CountryContainer />
    </main>
  )
}

export default App
