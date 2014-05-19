/** @jsx React.DOM */

"use strict";

var React = require('react');
var numeral = require('numeral');

module.exports = React.createClass({
  render: function() {
    var textY = 20;
    var format = function(n) { return numeral(n).format('0.00')};
    var ticks = [-10, -5, 0, 5, 10].map(function(t) {
      var p = this.props.coord(t, 0);
      return <g className="tick major">
        <line y2="-420" x1={p.x} x2={p.x}></line>
        <text y={textY} dy=".71em" x={p.x}>{format(t)}</text>
      </g>
    }, this);

    return <g className="nv-x nv-axis" transform="translate(0,420)">
  <g className="nvd3 nv-wrap nv-axis">
    {ticks}
    <path className="domain"
      d="M0,0V0H605V0"></path>
    <text className="nv-axislabel"
      text-anchor="middle" y="36" x="302.5">X Value</text>
    <g className="nv-axisMaxMin">
      <text dy=".71em" y={textY}>{format(this.props.min)}</text>
    </g>
    <g className="nv-axisMaxMin"
      transform="translate(605,0)">
      <text dy=".71em" y={textY}>{format(this.props.max)}</text>
    </g>
  </g>
</g>;
}});