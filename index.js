/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeOfDay) {
  let timeParse = timeOfDay.split(0, 2)
  timeParse = parseInt(timeOfDay, 10)
  if (timeParse < 12) {
    return "Good Morning"
  } else if ( timeParse > 12 && timeParse < 17 ) {
    return "Good Afternoon"
  } else if ( timeParse > 17 ) {
    return "Good Evening"
  }
}


/* Write your implementation of displayMessage() */

function displayMessage(greeting) {

  document.getElementById('greeting').innerText = greeting


}
