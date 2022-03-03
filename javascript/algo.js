const randomDistribution = (array) => {
  const randomFieldArray = [];
  while (array.length !== 0) {
    let randomIndex = Math.floor(Math.random() * array.length);
    randomFieldArray.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  };
  return randomFieldArray;
}

export { randomDistribution }
