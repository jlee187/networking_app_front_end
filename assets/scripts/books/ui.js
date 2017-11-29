'use strict'

// Hide functionalities till signed in

// $('#change-password').hide()
// $('#sign-out').hide()

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
  // $('#change-password').show()
  // $('#sign-out').show()
  // $('#sign-up').hide()
  // $('.headers').css('display', 'block')
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
  // $('.headers').hide()
}

const signOutFailure = function () {
  // console.error(error)
  $('#message').text('Error on sign out')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
