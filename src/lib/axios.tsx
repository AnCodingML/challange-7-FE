import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://localhost:5000/api/v1/'
  baseURL: 'http://8.215.36.119:5000/api/v1/'
})

export default instance