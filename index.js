/**
 * Get the smallest number on an array of numbers
 * @param {Array} n array of numbers
 */
function getMin(n) {
  const array = Array.from(n);
  let min;

//////
  for (let i = 0; i < array.length; i++) {
    if (min === undefined || array[i] < min) {
        min = array[i]
    } else if (!array[i] < min) {
        return 'array props are the same ' + array
    }
  }
///////
  return min;
}

console.log(getMin([50, 50, 50, 50]));