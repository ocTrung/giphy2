import axios from "axios"

const apiClient = axios.create({
  baseURL: "http://api.giphy.com/v1/gifs",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    'Content-Type': 'application/json'
  }
})

let apiKey = 'Y4IePdsyeygm3AG0HYRdtFP2C28i8KMH'
let limit = 10

export default {
  getTrending() {
    return apiClient.get('/trending?api_key=' + apiKey + '&limit=' + limit)
  },
  getRandom() {
    return apiClient.get('/random?api_key=' + apiKey)
  },
  getGif(id) {
    return apiClient.get('/' + id + '?api_key=' + apiKey + '&limit=' + limit)
  }
}
