'use strict'

// Hide functionalities till signed in

// $('#change-password').hide()
// $('#sign-out').hide()

const store = require('../store')

// const api = require('./api')

const api = require('./api')

const showPeopleTemplate = require('../templates/helpers/person-listing.handlebars')

const signUpSuccess = function (data) {
  // console.log(data)
  $('#message').text('Signed up succesfully')
  $('#sign-up-button').hide()
  // $('#editNote').hide()
  // $('#deleteNote').hide()
  // $('#getPeopleButton').hide()
  // $('#clearPeopleButton').hide()
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
  $('#notes').show()
  // $('#type-id').show()
  // $('.user-actions').hide()
  // $('#sign-up').hide()
  // $('#sign-in').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('.headers').css('display', 'block')

  $('#initialLogIn').click()

  // console.log(data.people.length)

  // const test = api.getPeople()
  // console.log(test)

  // if (test.length === 0) {
  //   $('#editNote').hide()
  //   $('#deleteNote').hide()
  //   $('#getPeopleButton').hide()
  //   $('#clearPeopleButton').hide()
  // }

  // $('#getPeopleButton').click()
  // console.log(data)
  // const showPeopleHtml = showPeopleTemplate({ people: data.people })
  // $('.content').append(showPeopleHtml)
  // console.log(showPeopleHtml)
  // if (showPeopleHtml.length === 0) {
  //   console.log(showPeopleHtml)
  //   $('#editNote').hide()
  //   $('#deleteNote').hide()
  //   $('#getPeopleButton').hide()
  //   $('#clearPeopleButton').hide()
  // } else {
  //   console.log('test')
  // }
  // $('.content').hide()
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
  $('#clearPeopleButton').click()
  $('#message').text('Signed out successfully')
  $('#sign-up-button').show()
  $('#sign-in-button').show()
  $('.main').hide()
  $('#notes').hide()
  // $('#message').hide()
  $('#type-id').hide()
  $('#change-password-button').hide()
  $('#update-note').hide()
  $('#create-note').hide()
  $('#delete-note').hide()
  // $('.headers').hide()
}

const signOutFailure = function () {
  // console.error(error)
  $('#message').text('Error on sign out')
}

const createNoteSuccess = function () {
  // console.log('Signed out successfully')
  // $('.headers').hide()
  $('#message').text('Note Sent')
  document.getElementById('getPeopleButton').click()
  $('#editNote').show()
  $('#deleteNote').show()
  $('#getPeopleButton').show()
  $('#clearPeopleButton').show()
  $('.content').show()
}

const createNoteFailure = function () {
  // console.error(error)
  $('#message').text('Note Send Failure')
}

const updateNoteSuccess = function () {
  // console.log('Signed out successfully')
  // $('.headers').hide()
  document.getElementById('getPeopleButton').click()
  $('#message').text('Note Updated')
}

const updateNoteFailure = function () {
  // console.error(error)
  $('#message').text('Note Update Failure')
}

const deleteNoteSuccess = function () {
  // console.log('Signed out successfully')
  // $('.headers').hide()
  document.getElementById('getPeopleButton').click()
  $('#message').text('Note Deleted')
}

const deleteNoteFailure = function () {
  // console.error(error)
  $('#message').text('Note Delete Failure')
}

const getPeopleSuccess = (data) => {
  // console.log(data)
  const showPeopleHtml = showPeopleTemplate({ people: data.people })
  // console.log(showPeopleHtml.length)
  $('.content').append(showPeopleHtml)
  // $('#message').html('Retrieved all notes')
  // console.log(data.people.length)
  if (data.people.length === 0) {
    $('#editNote').hide()
    $('#deleteNote').hide()
    $('#getPeopleButton').hide()
    $('#clearPeopleButton').hide()
  }
}

const initialLogIn = (data) => {
  api.getPeople()
  // console.log(data.people.length)
  // if (showPeopleHtml.length === 0) {
  //   $('#editNote').hide()
  //   $('#deleteNote').hide()
  //   $('#getPeopleButton').hide()
  //   $('#clearPeopleButton').hide()
  // }
}

const clearPeople = () => {
  $('.content').empty()
  // $('#message').html('All notes hidden')
}

const failure = () => {
  $('#message').text('Failed to clear list')
  // console.error(error)
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
  initialLogIn,
  clearPeople,
  failure
  // showNoteSuccess,
  // showNoteFailure
}
