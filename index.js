function add(expression) {
  const delimeters = fetchDelimeters(expression);
  let numExpression = expression.replaceAll("//", "");
  let numbers = numExpression.split(delimeters);
  numbers = numbers.map(num => parseInt(num) || 0);
  let negitiveNumbers = numbers.filter(num => num < 0);
  if (negitiveNumbers.length) {
    throw new Error("negative numbers not allowed < " + negitiveNumbers.join(",") + " >");
  }
  return numbers.reduce((acc, num) => acc + num, 0);
}

function fetchDelimeters(expression) {
  let delimeters = [",", "\\n"];
  if (expression.startsWith("//")) {
    delimeters.push(expression[2]);
  }
  return new RegExp("[" + delimeters.join("") + "]");
}

export { add };
