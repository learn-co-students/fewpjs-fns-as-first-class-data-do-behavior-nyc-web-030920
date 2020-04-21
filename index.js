/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
  let num = parseInt(string)
  if (num < 12){
    return "Good Morning"
  } else if(num > 12 && num < 17){
    return "Good Afternoon"
  } else if (num > 17){
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string){
  let el = document.getElementById("greeting")
  el.innerText = string
}
