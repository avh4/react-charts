/** @jsx React.DOM */

"use strict";

var React = require('react');
var numeral = require('numeral');

module.exports = React.createClass({
  render: function() {
    var chartWidth = 605;
    var textY = 20;
    var format = function(n) { return numeral(n).format('0.00')};
    var lines = [];
    var labels = [];
    [-10, -5, 0, 5, 10].map(function(t) {
      var p = this.props.coord(t, 0);
      var value = format(t);
      lines.push(<line y2="-420" x1={p.x} x2={p.x} key={value}></line>);
      labels.push(<text y={textY} dy=".71em" x={p.x} key={value}>{value}</text>);
    }, this);

    return <g className="chart-axis x" transform="translate(0,420)">
      <g className="lines">{lines}</g>
      <line className="axis" x2={chartWidth}/>
      {labels}
      <text text-anchor="middle" y="36" x={chartWidth/2}>X Value</text>
      <text dy=".71em" y={textY}>{format(this.props.min)}</text>
      <text x={chartWidth} dy=".71em" y={textY}>{format(this.props.max)}</text>
    </g>;
}});