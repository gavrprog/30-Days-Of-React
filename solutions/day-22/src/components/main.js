import React from 'react'
import './../App.css';

function Main({countries}){
    
    const Country = ({country}) => {
        const {flags, name, capital, population, languages, currencies} = country
        let arrLanguage = Object.values(languages || {}) //Make sure that object is not empty (null or undefined ).
        const pluralOrSingular = arrLanguage.length > 1 ? 'Languages' : 'Language'        
        const populationReg = population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        let arrCurrency = []

        for (let key in currencies){
            arrCurrency.push(currencies[key].name)
        }

        return (
            <div className="country-box">
                <div className="flag">
                    <img src={flags.svg} alt={flags.alt} />
                    <h3><b>{name.common}</b></h3>
                </div>
                <div className="description">
                    <p><b>Capital: </b>
                        {capital?.map((cap, index, arrCapitals) => (
                            <span key={cap}>
                                {cap}{arrCapitals.length-1 > index ? ', ' : ''}
                            </span>
                        ))}
                    </p>
                    <p><b>{pluralOrSingular}: </b>
                        {arrLanguage.map((language, index, arrLanguages) => (
                            <span key={index}>
                                {language}{arrLanguages.length-1 > index ? ', ' : ''}
                            </span>
                        ))}
                    </p>
                    <p><b>Population: </b><span>{populationReg}</span></p>
                    <p><b>Currency: </b>
                        {arrCurrency.map((name, index, arrCurrencies) => (
                            <span key={index}>
                                {name}{arrCurrencies.length-1 > index ? ', ' : ''}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
        )
        
    }

  return (
    <main className="app-main">
        <div className="list-countries">
            {countries.map((country, index) => <Country country={country} key={index}/>)}
        </div>
    </main>
  )
}

export default Main
