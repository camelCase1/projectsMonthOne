let userName = 'Jaelen'

let userQuestion = ''

let randomNumbers = Math.floor(Math.random() * 5)


switch(randomNumbers) {
  case 0:
    userQuestion = 'Will I be in the shower tomorrow night?'
      break;
  case 1:
    userQuestion = 'Should I eat breakfast tomorrow?'
      break;
  case 2:
    userQuestion = 'Should I do a 2 mile walk / run tomorrow'
      break;
  case 3:
    userQuestion = 'Should I learn more code tomorrow?'
      break;
  case 4:
    userQuestion = 'Should I eat frozen food tomorrow?'
      break;
}
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!')
console.log(`${userName} asked: ${userQuestion}`)

let randomNumber = Math.floor(Math.random() * 8)

let eightBall = ''

switch(randomNumber) {
  case 0:
    eightBall = 'Yes'
      break;
  case 1:
    eightBall = 'According to my calculations, no'
      break;
  case 2:
    eightBall = 'Reply hazy try again'
      break;
  case 3:
    eightBall = 'Rather not'
      break;
  case 4:
    eightBall = 'Hopefully'
      break;
  case 5:
    eightBall = 'My sources say no'
      break;
  case 6:
    eightBall = 'Outlook not so good'
      break;
  case 7:
    eightBall = 'Signs point to yes'
      break;
}

console.log(`Eightball answers: ${eightBall}`)