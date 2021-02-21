const config = require('../config')
const store = require('./../store')

const createGame = function (data) {
  console.log('createGame API response:', data)
  return $.ajax({
    method: 'POST',
    url: `${config.apiUrl}/games`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: data
  })
}

const updateGame = function (id, gameInfo) {
  console.log('updateGame ID, DATA: ', id, gameInfo)
  return $.ajax({
    method: 'PATCH',
    url: `${config.apiUrl}/games/${id}`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: gameInfo
  })
}

module.exports = {
  createGame,
  updateGame
}
