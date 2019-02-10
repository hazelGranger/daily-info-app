import axios from 'axios'

const METSERVICE_URL = 'https://www.metservice.com/publicData/mainPageW'

async function fetchAll(ctx) {
  const res = await axios.get(METSERVICE_URL)
  ctx.body = res.data
}

export default {
  fetchAll
}
