/** @jsx React.DOM */

"use strict";

var React = require('react');

module.exports = React.createClass({
  render: function() {
    var data = this.props.data;
    var paths = data.map(function(d, i) {
      var p = this.props.coord(d.x, d.y);
      return <line key={i}
        x1={this.props.x1 || p.x}
        x2={this.props.x2 || p.x}
        y1={this.props.y1 || p.y}
        y2={this.props.y2 || p.y} />
    }, this);
    return <g className={this.props.className}>{paths}</g>;
}});