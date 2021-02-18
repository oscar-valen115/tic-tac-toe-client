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

const chooseBox = function (data) {
  console.log('ChooseBoxData: ', data)
  return $.ajax({
    method: 'PATCH',
    url: `${config.apiUrl}/games/${store.game._id}`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: {}
  })
}

module.exports = {
  createGame,
  chooseBox
}
