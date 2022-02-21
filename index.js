var today = new Date();
var hrs24 = today.getHours()
var hrs12 = (hrs24 % 12) || 12
var min = today.getMinutes()
var body = document.body
const theme = document.getElementById('theme')
const greet = document.querySelector('.greeting-quote')
const nameInput = document.getElementById('name')
const replaceNameInput = document.createElement('show-name')
const focusToday = document.getElementById('focus-today')
const focusInput = document.getElementById('focus')
const replaceFocusInput = document.createElement('show-focus')
const backgroundBtn = document.getElementById('change-bg')

function toggleMode() {
  body.classList.toggle('dark-mode')
}

function timeToday(h, m) {
  var time = document.querySelector('.current-time')
  time.textContent = `${h}:${((m < 10 ? '0':'')+ m)}`
}
timeToday(hrs12, min)

function greetingAndQuote(h) {
  if (h < 12) {
    greet.textContent = `Good Morning,  `
  } else if (h >= 12 && h <= 17) {
    greet.textContent = `Good Afternoon,  `
  } else {
    greet.textContent = `Good Evening,  `
  }
}
greetingAndQuote(hrs24)

function showName(event) {
  if (event.keyCode === 13) {
    replaceNameInput.textContent = nameInput.value + "."
    nameInput.parentNode.replaceChild(replaceNameInput, nameInput)
    replaceNameInput.style.paddingLeft = "10px"
    replaceNameInput.style.animation = "fade 1.5s"
  }
}

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

function changeBg() {
  body.style.backgroundImage = 'url('+ backgroundBtn.value +')';
  body.style.backgroundSize = "cover"
  body.style.backgroundRepeat = "no-repeat"
}

theme.addEventListener ('click', toggleMode)
nameInput.addEventListener('keyup', showName)
focusInput.addEventListener('keyup', showFocus)
backgroundBtn.addEventListener('input', changeBg)