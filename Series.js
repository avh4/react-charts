/** @jsx React.DOM */

"use strict";

var React = require('react');

var width = 600;
var height = 420;
var xRange = [-3.41, 2.47];
var yRange = [-2.47, 2.25];
var coord = function(x, y) {
  var xPercent = (x - xRange[0]) / (xRange[1]-xRange[0]);
  var yPercent = (y - yRange[0]) / (yRange[1]-yRange[0]);
  return {
    x: xPercent * width,
    y: yPercent * height
  };
}

module.exports = React.createClass({
  render: function() {
    var data = this.props.data;
    var paths = data.map(function(d) {
      var p = coord(d.x, d.y);
      return <circle cx={p.x} cy={p.y} r={d.size * 15}/>
    });
    return <g className={this.props.className}>{paths}</g>;
}});