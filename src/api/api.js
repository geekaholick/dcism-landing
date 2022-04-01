import axios from 'axios'

const BaseApi = axios.create({
  baseURL: 'http://localhost:8000/api',
  // to ensure we can fetch data from another instance of localhost running for db
  // this is for testing
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
  }
})

const Api = () => {
  const token = localStorage.getItem('token')
  if (token) {
    BaseApi.defaults.headers.common.Authorization = `Bearer ${token}`
    BaseApi.defaults.headers.common.Accept = 'application/json'
  }

  return BaseApi
}

export default Api
