# `gojek-api`

> A client for APIs used in Go-Jek application.

![Image Here]()

# Usage

```sh
npm install --save gojek-api
```

```js
const Gojek = require('gojek-api')

const KEMANG_TIMUR_RAYA = '-6.2635056,106.8236571'

async function showNearbyMotors ({location}) {
  try {
    const motors = await Gojek.getNearbyGojek({location})
    console.log(motors)
    return motors
  } catch (e) {
    return Promise.reject(e)
  }
}

showNearbyMotors({location: KEMANG_TIMUR_RAYA})
```

# API

## `getNearbyGojek({location: String})`

Accepts a LatLng string (e.g. `'-6.2635056,106.8236571'`) as the `location`. Returns an array of Gojek bike drivers `{driverLatLong, driverVehicleType}`

`driverLatLong`: `String`
`driverVehicleType`: `'bike'`

## `getNearbyGoCar({location: String})`

Accepts a LatLng string (e.g. `'-6.2635056,106.8236571'`) as the `location`. Returns an array of Go-car drivers `{driverLatLong, driverVehicleType}`

`driverLatLong`: `String`
`driverVehicleType`: `'car'` or `'blue-bird'`

# License

MIT (c) 2017 [Muhammad Mustadi](https://github.com/mathdroid)
