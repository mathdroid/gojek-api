const { create } = require('axios')
const { resolve, reject } = require('bluebird')

const api = create({
  baseURL: 'https://api.gojekapi.com',
  responseType: 'json',
  timeout: 10000
})

api.fetch = ({ method, url, params, data }) =>
  api({
    method,
    url,
    params,
    data: (/post/i.test(method) ||
      /put/i.test(method) ||
      /patch/i.test(method)) &&
      data
  })
    .then(({ data }) => {
      return resolve(data)
    })
    .catch(err => {
      const { response: { data } } = err
      return reject(data)
    })

api.getNearbyGojek = ({ location }) =>
  api.fetch({
    method: 'get',
    url: '/gojek/service_type/1/drivers/nearby',
    params: { location } // In LatLng
  })

api.getNearbyGoCar = ({ location }) =>
  api.fetch({
    method: 'get',
    url: '/gojek/service_type/24/drivers/nearby',
    params: { location } // In LatLng
  })

module.exports = api
