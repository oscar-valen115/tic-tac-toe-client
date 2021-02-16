// const config = require('../config')

const store = require('./../store')

const createGameSuccess = function (data) {

  console.log('createGameSuccessData:', data)

  $('#start-game-message').html('Get started! Player 1 starts!')
}

module.exports = {
  createGameSuccess
}
