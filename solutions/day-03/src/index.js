/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import ReactDOM from 'react-dom';
import imageHTML from './images/HTML.png'
import imageCSS from './images/CSS.png'
import imageJS from './images/JS.png'
import imageReact from './images/React.png'
import photoAuthor from './images/ahmed.jpg'
import symbolWing from './images/wing.png'
import './style.css'

const rootElement = document.getElementById('root');
const title = (
  <div className='title'>
    <h1>Front End Technologies</h1>
  </div>
)
const imagesTech = (
  <div className = 'wrapp'>
    <img src={imageHTML} alt="image HTML" />
    <img src={imageCSS} alt="image CSS" />
    <img src={imageJS} alt="image Javascript" />
    <img src={imageReact} alt="image React" />
  </div>
)

const arraySkills = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'Flask', 'Django', 'NumPy', 'Pandas', 'Data Analyst', 'MySQL', 'GaphQL', 'D3.js', 'GatsBy', 'Docker', 'Heroku', 'Git']
const arrayInput = ['First name', 'Last name', 'Email']
const inputs = arrayInput.map((elem) => <input className='soft' type="text" placeholder={elem}/>)
const skills = arraySkills.map((element) => <div className="my-skills">{element}</div>)
const subscriber = (
  <frame>
    <div className="submit-form soft">
      <div className='title main'>
        <p>SUBSCRIBE</p>
      </div>
      <div className='title discr'>
        <p>Sign up with four email address to receive and updates</p>
      </div>
      <div className="wrapp">
        {inputs}
      </div>
      <div class='wrapp'>
        <button className='soft'>Subscribe</button>
      </div>
    </div>
  </frame>
)

const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh'
}
const prof  = 'Senior Developer'
const address = 'Finland'
const date = 'Aug. 30, 2020'
const symbol = <img src={symbolWing} width="25px" alt="symbol Wing" />
const card = (
  <div className="card">
    <img src={photoAuthor} alt="photo Ahmed" />
    <h2>{author.firstName.toUpperCase()}{' '}{author.lastName.toUpperCase()} {symbol}</h2>
    <p>{prof}{', '}{address}</p>
    <h2>SKILLS</h2>
    <div>
      {skills}
    </div>
    <p>Joined on {date}</p>
  </div>
)

const app = (
  <div>
    {title}
    {imagesTech}
    {subscriber}
    {card}
  </div>
)
ReactDOM.render(app, rootElement)