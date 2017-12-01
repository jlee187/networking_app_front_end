'use strict'

// Hide functionalities till signed in

// $('#change-password').hide()
// $('#sign-out').hide()

const store = require('../store')
// const events = require('../events')
const showPeopleTemplate = require('../templates/helpers/person-listing.handlebars')

const signUpSuccess = function (data) {
  // console.log(data)
  $('#message').text('Signed up succesfully')
  $('#sign-up-button').hide()
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
  $('#sign-up-button').hide()
  $('#sign-in-button').hide()
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
  $('#sign-up-button').show()
  $('#sign-in-button').show()
  $('.main').hide()
  $('#notes').hide()
  $('#message').hide()
  $('#type-id').hide()
  document.getElementById('onClearPeople').click()
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
  document.getElementById('getPeopleButton').click()
}

const createNoteFailure = function () {
  // console.error(error)
  $('#message').text('Note Send Failure')
}

const updateNoteSuccess = function () {
  // console.log('Signed out successfully')
  $('#message').text('Note Updated')
  // $('.headers').hide()
  document.getElementById('getPeopleButton').click()
}

const updateNoteFailure = function () {
  // console.error(error)
  $('#message').text('Note Update Failure')
}

const deleteNoteSuccess = function () {
  // console.log('Signed out successfully')
  $('#message').text('Note Deleted')
  // $('.headers').hide()
  document.getElementById('getPeopleButton').click()
}

const deleteNoteFailure = function () {
  // console.error(error)
  $('#message').text('Note Delete Failure')
}

const getPeopleSuccess = (data) => {
  console.log(data)
  const showPeopleHtml = showPeopleTemplate({ people: data.people })
  $('.content').append(showPeopleHtml)
  $('#message').html('Retrieved all notes')
}

const clearPeople = () => {
  $('.content').empty()
  $('#message').html('All notes hidden')
}

const failure = (error) => {
  console.error(error)
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
