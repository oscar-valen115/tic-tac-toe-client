const config = require('../config')
const store = require('./../store')

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: `${config.apiUrl}/sign-in`,
    data: data
  })
}

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: `${config.apiUrl}/sign-up`,
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: `${config.apiUrl}/change-password`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: data
  })
}

const signOut = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: `${config.apiUrl}/sign-out`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  signIn,
  signUp,
  changePassword,
  signOut
}
