import { tenHighestPopulation } from './data.js'
import './App.css';

const Country = ({country}) => {
  return (
    <div className="country">
      <p>{country}</p>
    </div>
  )
}

const Level = ({total, quantity}) => {
  const levelStyle = `calc(100% * ${quantity} / ${total})`

  return (
    <div className="level">
      <div className="color-level" style={{width: levelStyle}}>
      </div>
    </div>
  )
}

const Quantity = ({quantity}) => {
  const str = quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return (
    <div className="quantity">
      <p>{str}</p>
    </div>
  )
}

const Lines = ({data, total}) => {

  const line = data.map((obj) => (
    <div className="main-line" key={obj.country}>
      <Country country={obj.country}/>
      <Level total={total} quantity={obj.population}/>
      <Quantity quantity={obj.population}/>
    </div>
  ))
  return line
}

function App() {
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
  );
}

export default App;
