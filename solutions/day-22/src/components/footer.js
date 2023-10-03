import React, { useState } from 'react'
import Graph from './graph'

const Copyright = () => {
    const title = '30 Days of React challenge'
    const copyright = 'Copyright ©2020 30 Days Of React'
    const design = 'Designed and Built by'
    const author = 'Asabeneh Yetayeh'

    return (
        <div className="copyright">
            <h1>{copyright}</h1>
            <h2>Join 
               <a href="https://github.com/Asabeneh/30-Days-Of-React"> {title}</a>
            </h2>
            <p>{design}
                <a href="https://www.linkedin.com/in/asabeneh/">{author}</a>
            </p>
        </div>
    )
}

export default function Footer({countries}) {
    const [graphView, setGraphView] = useState(true)
    const [describe, setDescribe] = useState('populated countries')
    const chooseGraph = (event) => {
        setGraphView(prevSet => !prevSet)
        setDescribe(() => event.target.name === 'language' ? 'spoken languages' : 'populated countries')
    }
    let objPopulationInCountry = []
    let arrAllLanguages = []
    let objAllLanguages = []
    let totalPopulation = 0
    let totalLangages = 0

    for (let currCountry in countries){
        const {population, name: {common}, languages} = countries[currCountry]
        objPopulationInCountry.push({'name': common, 'count': +population})
        Object.values(languages || {}).forEach((lang) => arrAllLanguages.push(lang))
        totalPopulation += +population
        totalLangages++
    }
    objPopulationInCountry.unshift({'name': 'Total', 'count': totalPopulation})
    objPopulationInCountry.sort((a, b) => b.count - a.count)
    arrAllLanguages.sort()
    
    let first = arrAllLanguages[0]
    let sum = 0
    arrAllLanguages.forEach((item) => {
        if (first === item){       
            sum++
        } else {
            objAllLanguages.push({'name': first, 'count': sum})
            sum = 1
            first = item
        }
    })
    objAllLanguages.sort((a, b) => b.count - a.count)
    objAllLanguages.unshift({'name': 'Total', 'count': totalLangages})

    return (
    <footer className="app-footer">
        <div>
            <button className="btn" name="population" onClick={chooseGraph}>Population</button>
            <button className="btn" name="language" onClick={chooseGraph}>Languages</button>
            <h4>Most {describe} in the world</h4>
            <Graph data={graphView ? objPopulationInCountry : objAllLanguages}/>
        </div>
        <Copyright />
    </footer>
    )
}
