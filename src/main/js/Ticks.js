function niceNum(range, round) {
  var exponent;
  var fraction;
  var niceFraction;

  exponent = Math.floor(Math.log(range) / Math.log(10));
  fraction = range / Math.pow(10, exponent);

  if (round) {
    if (fraction < 1.5)
      niceFraction = 1;
    else if (fraction < 3)
      niceFraction = 2;
    else if (fraction < 7)
      niceFraction = 5;
    else
      niceFraction = 10;
  } else {
    if (fraction <= 1)
      niceFraction = 1;
    else if (fraction <= 2)
      niceFraction = 2;
    else if (fraction <= 5)
      niceFraction = 5;
    else
      niceFraction = 10;
  }

  return niceFraction * Math.pow(10, exponent);
}

function calcTicks(max, min) {
  var maxTicks = 10;
  var range = niceNum(max - min, false);
  var tickSpacing = niceNum(range / (maxTicks - 1), true);
  var niceMin = Math.floor(min / tickSpacing) * tickSpacing;
  var niceMax = Math.ceil(max / tickSpacing) * tickSpacing;
  var ticks = [];
  for (var i = niceMin; i < niceMax; i+= tickSpacing) {
    if (i < min + tickSpacing*0.2) continue;
    if (i > max - tickSpacing*0.2) continue;
    ticks.push(i);
  }
  return ticks;
}

exports.calculate = calcTicks;
