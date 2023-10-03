import React from 'react';
import {countriesData} from './data/countries.js'

class Header extends React.Component {
  render() {
    const {
      welcome,
      title,
      subtitle,
      text,
      author: { firstName, lastName },
      date
    } = this.props.data

    return (
      <header>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
          <p>{text}</p>
        </div>
      </header>
    )
  }
}

const Button = ({ text, onClick }) => (
  <button className='btn' onClick={onClick}>
    {text}
  </button>
)

class Country extends React.Component {
  render(){
    const { name,
            capital,
            languages,
            population,
            flag,
            currency } = this.props.country
    const pluralOrSingular = languages.length > 1 ? 'Languages' : 'Language'
    const lang = languages.join(', ')
    const popul = population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    return (
      <div className="country-box">
        <div className="flag">
          <img src={flag} alt="country" />
          <h3><b>{name}</b></h3>
        </div>
        <div className="description">
          <p><b>Capital: </b><span>{capital}</span></p>
          <p><b>{pluralOrSingular}: </b><span>{lang}</span></p>
          <p><b>Population: </b><span>{popul}</span></p>
          <p><b>Currency: </b><span>{currency}</span></p>
        </div>
      </div>
    )
  }
}

class Main extends React.Component {
  render() {
    return (
      <main>
        <div className='main-wrapper'>
          <Country country={this.props.currentCountry}/>
          <Button
            text='Select Country'
            onClick={this.props.changeCountry}
          />
        </div>
      </main>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
  state = {
      count: 0
    }

  changeCountry = () => {
    this.state.count <= 250 ? this.setState({count: this.state.count + 1}) : this.setState({count: 0})
    }

  render() {
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      text: 'Select a country for your next Holiday',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 7, 2020'
    }
    const date = new Date()
    const currentCountry = countriesData[this.state.count]
    
    return (
      <div className='app'>
        <Header data={data}/>
        <Main changeCountry={this.changeCountry} currentCountry={currentCountry}/>
        <Footer date={date}/>
      </div>
    )
  }
}

export default App