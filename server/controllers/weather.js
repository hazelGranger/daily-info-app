import axios from 'axios'
// import mapbox from '../map-geocode'
import { nzCities } from '../utils/geocodingNZ'

const METSERVICE_URL = 'https://www.metservice.com/publicData/mainPageW'
const accessToken = 'pk.eyJ1IjoiaGF6ZWxncmFuZ2VyIiwiYSI6ImNqcnU2MXp2MDBqaWo0NG8wdTN0and5ZmoifQ.hKW0j7AKIGWvE81UGYbHFg'


async function fetchAll(ctx) {
  const res = await axios.get(METSERVICE_URL)
  const weatherDate = await res.data.map(v=>({
    location: v.location,
    min: v.days[0]['min'],
    max: v.days[0]['max'],
    forecastWord: v.days[0]['forecastWord'],
    coordinates: nzCities[v.location]
    // let coordinates
    // if ( geocodingMap.length < res.data.length ) {
    //   console.log('geocoding')
    //   mapbox(accessToken, v.location + ' New Zealand', (err, data)=>{
    //     geocodingMap.push({
    //       location: v.location,
    //       coordinates: data['features'][0]['center'],
    //     })
    //     console.log(v.location, data['features'][0]['center']);
    //     return {
    //       location: v.location,
    //       min: v.days[0]['min'],
    //       max: v.days[0]['max'],
    //       forecastWord: v.days[0]['forecastWord'],
    //       coordinates: data['features'][0]['center']
    //     }
    //   })
    // }
  }))
  ctx.body = weatherDate
}

async function geocoding(location) {
  const res = await mapbox(accessToken, v.location + ' New Zealand')
  return res
}

export default {
  fetchAll
}
