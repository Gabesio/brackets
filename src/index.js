
module.exports = function check(str, bracketsConfig) {
  const open = ['(', '{', '[', '1', '3', '5'];
  const pairs = {
    [')']: '(',
    ['}']: '{',
    [']']: '[',
    ['2']: '1',
    ['4']: '3',
    ['6']: '5',
  }
  let result = [];

  for (let i = 0; i < str.length; i += 1) {
    let current = str[i];

    if (open.includes(current)) {
      result.push(current);
    } else if (current !== '|' && current !== '7' && current !== '8') {
      if (result.length === 0) {
        return false;
      }

      let top = result[result.length - 1];

      if (top === pairs[current]) {
        result.pop()
      } else {
        return false;
      }
    } else if (current === '|' && !result.includes('|')) {
      result.push(current);
    } else if (current === '|' && result[result.length - 1] === '|') {
      result.pop();
    } else if (current === '|') {
      result.push(current);
    } else if (current === '7' && !result.includes('7')) {
      result.push(current);
    } else if (current === '7' && result[result.length - 1] === '7') {
      result.pop();
    } else if (current === '7') {
      result.push(current);
    } else if (current === '8' && !result.includes('8')) {
      result.push(current);
    } else if (current === '8' && result[result.length - 1] === '8') {
      result.pop();
    } else if (current === '8') {
      result.push(current);
    }
  }
  return result.length === 0;
}
