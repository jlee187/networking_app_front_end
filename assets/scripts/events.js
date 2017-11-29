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
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
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
}

const onCreateNote = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.createNote(data)
    .then(ui.CreateNoteSuccess)
    .catch(ui.createNoteFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#create-note').on('submit', onCreateNote)
}

module.exports = {
  addHandlers
}
