/** @jsx React.DOM */

"use strict";

var React = require('react');
var voronoi = require('d3-geom-voronoi').geom.voronoi();

module.exports = React.createClass({
  render: function() {
    var data = this.props.data;

    var flatData = [];
    var inputPoints = [];
    data.forEach(function(series) {
      series.values.forEach(function(d) {
        var p = this.props.normalize(d);
        inputPoints.push([p.x, p.y]);
        flatData.push(d);
      }, this);
    }, this);

    var clickTargets = voronoi(inputPoints);

    var cells = clickTargets.map(function(t, i) {
      var clickPath = "M" + t.map(function(pa) {
        return pa[0]+","+pa[1];
      }).join("L") + "Z";
      return <path className="click-target" d={clickPath} key={i} onMouseOver={this.props.onSelect.bind(null, flatData[i])}/>;
    }, this);

    return <g>{cells}</g>;
  }
});