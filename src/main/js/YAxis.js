/** @jsx React.DOM */

"use strict";

var React = require('react');
var numeral = require('numeral');

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

module.exports = React.createClass({
  render: function() {
    var isX = false;
    var chartWidth = 605;
    var chartHeight = 420;
    var textY = isX ? 20 : undefined;
    var textX = isX ? undefined : -10;
    var dy = isX ? ".71em" : ".32em";
    var format = function(n) { return numeral(n).format(this.props.format || '0,0.00')}.bind(this);
    var lines = [];
    var labels = [];
    calcTicks(this.props.max, this.props.min).map(function(t) {
      var p = this.props.normalize({x: t, y: t, size: 0});
      var value = format(t);
      if (isX) {
        lines.push(<line y2={-chartHeight} x1={p.x} x2={p.x} key={value}></line>);
      } else {
        lines.push(<line x2={chartWidth} y1={p.y} y2={p.y} key={value}></line>);
      }
      labels.push(<text x={textX || p.x} dy={dy} y={textY || p.y} key={value}>{value}</text>);
    }, this);

    return <g className="chart-axis y">
      <g className="lines">{lines}</g>
      <line className="axis" y2={chartHeight}/>
      {labels}
      <text transform="rotate(-90)" y="-63" x={-chartHeight/2}>Y Value</text>
      <text dy={dy} y={chartHeight} x={textX}>{format(this.props.min)}</text>
      <text x={textX || chartWidth} dy={dy} y={textY || 0}>{format(this.props.max)}</text>
    </g>;
}});