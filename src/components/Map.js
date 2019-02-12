import React from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'

import { forecastWords } from '../utils/forecastWords'

mapboxgl.accessToken = 'pk.eyJ1IjoiaGF6ZWxncmFuZ2VyIiwiYSI6ImNqcnU2MXp2MDBqaWo0NG8wdTN0and5ZmoifQ.hKW0j7AKIGWvE81UGYbHFg'

class Map extends React.Component {

  map;

  componentDidMount() {

    const { center, zoom, icon } = this.props
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center,
      zoom: zoom
    })

    this.map.on('load', () => {

      this.props.weatherData.nz.forEach((v) => {
        let el = document.createElement('div')
        el.className = 'weather-marker ' + forecastWords[v.forecastWord]

        new mapboxgl.Marker(el)
        .setLngLat(v.coordinates)
        .addTo(this.map)

      })
    })

    // let popup = new mapboxgl.Popup({closeOnClick: false})
    // .setLngLat(center)
    // .setHTML('<img src="./icons/windy.png" alt="windy" />')
    // .addTo(this.map)

    // this.map.on('load', () => {
    //
    //     this.map.loadImage('./icons/windy.png', (err, img)=> {
    //
    //       this.map.addImage('weather', img)
    //
    //       this.map.addLayer({
    //         "id": "points",
    //         "type": "symbol",
    //         "source": {
    //           "type": "geojson",
    //           "data": {
    //             "type": "FeatureCollection",
    //             "features": [{
    //               "type": " Feature",
    //               "geometry": {
    //                 "type": "Point",
    //                 "coordinates": [175, -40]
    //               }
    //             }]
    //           }
    //         },
    //         "layout": {
    //           "icon-image": "weather",
    //           "icon-size": 0.5
    //         }
    //       })
    //     })
    //
    // })

}

  render() {
    return(
      <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
    )
  }
}

export default Map
