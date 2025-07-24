/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const tCopy = removeAsh(t);
    const sCopy = removeAsh(s);
    return tCopy === sCopy
};


const removeAsh = (val) => {
  let stack = [];
  for (let char of val) {
    if (char === '#') {
      stack.pop()
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
};
