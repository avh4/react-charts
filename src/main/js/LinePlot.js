/** @jsx React.DOM */

"use strict";

var React = require('react');

module.exports = React.createClass({
  render: function() {
    var data = this.props.data;
    var last = undefined;
    var paths = data.map(function(d, i) {
      var p = this.props.normalize(d);
      var ret;
      if (last) {
        ret = <line x1={last.x} y1={last.y} x2={p.x} y2={p.y}/>;        
      }
      last = p;
      return ret;
    }, this);
    return <g className={this.props.className}>{paths}</g>;
  }
});