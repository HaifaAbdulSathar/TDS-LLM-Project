// script.js

// Function to generate a random hex color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Function to randomize the dress body (top)
  function randomizeTop() {
    const dressBody = document.getElementById('dress-body');
    dressBody.setAttribute('fill', getRandomColor());
  }
  
  // Function to randomize the sleeves
  function randomizeSleeves() {
    const leftSleeve = document.getElementById('left-sleeve');
    const rightSleeve = document.getElementById('right-sleeve');
    const newSleeveColor = getRandomColor(); // Optional: Use the same color for both sleeves
    leftSleeve.setAttribute('fill', newSleeveColor);
    rightSleeve.setAttribute('fill', newSleeveColor);
  }
  
  // Function to randomize all parts
  function randomizeAll() {
    randomizeTop();
    randomizeSleeves();
  }
  
  // Add event listeners to the buttons
  document.getElementById('randomize-top-btn').addEventListener('click', randomizeTop);
  document.getElementById('randomize-sleeves-btn').addEventListener('click', randomizeSleeves);
  document.getElementById('randomize-all-btn').addEventListener('click', randomizeAll);
  