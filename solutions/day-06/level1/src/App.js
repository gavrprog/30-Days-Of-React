
import './App.css';


const Numbers = ({whatNumber}) => {
  const arrayNumbersColor = []
  for (let i = 0; i < 32; i++){
    arrayNumbersColor.push(<div className="square" key={i} style={{backgroundColor: whatNumber(i)}}><p>{i}</p></div>)
  }
  return arrayNumbersColor
}

function App() {
  const title = '30 Days Of React'
  const subtitle = 'Number Generator'

  const isPrime = (num) => {
    for (var i = 2; i <= Math.sqrt(num);) {
      if (num % i === 0) return false;
      i === 2 ? i++ : i += 2;
    }
    return num > 1;
  }
  
  const whatNumber = (num) => {
    if (isPrime(num)) {
      return '#fd5e53'//red
    } else if (num % 2 === 0){
      return '#21bf73'//green
    } else {
      return '#fddb3a'//yellow
    }
  }

  return (
    <div className="main">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <div className='table'>
        <Numbers whatNumber={whatNumber}/>
      </div>
    </div>
  );
}

export default App;
