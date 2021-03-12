module.exports = function check(str, bracketsConfig) {
  var stack = [];
  var bracket = {};
  for (var j = 0; j < bracketsConfig.length; j++) {
    bracket[bracketsConfig[j][0]] = bracketsConfig[j][1];
  } 

  stack.push(str.charAt(0));
  
  for (var i = 1; i < str.length; i++) {
    if (str.charAt(i) === bracket[stack[stack.length - 1]]) {
      stack.pop();
    } else {
      stack.push(str.charAt(i)); 
    }
  }
  if (stack.length > 0) {return false;}
  return true;
}

