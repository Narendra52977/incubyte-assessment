function add(expression) {
  const delimeters = /[,\n]/;
  let numbers = expression.split(delimeters);
  return numbers.reduce((acc, num) => parseInt(acc) + (parseInt(num) || 0), 0);
}

export { add };
