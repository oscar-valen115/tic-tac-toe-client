const config = require('../config')
const store = require('./../store')

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: `${config.apiUrl.development}/sign-in`,
    // headers: {
    //   Authorization: `Bearer ${store.user.token}`
    // },
    data: data
  })
}

module.exports = {
  signIn
}
