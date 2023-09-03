/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import ReactDOM from 'react-dom/client';
import photoAuthor from './images/ahmed.jpg'
import symbolWing from './images/wing.png'
import './style.css'

const rootElement = document.getElementById('root');

/* ------------------------------------------------------------------------ */
const hexColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++){
    color += str[Math.floor(Math.random() * str.length)]
  }
  return '#' + color
}

const RendomColor = () => {
  let color = ''
  let array = []
  for (let i = 0; i < 5; i++){
    color = hexColor()
    array.push(<div className="color-blocks" key={color} style={{backgroundColor: color}}>{color}</div>)
  }
  return array
}

const Color = () => (
  <div className="color-wrapp">
    <RendomColor />
  </div>
)
/* --------------------------------------------------------------------------------------------- */
const Skills = () => {
  const arraySkills = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'Flask', 'Django', 'NumPy', 'Pandas', 'Data Analyst', 'MySQL', 'GaphQL', 'D3.js', 'GatsBy', 'Docker', 'Heroku', 'Git']
  return arraySkills.map((el) => <div className="my-skills" key={el}>{el}</div>)
}


const Card = ({ user: {photo, firstName, lastName}, symbolCheck, prof, address, date}) => (
  <div className="card">
    <img src={photo} alt="photo Ahmed" />
    <h2>{firstName.toUpperCase()}{' '}{lastName.toUpperCase()} {symbolCheck}</h2>
    <p>{prof}{', '}{address}</p>
    <h2>SKILLS</h2>
    <div>
      <Skills />
    </div>
    <p>Joined on {date}</p>
  </div>
)

const App = () => {

  const data = {
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh'
    },
    prof: 'Senior Developer',
    address: 'Finland',
    date: 'Aug. 30, 2020'
  }
  const symbol = <img src={symbolWing} width="25px" alt="symbol Wing" />
  const user = {photo: photoAuthor, ...data.author}

  return (
    <div>
      <Card user={user}
            symbolCheck={symbol}
            prof={data.prof}
            address={data.address}
            date={data.date}/>
      <Color />
    </div>
  )
}

ReactDOM.createRoot(rootElement).render(
<React.StrictMode>
  <App/>
</React.StrictMode>
)