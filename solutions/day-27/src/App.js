import React, { useState, useRef } from 'react'

const App = (props) => {
  const myRef = useRef([])

  const hexColor = () => {
    const str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++){
      color += str[Math.floor(Math.random() * str.length)]
    }
    return '#' + color
  }

  const [bgColor, setBackgroundColor] = useState(() => {
    const initialState = []
    for (let i = 0; i < props.input; i++){
      initialState.push(hexColor())
    }
    return initialState;
  })

  const colorFunc = () => {
    setBackgroundColor([])
    myRef.current.forEach((el) => {
      let color = hexColor()
      el.style.backgroundColor = color
      setBackgroundColor(arr => [...arr, color])
      console.log(el)
    })
  }

  return (
    <div className='App'>
      {Array(props.input).fill().map((_,i) => (<div key={i} ref={(element) => myRef.current[i] = element} style={{backgroundColor: bgColor[i]}}>{bgColor[i]}</div>))}
      <button onClick={colorFunc}>Style it</button>
    </div>
  )
}

export default App