exports.calculate = function(max, min) {
  var base = 10;
  var next = Math.pow(base, Math.ceil(Math.log(min*1.2) / Math.log(base)));
  var ticks = [];
  while (next < max) {
    ticks.push(next);
    next *= base;
  }
  return ticks;
};
