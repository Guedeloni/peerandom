// const form = document.getElementById('form');
const form = document.forms[0];

// count nb of fields
let fieldNumber = 3;

// test if each field is different from the other
const validField = (array) => {
  // compare nb of unique values and nb of form elements (minus submit button)
  return (new Set(array)).size === (form.elements.length - 1);
}

const showMSG = (msg) => {
  alert(msg);
}

// *******************
// execute random draw
// *******************
form.addEventListener('submit', (event) => {
  console.log('Submit');
  event.preventDefault();
  // get value of each field
  const fieldArray = [];
  for (let i = 0; i < fieldNumber; i++) {
    fieldArray[i] = form.elements[i].value;
  };

  // test validity of data and form submission
  if (validField(fieldArray)) {
    console.log('Champs valides');
    // random distribution
    const randomFieldArray = []
    while (fieldArray.length !== 0) {
      let randomIndex = Math.floor(Math.random() * fieldArray.length);
      randomFieldArray.push(fieldArray[randomIndex]);
      fieldArray.splice(randomIndex, 1);
    }

    // display results
    console.log(randomFieldArray);
    let i = 0;
    document.getElementById('result').insertAdjacentHTML('beforeend',
    `<li>${randomFieldArray[randomFieldArray.length-1]} for ${randomFieldArray[i]}</li>`);
    while (i < randomFieldArray.length-1) {
      console.log(i);
      document.getElementById('result').insertAdjacentHTML('beforeend',
      `<li>${randomFieldArray[i]} for ${randomFieldArray[i+1]}</li>`);
      i += 1;
    }
  }
  else {
      console.log('Pb. sur validation des champs');
      showMSG('Enter values (not null nor duplicate)');
    }
})


// **********************
// re-initialise the page
// **********************
