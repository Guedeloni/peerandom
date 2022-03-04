import { showMSG, validField }            from './javascript/valid.js';
import { cleanOldResult, displayResult, cleanFields }
                                          from './javascript/display.js';
import { randomDistribution }             from './javascript/algo.js';


// const form = document.getElementById('form');
const form = document.forms[0];
const result = document.getElementById('result');
// Count nb of fields
let fieldNumber = 3;


// EXECUTE RANDOM DRAW
form.addEventListener('submit', (event) => {
  console.log('Submit');
  console.log(fieldNumber);
  event.preventDefault();

  // Get value of each field
  let nullField = false;
  const fieldArray = [];
  let i = 0;
  while (!nullField && i < fieldNumber) {
    if (form.elements[i].value != '') {
      fieldArray[i] = form.elements[i].value;
      i += 1;
    } else {nullField = true;}
  };

  // Test validity of data and form submission
  if (!nullField && validField(fieldArray)) {
    console.log('Champs valides');

    // Random distribution
    const randomFieldArray = randomDistribution(fieldArray);
    console.log(randomFieldArray);

    // Clean old results
    cleanOldResult(result);
    // Display results
    displayResult(result, randomFieldArray);
    // Scroll to results
    result.scrollIntoView({behavior: 'smooth'});
  }
  else {
    console.log('Pb. sur validation des champs');
    showMSG('Enter values (not null nor duplicate)');
  }
})


// RESET FIELDS
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', (event) => {
  console.log('Click reset');
  console.log(fieldNumber);
  fieldNumber = cleanFields(form, fieldNumber);
  cleanOldResult(result);
})


// ADD NAME
const list = document.getElementById('fields');
const addButton = document.getElementById('add');
addButton.addEventListener('click', (event) => {
  fieldNumber += 1;
  list.insertAdjacentHTML('beforeend',
  `<input class="field" type="text" name="field-${fieldNumber}">`);
})
