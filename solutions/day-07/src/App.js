import React from 'react'
import { tenHighestPopulation } from './data.js'
import './App.css';

class Country extends React.Component {
  render(){
    return (
      <div className="country">
        <p>{this.props.country}</p>
      </div>
    )
  }
}

class Level extends React.Component {
  render(){
    const levelStyle = `calc(100% * ${this.props.quantity} / ${this.props.total})`

    return (
      <div className="level">
        <div className="color-level" style={{width: levelStyle}}>
        </div>
      </div>
    )
  }
}

class Quantity extends React.Component {
  render(){
    const str = this.props.quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    
    return (
      <div className="quantity">
        <p>{str}</p>
      </div>
    )
  }
}

class Lines extends React.Component {
  render(){
    const line = this.props.data.map((obj) => (
      <div className="main-line" key={obj.country}>
        <Country country={obj.country}/>
        <Level total={this.props.total} quantity={obj.population}/>
        <Quantity quantity={obj.population}/>
      </div>
    ))
    return line
  }
}

class App extends React.Component {

  render(){
    const title = '30 Days Of React'
    const subtitle = 'World Population'
    const undertitle = 'The most populated countries'
    const total = tenHighestPopulation[0].population

    return (
      <div className="main">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <h3>{undertitle}</h3>
        <Lines data={tenHighestPopulation} total={total}/>
      </div>
    )
  }
}

export default App;