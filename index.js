function add(expression) {
  const delimeters = fetchDelimeters(expression);
  let numExpression = expression.replaceAll("//", "");
  let numbers = numExpression.split(delimeters);
  return numbers.reduce((acc, num) => parseInt(acc) + (parseInt(num) || 0), 0);
}

function fetchDelimeters(expression) {
  let delimeters = [",", "\\n"];
  if (expression.startsWith("//")) {
    delimeters.push(expression[2]);
  }
  return new RegExp("[" + delimeters.join("") + "]");
}

export { add };
