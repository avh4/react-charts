/** @jsx React.DOM */

"use strict";

var React = require('react');
var numeral = require('numeral');

module.exports = React.createClass({
  render: function() {
    var chartWidth = 605;
    var chartHeight = 420;
    var textX = -10;
    var dy = ".32em";
    var format = function(n) { return numeral(n).format('0.00')};
    var lines = [];
    var labels = [];
    [-10, -5, 0, 5, 10].map(function(t) {
      var p = this.props.coord(0, t);
      var value = format(t);
      lines.push(<line x2={chartWidth} y1={p.y} y2={p.y} key={value}></line>);
      labels.push(<text x={textX} dy={dy} y={p.y} key={value}>{value}</text>);
    }, this);

    return <g className="chart-axis y">
      <g className="lines">{lines}</g>
      <line className="axis" y2={chartHeight}/>
      {labels}
      <text transform="rotate(-90)" y="-63" x={-chartHeight/2}>Y Value</text>
      <text dy={dy} y={chartHeight} x={textX}>{format(this.props.min)}</text>
      <text x={textX} dy={dy} y="0">{format(this.props.max)}</text>
    </g>;
}});