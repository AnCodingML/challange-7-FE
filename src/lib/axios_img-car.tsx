import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://localhost:5000/public'
  baseURL: 'http://54.179.193.110:5000/public'
})

export default instance