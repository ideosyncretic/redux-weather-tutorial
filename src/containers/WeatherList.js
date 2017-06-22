import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherList extends Component {
  renderWeather(cityData) {
    const temps = cityData.list.map(record => record.main.temp)
    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
      </tr>
    )
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

// with refactoring:
function mapStateToProps({ weather }) {
  return { weather }
}
// without ES6 refactoring:
// function mapStateToProps(state) {
//   return { weather: state.weather }
// }

export default connect(mapStateToProps)(WeatherList)
