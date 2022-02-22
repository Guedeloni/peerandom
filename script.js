import { showMSG, validField } from './javascript/valid.js';

// const form = document.getElementById('form');
const form = document.forms[0];

// Count nb of fields
let fieldNumber = 3;

// Display msg
// const showMSG = (msg) => {
//   alert(msg);
// }

// Test if each field is different from the other
// const validField = (array) => {
//   // Compare nb of unique values and nb of form elements (minus submit button)
//   return (new Set(array)).size === (form.elements.length - 1);
// }

// *******************
// Execute random draw
// *******************
form.addEventListener('submit', (event) => {
  console.log('Submit');
  event.preventDefault();
  // Get value of each field
  const fieldArray = [];
  for (let i = 0; i < fieldNumber; i++) {
    fieldArray[i] = form.elements[i].value;
  };

  // Test validity of data and form submission
  if (validField(fieldArray)) {
    console.log('Champs valides');
    // Random distribution
    const randomFieldArray = []
    while (fieldArray.length !== 0) {
      let randomIndex = Math.floor(Math.random() * fieldArray.length);
      randomFieldArray.push(fieldArray[randomIndex]);
      fieldArray.splice(randomIndex, 1);
    }

    // Clean old results
    console.log(randomFieldArray);
    const result = document.getElementById('result');
    while (result.firstChild) {result.removeChild(result.firstChild);};

    // Display results
    let i = 0;
    result.insertAdjacentHTML('beforeend',
      `<li><h2>${randomFieldArray[randomFieldArray.length-1].toUpperCase()}<span
      style='letter-spacing:0; color:rgb(150,150,150)'>offer a gift to </span>
      ${randomFieldArray[i].toUpperCase()}</h2></li>`);
    while (i < randomFieldArray.length-1) {
      console.log(i);
      result.insertAdjacentHTML('beforeend',
        `<li><h2>${randomFieldArray[i].toUpperCase()}<span
        style='letter-spacing:0; color:rgb(150,150,150)'>offer a gift to </span>
        ${randomFieldArray[i + 1].toUpperCase()}</h2></li>`);
      i += 1;
    }
  }
  else {
      console.log('Pb. sur validation des champs');
      showMSG('Enter values (not null nor duplicate)');
    }
})


// **********************
// Re-initialise the page
// **********************
