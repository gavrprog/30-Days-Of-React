
import './App.css';


const RendomColor = ({hexColor}) => {
  let color = ''
  let array = []
  for (let i = 0; i < 32; i++){
    color = hexColor()
    array.push(<div className="square" key={color} style={{backgroundColor: color}}><p>{color}</p></div>)
  }
  return array
}

function App() {
  const title = '30 Days Of React'
  const subtitle = 'Hexadecimal Colors'

  const hexColor = () => {
    const str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++){
      color += str[Math.floor(Math.random() * str.length)]
    }
    return '#' + color
  }

  return (
    <div className="main">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <div className='table'>
        <RendomColor hexColor={hexColor}/>
      </div>
    </div>
  );
}

export default App;