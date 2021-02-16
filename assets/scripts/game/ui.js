// const config = require('../config')

const store = require('./../store')

const createGameSuccess = function (data) {
  console.log('createGameSuccessData:', data)

  $('#start-game-message').html('Get started! Player 1 starts!')
}

const chooseBoxSuccess = function (data) {
  console.log(data)
}

const chooseBoxFailure = function (data) {
  console.log(data)
}

module.exports = {
  createGameSuccess,
  chooseBoxSuccess,
  chooseBoxFailure
}
