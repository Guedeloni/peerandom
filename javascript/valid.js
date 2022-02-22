// Display msg
const showMSG = (msg) => {
  alert(msg);
}

// Test if each field is different from the other
const validField = (array) => {
  // Compare nb of unique values and nb of form elements (minus submit button)
  return (new Set(array)).size === (form.elements.length - 1);
}


export { showMSG, validField };
