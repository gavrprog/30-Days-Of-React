//import ReactDOM from 'react-dom/client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
import Main from './components/main'
import Header from './components/header';
import Footer from './components/footer';

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [countries, setCountries] = useState([])
  const [searchChars, setSearchChars] = useState('')
  //const [value, changeValue] = useState('')

  useEffect(() => {
    setIsLoading(false)
    const url = 'https://restcountries.com/v3.1/all'
    axios.get(url)
      .then((response) => response.data)
      .then((countries) => {
        setCountries(countries)
        setIsLoading(true)
      })
      .catch((err) => alert('Error when executed AXIOS. The error is:', err))
  }, [])
 
  const filteredCounntries = countries.filter((country) => {
    return (country.name.common.toLowerCase().includes(searchChars.toLowerCase()) ||
    Object.values(country.languages || {}).join(" ").toLowerCase().includes(searchChars.toLowerCase()))
  })

  return (
    <div className="app">
      <Header total={countries.length} number={filteredCounntries.length}/>
      <div className="search">
        <input 
          type="text" 
          placeholder="Search country by name"
          onChange={(event) => setSearchChars(event.target.value)}/>
      </div>
      {isLoading ? <Main countries={filteredCounntries} /> : <p>Loading...</p>}
      <Footer countries={countries}/>
    </div>
  );
}

export default App;
