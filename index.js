var today = new Date();
var hrs24 = today.getHours()
var hrs12 = (hrs24 % 12) || 12
var min = today.getMinutes();
const greet = document.querySelector('.greeting-quote')
const nameInput = document.getElementById('name')
const replaceNameInput = document.createElement('show-name')

nameInput.addEventListener('keyup', showName)

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