import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/googleMap'

class WeatherList extends Component {
  renderWeather(cityData) {
    const temps = _.map(cityData.list.map(record => record.main.temp), (temp) => {return temp - 273})
    const pressures = cityData.list.map(record => record.main.pressure)
    const humidities = cityData.list.map(record => record.main.humidity)
    const { lon, lat } = cityData.city.coord

    return (
      <tr key={cityData.city.id}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td><Chart data={temps} color='red' unit='°C' /></td>
        <td><Chart data={pressures} color='black' unit='hPa' /></td>
        <td><Chart data={humidities} color='blue' unit='%' /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
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
