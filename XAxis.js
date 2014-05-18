/** @jsx React.DOM */

"use strict";

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <g className="nv-x nv-axis" transform="translate(0,420)">
  <g className="nvd3 nv-wrap
    nv-axis">
    <g>
      <g className="tick major"
        transform="translate(42.156815108591196,0)">
        <line y2="-420" x2="0"></line>
        <text y="10" dy=".71em" x="0">-3.00</text>
      </g>
      <g className="tick major" transform="translate(144.98861418514778,0)">
        <line y2="-420" x2="0"></line>
        <text y="10" dy=".71em" x="0">-2.00</text>
      </g>
      <g className="tick major" transform="translate(247.82041326170435,0)">
        <line y2="-420" x2="0"></line>
        <text y="10" dy=".71em" x="0">-1.00</text>
      </g>
      <g
        className="tick major" transform="translate(350.6522123382609,0)"
        >
        <line y2="-420" x2="0"></line>
        <text y="10"
          dy=".71em" x="0">0.00</text>
      </g>
      <g
        className="tick major" transform="translate(453.48401141481753,0)"
        >
        <line y2="-420" x2="0"></line>
        <text y="10"
          dy=".71em" x="0">1.00</text>
      </g>
      <g
        className="tick major" transform="translate(556.3158104913741,0)"
        >
        <line y2="-420" x2="0"></line>
        <text y="10"
          dy=".71em" x="0">2.00</text>
      </g>
      <path className="domain"
        d="M0,0V0H605V0"></path>
      <text className="nv-axislabel"
        text-anchor="middle" y="36" x="302.5"></text>
    </g>
    <g
      className="nv-axisMaxMin" transform="translate(0,0)">
      <text dy=".71em"
        y="10" transform="rotate(0 0,0)">-3.41</text>
    </g>
    <g className="nv-axisMaxMin"
      transform="translate(605,0)">
      <text dy=".71em" y="10"
        transform="rotate(0 0,0)">2.47</text>
    </g>
  </g>
</g>;
}});