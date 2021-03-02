module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === '(' || char === '[' || char === '{')
      stack.push(char);
      else {
        if (char === ')' && stack.pop() !== '('
            || char === ']' && stack.pop() !== '['
            || char === '}' && stack.pop() !== '{')
            return false;
      }
  }
  return stack.length === 0;
}