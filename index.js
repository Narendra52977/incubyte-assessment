function add(expression) {
  let numbers = expression.split(",");
  return numbers.reduce((acc, num) => parseInt(acc) + (parseInt(num) || 0), 0);
}

export { add };
