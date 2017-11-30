'use strict'

const getFormFields = require(`../../lib/get-form-fields`)

const api = require('./books/api')
const ui = require('./books/ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  this.reset()
  return false
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  this.reset()
  return false
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  this.reset()
  return false
}

const onSignOut = function (event) {
  // const data = getFormFields(this)
  // console.log(data)
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  this.reset()
  return false
}

const onCreateNote = function (event) {
  const data = getFormFields(this)
  console.log(data)
  console.log(data.person.id)
  event.preventDefault()
  api.createNote(data)
    .then(ui.createNoteSuccess)
    .catch(ui.createNoteFailure)
  this.reset()
  return false
}

const onUpdateNote = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.updateNote(data)
    .then(ui.updateNoteSuccess)
    .catch(ui.updateNoteFailure)
  this.reset()
  return false
}

const onDeleteNote = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.deleteNote(data)
    .then(ui.deleteNoteSuccess)
    .catch(ui.deleteNoteFailure)
  this.reset()
  return false
}

const onGetPeople = (event) => {
  event.preventDefault()
  api.getPeople()
    .then(ui.getPeopleSuccess)
    .catch(ui.failure)
}

const onClearPeople = (event) => {
  event.preventDefault()
  ui.clearPeople()
}

// const onShowNote = function (event) {
//   const data = getFormFields(this)
//   console.log(data)
//   event.preventDefault()
//   api.createNote(data)
//     .then(ui.createNoteSuccess)
//     .catch(ui.createNoteFailure)
// }

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#create-note').on('submit', onCreateNote)
  $('#update-note').on('submit', onUpdateNote)
  $('#delete-note').on('submit', onDeleteNote)
  $('#getPeopleButton').on('click', onGetPeople)
  $('#clearPeopleButton').on('click', onClearPeople)
  // $('#show-note').on('submit', onShowNote)
}

module.exports = {
  addHandlers
}
