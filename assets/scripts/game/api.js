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
    data: {}
  })
}

const chooseBox = function (data) {
  console.log('ChooseBoxData: ', data)
}

module.exports = {
  createGame,
  chooseBox
}
