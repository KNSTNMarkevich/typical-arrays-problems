
exports.min = function min (array) {
  return !array || array.length === 0 ? 0 : array.reduce((a, b) => a < b ? a : b);
}

exports.max = function max (array) {
  return !array || array.length === 0 ? 0 : array.reduce((a, b) => a > b ? a : b);
}

exports.avg = function avg (array) {
  return !array || array.length === 0 ? 0 : array.reduce((a, b) => (a + b)) / array.length;
}
