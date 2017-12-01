'use strict'

// Hide functionalities till signed in

// $('#change-password').hide()
// $('#sign-out').hide()

const store = require('../store')
const showPeopleTemplate = require('../templates/helpers/person-listing.handlebars')

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
  $('.main').show()
  // $('.user-actions').hide()
  // $('#sign-up').hide()
  // $('#sign-in').hide()
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

const createNoteSuccess = function () {
  // console.log('Signed out successfully')
  $('#message').text('Note Sent')
  // $('.headers').hide()
}

const createNoteFailure = function () {
  // console.error(error)
  $('#message').text('Note Send Failure')
}

const updateNoteSuccess = function () {
  // console.log('Signed out successfully')
  $('#message').text('Note Updated')
  // $('.headers').hide()
}

const updateNoteFailure = function () {
  // console.error(error)
  $('#message').text('Note Update Failure')
}

const deleteNoteSuccess = function () {
  // console.log('Signed out successfully')
  $('#message').text('Note Deleted')
  // $('.headers').hide()
}

const deleteNoteFailure = function () {
  // console.error(error)
  $('#message').text('Note Delete Failure')
}

const getPeopleSuccess = (data) => {
  console.log(data)
  const showPeopleHtml = showPeopleTemplate({ people: data.people })
  $('.content').append(showPeopleHtml)
}

const clearPeople = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

// const showNoteSuccess = function () {
//   // console.log('Signed out successfully')
//   $('#message').text('Note Shown Successfully')
//   // $('.headers').hide()
// }
//
// const showNoteFailure = function () {
//   // console.error(error)
//   $('#message').text('Note Shown Failure')
// }

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createNoteSuccess,
  createNoteFailure,
  updateNoteSuccess,
  updateNoteFailure,
  deleteNoteSuccess,
  deleteNoteFailure,
  getPeopleSuccess,
  clearPeople,
  failure
  // showNoteSuccess,
  // showNoteFailure
}
