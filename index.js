/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const greet = (time) => {
  let currentTime = parseInt(time)
  if(currentTime < 12 ){
    return "Good Morning"
  }
  if(currentTime > 17){
    return 'Good Evening'
  } else {
    return 'Good Afternoon'
  }
};
/* Write your implementation of displayMessage() */

const displayMessage = (greeting) => {
  const message = document.querySelector('#greeting')
  message.innerText = greeting
};
