/** @jsx React.DOM */

"use strict";

var React = require('react');
var XAxis = require('./XAxis');
var YAxis = require('./YAxis');
var Series = require('./Series');
var Distribution = require('./Distribution');
var Legend = require('./Legend');

function determineRange(data, prop) {
  var min = data[0].values[0][prop];
  var max = data[0].values[0][prop];
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].values.length; j++) {
      var v = data[i].values[j][prop];
      if (v < min) min = v;
      if (v > max) max = v;
    }
  }
  return [min, max];
}

function linearScale(v, range, scale) {
  var percent = (v - range[0]) / (range[1] - range[0]);
  return percent * scale;
}

function logScale(v, range, scale) {
  var lv = Math.log(v) / Math.log(10);
  var r1 = Math.log(range[1]) / Math.log(10);
  var r0 = Math.log(range[0]) / Math.log(10);
  var percent = (lv - r0) / (r1-r0);
  return percent * scale;
}

module.exports = React.createClass({
  render: function() {
    var data = this.props.data;

    var width = 600;
    var height = 420;
    var xRange = determineRange(data, 'x');
    var yRange = determineRange(data, 'y');
    var sizeRange = determineRange(data, 'size');

    function normalize(d) {
      return {
        x: linearScale(d.x, xRange, width),
        y: logScale(d.y, [yRange[1], yRange[0]], height),
        size: linearScale(d.size, sizeRange, 25)
      };
    }

    var legendHeight = 30;
    var yAxisWidth = 70;
    var xAxisHeight = 50;

    var series = [];
    var xDists = [];
    var yDists = [];
    data.forEach(function(d, i) {
      var cl = "s" + i;
      series.push(<Series className={"chart-series "+cl} data={d.values} normalize={normalize} key={cl}/>);
      xDists.push(<Distribution className={cl} y1="0" y2="8" data={d.values} normalize={normalize} key={cl}/>);
      yDists.push(<Distribution className={cl} x1="0" x2="8" data={d.values} normalize={normalize} key={cl}/>);
    });

    return <svg viewBox={(-yAxisWidth) + " 0 " + (width+yAxisWidth) + " " + (height+legendHeight+xAxisHeight)}>
      <g className="nvd3 nv-wrap nv-scatterChart" transform="translate(0,30)">
        <XAxis min={xRange[0]} max={xRange[1]} normalize={normalize} format="0"/>
        <YAxis min={yRange[0]} max={yRange[1]} normalize={normalize} format="$0,0"/>
        <g>{series}</g>
        <g transform="translate(0,420)">{xDists}</g>
        <g transform="translate(-8,0)">{yDists}</g>
        <Legend data={data}/>
      </g>
    </svg>;
  }
});