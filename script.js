window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

function randomTime(min, max) {
  return Math.random() * (max - min) + min;
}

// Function to create a Promise that resolves after a random time
function createRandomPromise() {
  return new Promise((resolve) => {
    const time = randomTime(1, 5);
    setTimeout(() => {
      resolve(`Resolved after ${time.toFixed(3)} seconds`);
    }, time * 1000);
  });
}

// Array to store all the Promises
const promises = [
  createRandomPromise(),
  createRandomPromise(),
  createRandomPromise(),
  createRandomPromise(),
  createRandomPromise()
];

// Wait for the first promise to resolve using Promise.any()
Promise.any(promises)
  .then((result) => {
    // Print the result to the output div
    document.getElementById("output").innerText = result;
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });

// Add the promises to the window object for external access
window.promises = promises;