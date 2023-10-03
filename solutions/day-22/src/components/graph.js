import React from 'react'
//import { tenHighestPopulation } from './data.js'

const Country = ({country}) => (
      <div className="country">
        <p>{country}</p>
      </div>
    )

const Level = ({quantity, total}) => {
    const levelStyle = `calc(100% * ${quantity} / ${total})`

    return (
      <div className="level">
        <div className="color-level" style={{width: levelStyle}}>
        </div>
      </div>
    )
}

const Quantity = ({quantity}) => {
    const str = quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    
    return (
      <div className="quantity">
        <p>{str}</p>
      </div>
    )
}

const Lines = ({data, total}) => {
    return data.map((obj) => (
      <div className="main-line" key={obj.name}>
        <Country country={obj.name}/>
        <Level total={total} quantity={obj.count}/>
        <Quantity quantity={obj.count}/>
      </div>
    ))
}

const Graph = ({data}) => {

    const total = data[0].count

    return (
      <div className="main">
        <Lines data={data} total={total}/>
      </div>
    )
}

export default Graph;