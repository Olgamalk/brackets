module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    
    if (str[i] === '(' || str[i] === '[' || str[i] === '{')
      stack.push(str[i]);
      else {
        if (str[i] === ')' && stack.pop() !== '('
            || str[i] === ']' && stack.pop() !== '['
            || str[i] === '}' && stack.pop() !== '{')
            return false;
      }
  }
  return stack.length ? false : true;

}

