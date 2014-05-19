/** @jsx React.DOM */

"use strict";

var React = require('react');
var numeral = require('numeral');

module.exports = React.createClass({
  render: function() {
    var isX = true;
    var chartWidth = 605;
    var chartHeight = 420;
    var textY = isX ? 20 : undefined;
    var textX = isX ? undefined : -10;
    var dy = isX ? ".71em" : ".32em";
    var format = function(n) { return numeral(n).format('0.00')};
    var lines = [];
    var labels = [];
    [-10, -5, 0, 5, 10].map(function(t) {
      var p = this.props.coord(t, t);
      var value = format(t);
      if (isX) {
        lines.push(<line y2={-chartHeight} x1={p.x} x2={p.x} key={value}></line>);
      } else {
        lines.push(<line x2={chartWidth} y1={p.y} y2={p.y} key={value}></line>);
      }
      labels.push(<text x={textX || p.x} dy={dy} y={textY || p.y} key={value}>{value}</text>);
    }, this);

    return <g className="chart-axis x" transform="translate(0,420)">
      <g className="lines">{lines}</g>
      <line className="axis" x2={chartWidth}/>
      {labels}
      <text text-anchor="middle" y="36" x={chartWidth/2}>X Value</text>
      <text dy={dy} y={textY}>{format(this.props.min)}</text>
      <text x={textX || chartWidth} dy={dy} y={textY || 0}>{format(this.props.max)}</text>
    </g>;
}});