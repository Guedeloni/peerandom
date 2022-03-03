// Clean old result
const cleanOldResult = (result) => {
  while (result.firstChild) { result.removeChild(result.firstChild); };
}

// Display result
const displayResult = (result, array) => {
  let i = 0;
  // Last one with first one
  result.insertAdjacentHTML('beforeend',
    `<li><h2>${array[array.length - 1].toUpperCase()}<span
      style='letter-spacing:0; color:rgb(150,150,150)'>offer a gift to </span>
      ${array[i].toUpperCase()}</h2></li>`);
  // First with second, second with third, etc.
  while (i < array.length - 1) {
    console.log(i);
    result.insertAdjacentHTML('beforeend',
      `<li><h2>${array[i].toUpperCase()}<span
        style='letter-spacing:0; color:rgb(150,150,150)'>offer a gift to </span>
        ${array[i + 1].toUpperCase()}</h2></li>`);
    i += 1;
  }
}

// Clean fields
const cleanFields = (form, fieldNumber) => {
  for (let i = 0; i < fieldNumber; i++) {
    form.elements[i].value = '';
  };
}

export { cleanOldResult, displayResult, cleanFields };
