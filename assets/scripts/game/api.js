const config = require('../config')
const store = require('./../store')

const createGame = function () {
  return $.ajax({
    method: 'POST',
    url: `${config.apiUrl}/games`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const updateGame = function (id, gameInfo) {
  return $.ajax({
    method: 'PATCH',
    url: `${config.apiUrl}/games/${id}`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: gameInfo
  })
}

const getGames = function (gameInfo) {
  return $.ajax({
    method: 'GET',
    url: `${config.apiUrl}/games`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: gameInfo
  })
}

module.exports = {
  createGame,
  updateGame,
  getGames
}
