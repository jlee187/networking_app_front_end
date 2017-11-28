'use strict'

// Hide functionalities till signed in

$('#change-password').hide()
$('#sign-out').hide()
$('#show-game').hide()
$('#create-game').hide()
$('#get-games').hide()

const store = require('../store')

const signUpSuccess = function (data) {
  // console.log(data)
  $('#message').text('Signed up succesfully')
}

const signUpFailure = function () {
  // console.error(error)
  $('#message').text('Error on sign up')
}

const signInSuccess = function (data) {
  // console.log(data)
  store.user = data.user
  $('#message').text('Signed in succesfully')
  $('#change-password').show()
  $('#sign-out').show()
  $('#show-game').show()
  $('#create-game').show()
  $('#get-games').show()
  $('#sign-up').hide()
  $('.headers').css('display', 'block')
}

const signInFailure = function () {
  // console.error(error)
  $('#message').text('Please sign in! Note: Fields are case-sensitive!')
}

const changePasswordSuccess = function (data) {
  // console.log(data)
  $('#message').text('Changed password successfully')
}

const changePasswordFailure = function () {
  // console.error(error)
  $('#message').text('Error on change passwords')
}

const signOutSuccess = function () {
  // console.log('Signed out successfully')
  $('#message').text('Signed out successfully')
  $('.x-score').css('display', 'none')
  $('.o-score').css('display', 'none')
  $('#game-status').hide()
  $('.headers').hide()
}

const signOutFailure = function () {
  // console.error(error)
  $('#message').text('Error on sign out')
}

const createGameSuccess = function (data) {
  // console.log(data)
  // console.log(data.game.id)
  store.game = data.game
  store.game.id = data.game.id
  store.game.cells = data.game.cells
  store.game.over = data.game.over
  $('.board').show()
  $('#message').text('Created game succesfully')
  $('#create-game').hide()
  $('#reset').text('New Game')
  $('#reset').css('display', 'block')
  $('.x-score').css('display', 'inline-block')
  $('.o-score').css('display', 'inline-block')
}

const createGameFailure = function () {
  // console.error()
  $('#message').text('Error on create game')
}

const onSuccess = function (data) {
  if (data.games) {
    // console.log(data.games)
    $('#message').text('You have played ' + data.games.length + ' games. Why not one more?!')
    // $('#message').text(data.games)
  } else {
    console.table(data.games)
  }
}

const onError = function (response) {
  $('#message').text('Whoops something went wrong!')
  // console.error(response)
}

const updateSuccess = function () {
  $('#message').html('Game updated successfully!')
}

const updateFailure = function () {
  // console.log(error)
  $('#message').html('Update failed. Please check internet connectivity.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createGameSuccess,
  createGameFailure,
  onSuccess,
  onError,
  updateSuccess,
  updateFailure
}
