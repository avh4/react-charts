/** @jsx React.DOM */

"use strict";

var React = require('react');

module.exports = React.createClass({
  render: function() {
    var data = this.props.data;
    var marks = data.map(function(d, i) {
      var cl = "s" + i;
      var transform = "translate(" + (i*72) + ",5)";
      return <g transform={transform} key={cl}>
                <circle className={cl} r="5"></circle>
                <text dy=".32em" dx="8">{d.name}</text>
              </g>;
    });
    return <g className="chart-legend" transform="translate(20,-20)">{marks}</g>;
  }
});