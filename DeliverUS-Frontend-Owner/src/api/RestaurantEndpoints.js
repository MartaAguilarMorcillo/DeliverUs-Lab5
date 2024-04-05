import { get } from './helpers/ApiRequestsHelper'

export { getAll, getDetail }

function getAll () {
  return get('/users/myrestaurants')
}

function getDetail (id) {
  return get(`/restaurants/${id}`)
}

// function getDetail (id) {
// return restaurantsDetailMock[id]
// }
