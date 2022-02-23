var body = document.body

//change text color
const theme = document.getElementById('theme')
function toggleMode() {
  body.classList.toggle('dark-mode')
}
theme.addEventListener ('click', toggleMode)

//add bookmarks 
const bookmarkContainer = document.getElementById('bookmarks-container')
const bookmarkBtn = document.getElementById('bookmarkBtn')
function displayBookmarks() {
  if (bookmarkContainer.style.display === "none"){
    bookmarkContainer.style.display = "block"
  } else {
    bookmarkContainer.style.display = "none"
  }
}
bookmarkBtn.addEventListener('click', displayBookmarks)

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
  if (h <= 12) {
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


//  DISPLAYING TO-DO LIST CONTAINER
const todoBtn = document.getElementById('to-do')
const todoContainer = document.getElementById('to-do-container')
function displayTodo() {
  if (todoContainer.style.display === "none"){
    todoContainer.style.display = "block"
  } else {
    todoContainer.style.display = "none"
  }
}
todoBtn.addEventListener('click', displayTodo)


// add/remove items from the list
var todoUL = document.getElementById('todo-ul')
const add = document.getElementById('add')
function updateTodo() {
  const todoInput = document.getElementById('todo-input').value
  var todoList = document.createElement('li')

  if (todoInput === '') {
    alert("Oops! Please write something")
  } else {
    todoList.textContent = todoInput
    todoUL.appendChild(todoList)
  }

  //adding x button and removing items from list
  var span = document.createElement('span')
  var x = document.createTextNode('×')
  span.className = 'close'
  span.appendChild(x)
  span.addEventListener('click', function() {
    var del = this.parentElement;
    del.style.display = 'none'
  })
  todoList.append(span)

  //adding checkbox
  var span = document.createElement('span')
  var check = document.createElement('input')
  check.setAttribute('type', 'checkbox')
  check.addEventListener('click', function() {
    if (check.checked) {
      todoList.style.textDecoration = 'line-through'
      todoList.style.color = 'gray'
    }
    else {
      todoList.style.textDecoration = 'none'
      todoList.style.color = 'black'
    }
  })
  span.className = 'check'
  span.appendChild(check)
  todoList.appendChild(span)
}
add.addEventListener('click', updateTodo)

//dsplay change quote container
const quoteBtn = document.getElementById('quote')
const newQuote = document.getElementById('new-quote')
function addQuote() {
  if (newQuote.style.display === 'none') {
    newQuote.style.display = 'block'
  } else {
    newQuote.style.display = 'none'
  }
}
quoteBtn.addEventListener('click', addQuote)


//change current quote
var quoteInput = document.getElementById('quote-input')
var addQuote = document.getElementById('add-quote')
function changeQuote(event) {
  quoteBtn.textContent = quoteInput.value
  quoteBtn.style.animation = 'fade 1s'
}
addQuote.addEventListener('click', changeQuote)


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

  if (counter > images.length - 1) {
    counter = 0
  }

  body.style.backgroundImage = 'url('+ images[counter] +')'
  body.style.backgroundSize = 'cover'
}
backgroundBtn.addEventListener('click', changeBg)