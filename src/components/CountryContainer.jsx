import React from 'react'
import CountryCard from './CountryCard'
import SearchBar from './SearchBar'
import FilterBar from './FilterBar'

const CountryContainer = () => {
  return (
    <section className='pt-22 xl:pt-26 px-10 xl:px-16'>
        <div>
          <SearchBar/>
          <FilterBar/>
        </div>

          <CountryCard/>
    </section>
  )
}

export default CountryContainer