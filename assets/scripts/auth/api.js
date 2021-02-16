const config = require('../config')
const store = require('./../store')

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: `${config.apiUrl}/sign-in`,
    // headers: {
    //   Authorization: `Bearer ${store.user.token}`
    // },
    data: data
  })
}

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    // update includes a / and an id at the end
    url: `${config.apiUrl}/sign-up`,
    // send the formData when making our update request
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    // update includes a / and an id at the end
    url: `${config.apiUrl}/change-password`,
    // send the formData when making our update request
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: data
  })
}

module.exports = {
  signIn,
  signUp,
  changePassword
}
