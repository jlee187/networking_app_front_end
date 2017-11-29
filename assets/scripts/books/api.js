'use strict'

const config = require('../config')

const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
    // shortcut for data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // shortcut for data: data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createNote = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/people/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// const post = function (game) {
//   let data = {
//     game: {
//       cell: {
//         index: store.game.cells.index,
//         value: store.game.cells.value
//       },
//       over: store.game.over
//     }
//   }
//   data = JSON.stringify(data)
//   return $.ajax({
//     url: config.apiOrigin + '/people/' /* + store.game.id */,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     contentType: 'application/json',
//     data
//   })
// }

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createNote
  // post
}
