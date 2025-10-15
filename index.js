function add(expression) {
  const delimiters = fetchDelimiters(expression);
  let numExpression = expression.replaceAll("//", "");
  let numbers = numExpression.split(delimiters);

  // convert string to numbers
  numbers = numbers.map(num => parseInt(num) || 0);

  // filter negative numbers
  let negitiveNumbers = numbers.filter(num => num < 0);

  // check for negative numbers
  if (negitiveNumbers.length) {
    throw new Error("negative numbers not allowed < " + negitiveNumbers.join(",") + " >");
  }

  // ignore numbers bigger than 1000
  numbers = numbers.filter(num => num <= 1000);
  return numbers.reduce((acc, num) => acc + num, 0);
}

function fetchDelimiters(expression) {
  let delimiters = [",", "\\n"];
  // check for custom delimeters
  let customDelimiter = expression.match(/^\/\/\[(.+?)\]\n/);
  if (customDelimiter) {
    const allDelims = [...expression.matchAll(/\[(.+?)\]/g)];
    allDelims.forEach(d => delimiters.push(d[1]));
  } else if (expression.startsWith("//")) {
    delimiters.push(expression[2]);
  }
  return new RegExp("[" + delimiters.join("|") + "]");
}

export { add };
