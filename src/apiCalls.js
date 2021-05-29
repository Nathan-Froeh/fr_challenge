const axios = require('axios');

const baseUrl = 'http://localhost:5555/parts'

export function getParts(pageNumber) {
  return axios.get(`${baseUrl}/?page=${pageNumber}`)
    .then(res => {
      return res
    })
  .catch (error => {throw Error(error)})
}

export function updatePart(part) {
  return axios.get(`${baseUrl}/${part.id}`, {method: 'PUT'})
    .then(res => {
      return res
    })
  .catch (error => {throw Error(error)})
}
