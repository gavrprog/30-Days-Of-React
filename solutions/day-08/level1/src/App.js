import React from 'react';
import asabenehImage from './images/ahmed.jpg'

const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

const Button = ({ text, onClick }) => (
  <button className='btn' onClick={onClick}>
    {text}
  </button>
)

class Header extends React.Component {
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date
    } = this.props.data

    return (
      <header style={this.props.style}>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}

class TechList extends React.Component {
  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

class Main extends React.Component {
  render() {
    const {
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground
    } = this.props

    return (
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          <UserCard user={user} />
          <Button
            text='Greet People'
            onClick={greetPeople}
          />
          <Button text='Show Time' onClick={handleTime} />
          <Button
            text='Change Background'
            onClick={changeBackground}
          />
        </div>
      </main>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer style={this.props.style}>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
  state = {
      thema: 'light',
      style: {
        backgraundColor: '',
        color: ''
      },
      styleComponent: {
        backgraundColor: ''
      }
    }

  showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
  }

  handleTime = () => {
    alert(this.showDate(new Date()))
  }

  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }

  setNewState = (thema, color1, color2, color3) => {
    this.setState({thema: thema})
    this.setState({style: {backgroundColor: color1, color: color2}})
    this.setState({styleComponent: {backgroundColor: color3}})
  }

  changeBackground = () => {
    if (this.state.thema === 'light'){
      this.setNewState('dark', '#0f172a', 'white', '#0f172a')
    } else {
      this.setNewState('light', '', 'black', '#61dbfb')
    }
  }

  render() {
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 7, 2020'
    }
    const techs = ['HTML', 'CSS', 'JavaScript']
    const date = new Date()
    const user = { ...data.author, image: asabenehImage }

    return (
      <div className='app' style={this.state.style}>
        <Header data={data} style={this.state.styleComponent}/>
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
        />
        <Footer date={date} style={this.state.styleComponent}/>
      </div>
    )
  }
}

export default App