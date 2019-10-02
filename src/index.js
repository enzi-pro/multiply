module.exports = function multiply(first, second) {
  // your solution
  let temp1 = parseFloat(first)*parseFloat(second);
  let resultLength = 0;
  do {
    temp1 /= 10;
    resultLength++;
  } while (temp1 >= 1)
  let result = Array(resultLength).fill(0);
  for(let i = 0; i < second.length; i++) {
    for(let j = 0; j < first.length; j++) {
      result[result.length - i - j - 1] += first[first.length - j - 1] * second[second.length - i - 1];
      if (result[result.length - i - j - 1] >= 10) {
        result[result.length - i - j - 2] += Math.floor(result[result.length - i - j - 1] / 10);
        result[result.length - i - j - 1] %= 10;
      }
    }
  }
  return result.join('');
}
