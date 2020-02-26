// Color matches
// blue + yellow = green
// yellow + red = orange
// red + blue = purple

// Variables
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
const result = document.getElementById("result");
const clear = document.getElementById("clear");

let queue = [];


// Event Listeners
red.addEventListener("click", function() {
  addToQueue("red");
  colorMixer();
});

blue.addEventListener("click", function() {
  addToQueue("blue");
  colorMixer();
});

yellow.addEventListener("click", function() {
  addToQueue("yellow");
  colorMixer();
});

clear.addEventListener("click", function() {
  queue = [];
  result.style.backgroundColor = "inherit";
});


// Functions
function addToQueue(color) {
  if (queue.length < 2) {
    if (color === "red") {
      queue.push("red");
      console.log(queue);
    } else if (color === "blue") {
      queue.push("blue");
      console.log(queue);
    } else if (color === "yellow") {
      queue.push("yellow");
      console.log(queue);
    }
  }
}

function colorMixer() {
  if (
    (queue[0] === "red" && queue[1] === "blue") ||
    (queue[0] === "blue" && queue[1] === "red")
  )
    result.style.backgroundColor = "purple";
  else if (
    (queue[0] === "red" && queue[1] === "yellow") ||
    (queue[0] === "yellow" && queue[1] === "red")
  )
    result.style.backgroundColor = "orange";
  else if (
    (queue[0] === "yellow" && queue[1] === "blue") ||
    (queue[0] === "blue" && queue[1] === "yellow")
  )
    result.style.backgroundColor = "green";
}
