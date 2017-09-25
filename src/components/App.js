import React, { Component } from 'react'
import { connect } from 'react-redux'


class App extends Component {
  render() {
    console.log('Props :', this.props)
    return (
      <div>
        Hello World
      </div>
    )
  }
}

function mapStateToProps(cal) {
  const daysOfWeek = [...Object.keys(cal)]
  return {
    calendar : daysOfWeek.map((day) => {
      return {day, 'meals': cal[day] }
    })
  }
}

export default connect(mapStateToProps)(App)
