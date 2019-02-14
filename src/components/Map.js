import React from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'
import '../styles/weather.css'

import { forecastWords } from '../utils/forecastWords'

mapboxgl.accessToken = 'pk.eyJ1IjoiaGF6ZWxncmFuZ2VyIiwiYSI6ImNqcnU2MXp2MDBqaWo0NG8wdTN0and5ZmoifQ.hKW0j7AKIGWvE81UGYbHFg'

class Map extends React.Component {

  map;

  drawWeather(map) {
    console.log('draw');
    this.props.weatherData.nz.forEach((v) => {
      let el = document.createElement('div')
      el.className = 'weather-marker ' + forecastWords[v.forecastWord]

      let popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(this.renderPopup(v.location, v.max, v.min, v.forecastWord))

      new mapboxgl.Marker(el)
      .setLngLat(v.coordinates)
      .setPopup(popup)
      .addTo(map)
    })

  }

  componentDidMount() {

    const { center, zoom, icon } = this.props
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center,
      zoom: zoom
    })

    this.map.on('load', () => {
      this.drawWeather(this.map)
    })
  }

  componentDidUpdate(nextProps) {
    this.drawWeather(this.map)
  }

  renderPopup(location, max, min, forecastWord) {
    return `
      <p class="popuptext city">${location}</p>
      <p class="popuptext" >${forecastWord}</p>
      <p class="popuptext">high: <span class="degree">${max}</span> ℃</p>
      <p class="popuptext">low : <span class="degree"> ${min}</span> ℃</p>
    `
  }

  render() {
    return(
      <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
    )
  }
}

export default Map
