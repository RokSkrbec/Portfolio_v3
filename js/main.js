AOS.init({
  offset: 200,
  duration: 2000,
})

var firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: firebaseAuthDomain,
  databaseURL: firebaseDatabaseURL,
  projectId: firebaseProjectId,
  storageBucket: firebaseStorageBucket,
  messagingSenderId: firebaseMessagingSenderId,
  appId: firebaseAppId,
  measurementId: firebaseMeasurementId,
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// reference messages collection
let messagesRef = firebase.database().ref('messages')

// listen for form submit
document.getElementById('contact-form').addEventListener('submit', submitForm)

// submit form
function submitForm(e) {
  e.preventDefault()

  // get values
  let name = getInputVal('name')
  let company = getInputVal('company')
  let email = getInputVal('email')
  let phone = getInputVal('phone')
  let message = getInputVal('message')
  let date = Date.now()

  //save message
  saveMessage(name, company, email, phone, message, date)

  // show alert
  document.querySelector('.alert').style.display = 'block'

  // hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none'
  }, 3000)

  // clear form
  document.getElementById('contact-form').reset()
}

// function to get form values
function getInputVal(id) {
  return document.getElementById(id).value
}

// save message to firebase messages
function saveMessage(name, company, email, phone, message, date) {
  var newMessageRef = messagesRef.push()
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message,
    date: date,
  })
}
