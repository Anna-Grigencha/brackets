module.exports = function check(str, bracketsConfig) {
  // your solution
  const openBrackets = ["(", "{", "[", "|", "1", "3", "5", "7", "8"];
  const bracketsPair = {
    [")"]: "(",
    ["}"]: "{",
    ["]"]: "[",
    ["|"]: "|",
    ["2"]: "1",
    ["4"]: "3",
    ["6"]: "5",
    ["7"]: "7",
    ["8"]: "8",
  };

  //function inBracketsOk(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    if (openBrackets.includes(currentSymbol)) {
      //проверяем содержит ли множество открывающихся скобок текущий символ (открываее или закрывает)
      if (bracketsPair[currentSymbol] === currentSymbol) {
        if (stack.length !== 0 && stack[stack.length - 1] === currentSymbol) {
          stack.pop();
        } else {
          stack.push(currentSymbol);
        }
      } else {
        stack.push(currentSymbol);
      }
    } else {
      if (stack.length === 0) {
        return false;
      }
      if (bracketsPair[currentSymbol] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
