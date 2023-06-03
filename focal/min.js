function min(numbers) {
  let value = numbers[0];
  for (let number of numbers) {
    if (number < value) {
      value = number;
    }
  }
  return value;
}

console.log(min([345, 678, 765, 23445, 10]));

