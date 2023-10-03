import React from 'react'
import Header from './header'
import Main from './main'
import Footer from './footer'

export default function MainComponent({countries}) {
    //const {name: {common}, flags: {svg}, capital: [cap], languages, population, currencies} = data[29]
    // console.log('the list of destruction = ', common, svg, cap, languages, population, currencies)
    // console.log('currency destructed = ', Object.values(currencies)[0]['name'])
  return (
    <>
        <Header />
        <Main countries={countries}/>
        <Footer />
    </>
  )
}
