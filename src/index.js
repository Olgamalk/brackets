module.exports = function check(str, bracketsConfig) {
  let map = {
    ")": "(",
    "}": "{",
    "]": "["
  }
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
      stack.push (str[i]);
    } else if (stack[stack.length - 1] === map[str[i]]) {
      stack.pop();
    } else return false;
  }
  return stack.length ? false : true;
}


