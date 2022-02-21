var body = document.body

//change text color
const theme = document.getElementById('theme')
function toggleMode() {
  body.classList.toggle('dark-mode')
}
theme.addEventListener ('click', toggleMode)

//Add time
var today = new Date();
var hrs24 = today.getHours()
var hrs12 = (hrs24 % 12) || 12
var min = today.getMinutes()
function timeToday(h, m) {
  var time = document.querySelector('.current-time')
  if (m < 10) {
    time.textContent = `${h}:0${m}`
  }
  else {
    time.textContent = `${h}:${m}`
  }
}
timeToday(hrs12, min)


//Add greeting
const greet = document.querySelector('.greeting-quote')
function greeting(h) {
  if (h < 12) {
    greet.textContent = `Good Morning,  `
  } else if (h >= 12 && h <= 17) {
    greet.textContent = `Good Afternoon,  `
  } else {
    greet.textContent = `Good Evening,  `
  }
}
greeting(hrs24)


//Get and change name input
const nameInput = document.getElementById('name')
const replaceNameInput = document.createElement('show-name')
function showName(event) {
  if (event.keyCode === 13) {
    replaceNameInput.textContent = nameInput.value + "."
    nameInput.parentNode.replaceChild(replaceNameInput, nameInput)
    replaceNameInput.style.paddingLeft = "10px"
    replaceNameInput.style.animation = "fade 1.5s"
  }
}
nameInput.addEventListener('keyup', showName)


//Add and show focus of the day
const focusToday = document.getElementById('focus-today')
const focusInput = document.getElementById('focus')
const replaceFocusInput = document.createElement('show-focus')
function showFocus(event) {
  if (event.keyCode === 13) {
    replaceFocusInput.textContent = focusInput.value
    focusInput.parentNode.replaceChild(replaceFocusInput, focusInput)
    focusToday.textContent = "FOCUS:"
    focusToday.style.fontWeight = "700"
    focusToday.style.animation = "fade 1.5s"
    replaceFocusInput.style.animation = "fade 1.5s"
    replaceFocusInput.style.position = "relative"
    replaceFocusInput.style.top = "-50px"
  }
}
focusInput.addEventListener('keyup', showFocus)


//TO-DO LIST
const todoBtn = document.getElementById('to-do')
const todoContainer = document.getElementById('to-do-container')
const todoList = document.createElement('li')
const addTodo = document.getElementById('display-todo')
function displayTodo() {
  if (todoContainer.style.display === "none"){
    todoContainer.style.display = "block"
  } else {
    todoContainer.style.display = "none"
  }
}
todoBtn.addEventListener('click', displayTodo)


//Change background image
const backgroundBtn = document.getElementById('change-bg')
var counter = -1
function changeBg() {
  var images = [
    "/assets/1.jpg",
    "/assets/2.jpg",
    "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "/assets/4.jpg",
    "/assets/5.jpg",
    "/assets/6.jpg",
    "/assets/7.jpg",
    "/assets/8.jpg",
    "/assets/9.jpg",
    "https://images.unsplash.com/photo-1579706783492-081a217cd55e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  ]
  counter ++

  if (counter > images.length -1) {
    counter = 0
  }

  body.style.backgroundImage = 'url('+ images[counter] +')'
  body.style.backgroundSize = 'cover'
}
backgroundBtn.addEventListener('click', changeBg)