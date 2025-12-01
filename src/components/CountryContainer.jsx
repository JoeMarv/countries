import React from 'react'
import CountryCard from './CountryCard'
import SearchBar from './SearchBar'

const CountryContainer = () => {
  return (
    <section className='pt-22 xl:pt-26 px-16'>
        <div>
          <SearchBar/>
        </div>

          <CountryCard/>
    </section>
  )
}

export default CountryContainer