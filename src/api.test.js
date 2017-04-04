const test = require('ava')
const api = require('./api')
const {
  TEST_LOCATION
} = require('../util/test-constants')

test('Can get nearby gojek drivers', async t => {
  const payload = { location: TEST_LOCATION }
  const drivers = await api.getNearbyGojek(payload)
  t.is(typeof drivers, 'object')
  t.is(typeof drivers.length, 'number')
})

test('Can get nearby go-car drivers', async t => {
  const payload = { location: TEST_LOCATION }
  const drivers = await api.getNearbyGoCar(payload)
  t.is(typeof drivers, 'object')
  t.is(typeof drivers.length, 'number')
})
