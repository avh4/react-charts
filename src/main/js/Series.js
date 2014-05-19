/** @jsx React.DOM */

"use strict";

var React = require('react');

module.exports = React.createClass({
  render: function() {
    var data = this.props.data;
    var paths = data.map(function(d, i) {
      var p = this.props.coord(d.x, d.y);
      return <circle cx={p.x} cy={p.y} r={d.size * 15} key={i}/>
    }, this);
    return <g className={this.props.className}>{paths}</g>;
  }
});