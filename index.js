/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet (string) {
  let arr = string.split(':')
  let hour = parseInt(arr[0]) * 60
  let min = parseInt(arr[1]) 
  let timeInMins = hour + min

  if (timeInMins < 720 ) {
    return "Good Morning"
  } else if (timeInMins > 720 && timeInMins < 1020) {
    return "Good Afternoon"
  } else
    return "Good Evening"
}


/* Write your implementation of displayMessage() */

function displayMessage (msg) {
  document.getElementById('greeting').innerText = msg
}