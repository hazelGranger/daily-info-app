import React from 'react'

import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiaGF6ZWxncmFuZ2VyIiwiYSI6ImNqcnU2MXp2MDBqaWo0NG8wdTN0and5ZmoifQ.hKW0j7AKIGWvE81UGYbHFg'

class Map extends React.Component {

  map;

  componentDidMount() {
    const { center, zoom } = this.props
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center,
      zoom: zoom
    })
  }

  render(){
    return(
      <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
    )
  }
}

export default Map
