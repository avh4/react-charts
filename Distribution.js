/** @jsx React.DOM */

"use strict";

var React = require('react');

module.exports = React.createClass({
  render: function() {
    var data = this.props.data;
    var paths = data.map(function(d, i) {
      var p = this.props.coord(d.x, d.y);
      return <line x1={p.x} x2={p.x} y1="0" y2="8" key={i}/>
    }, this);
    return <g className={this.props.className}>{paths}</g>;
}});