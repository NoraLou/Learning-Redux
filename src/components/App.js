import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'


class App extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        Hello World
      </div>
    )
  }
}

function mapStateToProps(cal, food) {
  const daysOfWeek = [...Object.keys(cal)]

  return {
    calendar: daysOfWeek.map((day) => ({
      day,
      meals: Object.keys(cal[day]).reduce((meals, meal) =>{
        meals[meal] = cal[day][meal]
        ? food[cal[day][meal]]
        : null
        return meals
       },
      {})
    }))
  }
}

function mapDispatchToProps(dispatch){
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data))
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(App)


