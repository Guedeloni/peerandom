import { showMSG, validField }            from './javascript/valid.js';
import { cleanOldResult, displayResult }  from './javascript/display.js';
import { randomDistribution }             from './javascript/algo.js';

// const form = document.getElementById('form');
const form = document.forms[0];

// Count nb of fields
let fieldNumber = 3;

// Execute random draw
form.addEventListener('submit', (event) => {
  console.log('Submit');
  event.preventDefault();

  // Get value of each field
  const fieldArray = [];
  for (let i = 0; i < fieldNumber; i++) {
    fieldArray[i] = form.elements[i].value;
  };

  // Test validity of data and form submission
  if (validField(fieldArray, fieldNumber)) {
    console.log('Champs valides');

    // Random distribution
    const randomFieldArray = randomDistribution(fieldArray);
    console.log(randomFieldArray);

    const result = document.getElementById('result');
    // Clean old results
    cleanOldResult(result);
    // Display results
    displayResult(result, randomFieldArray);
  }
  else {
      console.log('Pb. sur validation des champs');
      showMSG('Enter values (not null nor duplicate)');
    }
})


// **********************
// Re-initialise the page
// **********************
