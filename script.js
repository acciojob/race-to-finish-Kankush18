window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

function randomTime(min, max) {
  return Math.random() * (max - min) + min;
}


function createRandomPromise() {
  return new Promise((resolve) => {
    const time = randomTime(1, 5);
    setTimeout(() => {
      resolve(`Resolved after ${time.toFixed(3)} seconds`);
    }, time * 1000);
  });
}


const promises = [
  createRandomPromise(),
  createRandomPromise(),
  createRandomPromise(),
  createRandomPromise(),
  createRandomPromise()
];


Promise.any(promises)
  .then((result) => {
    
    document.getElementById("output").innerText = result;
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });


window.promises = promises;