module.exports = function check(str, bracketsConfig) {
  // Массив открывающих элементов
  let openBrackets = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
  };

  // Массив пар ключ-элемент
  let keysBrackets = {};
  for (let i = 0; i < bracketsConfig.length; i++) {
    let first = bracketsConfig[i][1];
    let second = bracketsConfig[i][0];
    keysBrackets[first] = second;
  }

console.log(str)
console.log(bracketsConfig)
console.log(openBrackets)
console.log(keysBrackets)

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let symbol = str[i];
    let lastElement = stack[stack.length - 1]; // Последний элемент в stack

    // Проверяет является ли символ открывающим в паре, если символы в паре НЕ РАВНЫ друг другу, добавляет его в stack
    if (openBrackets.includes(symbol) && symbol !== keysBrackets[symbol]) {
      stack.push(symbol); // Первый символ из пары отправляется в stack
    // Проверяет является ли символ открывающим в паре, если символы в паре РАВНЫ друг другу, добавляет его в stack
    } else if (symbol == keysBrackets[symbol] && keysBrackets[symbol] !== lastElement) {
      stack.push(symbol);
    // Если символ является закрывающим в паре, то...
    } else {
      if (stack.length === 0) {
        console.log('false1')
        return false // Если это закрывающая символ без пары - возвращает false
      };


      // Находит пару для открывающих символов в stack. Возвращает false, если такой пары нет
      if (symbol == keysBrackets[symbol] && keysBrackets[symbol] == lastElement) {
        stack.pop();
      } else if ( keysBrackets[symbol] == lastElement) {
        stack.pop(); // Удаляет элемент из stack, если для него нашлась пара
      } else {
        console.log('false2')
        return false;
      }
    };
  };

  console.log('false3')
  // Если в stack не осталось символов - true, если остались - false
  return stack.length == 0;
}