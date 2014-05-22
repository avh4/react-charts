/** @jsx React.DOM */

"use strict";

var React = require('react');

module.exports = React.createClass({
  render: function() {
    var data = this.props.data;
    var paths = data.map(function(d, i) {
      var p = this.props.normalize(d);
      return <g onMouseOver={this.props.onSelect.bind(null, d)}>
        <circle cx={p.x} cy={p.y} r={p.size} key={i}/>
        <text className="label-backing" x={p.x} y={p.y} dy="0.3em">{d.name}</text>
        <text x={p.x} y={p.y} dy="0.3em">{d.name}</text>
      </g>;
    }, this);
    return <g className={this.props.className}>{paths}</g>;
  }
});