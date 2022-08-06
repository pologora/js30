const hourHand = document.querySelector('.js-hour-hand')
const minuteHand = document.querySelector('.js-minute-hand')
const secondHand = document.querySelector('.js-second-hand')
const hands = document.querySelectorAll('.hand')

function setDate() {
  const now = new Date()
  removeTransition(hands)
  console.log(hands)

  const seconds = now.getSeconds()
  const minutes = now.getMinutes()
  const hours = now.getHours()

  const secondsDeg = seconds * 6 + 90
  const minutesDeg = minutes * 6 + 90
  const hoursDeg = hours * 30 + 90

  secondHand.style.transform = `rotate(${secondsDeg}deg)`
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`
  hourHand.style.transform = `rotate(${hoursDeg}deg)`
}

function removeTransition(nodeList) {
  nodeList.forEach((hand) => (hand.style.transition = 'none'))
}

setInterval(() => {
  setDate()
}, 1000)
