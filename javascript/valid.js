// Display msg
const showMSG = (msg) => {
  alert(msg);
}

// Test if each field is different from the other
const validField = (array) => {
  // Compare nb of unique values and nb of field
  return (new Set(array)).size === array.length;
}


export { showMSG, validField };
