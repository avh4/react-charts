/** @jsx React.DOM */

"use strict";

var React = require('react');
var XAxis = require('./XAxis.js');
var YAxis = require('./YAxis.js');
var Series = require('./Series.js');
var Distribution = require('./Distribution.js');

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

module.exports = React.createClass({
  render: function() {
    var data = this.props.data;

    var width = 600;
    var height = 420;
    var xRange = determineRange(data, 'x');
    var yRange = determineRange(data, 'y');
    var coord = function(x, y) {
      var xPercent = (x - xRange[0]) / (xRange[1]-xRange[0]);
      var yPercent = (y - yRange[1]) / (yRange[0]-yRange[1]);
      return {
        x: xPercent * width,
        y: yPercent * height
      };
    }

    return <svg viewBox="0 0 500 500">
      <g className="nvd3 nv-wrap nv-scatterChart" transform="translate(0,30)">
        <XAxis min={xRange[0]} max={xRange[1]} coord={coord}/>
        <YAxis min={yRange[0]} max={yRange[1]} coord={coord}/>
        <g>
          <Series className="chart-series s0" data={data[0].values} coord={coord}/>
          <Series className="chart-series s1" data={data[1].values} coord={coord}/>
          <Series className="chart-series s2" data={data[2].values} coord={coord}/>
          <Series className="chart-series s3" data={data[3].values} coord={coord}/>
        </g>
        <g transform="translate(0,420)">
          <Distribution className="s0" y1="0" y2="8" data={data[0].values} coord={coord}/>
          <Distribution className="s1" y1="0" y2="8" data={data[1].values} coord={coord}/>
          <Distribution className="s2" y1="0" y2="8" data={data[2].values} coord={coord}/>
          <Distribution className="s3" y1="0" y2="8" data={data[3].values} coord={coord}/>
        </g>
        <g transform="translate(-8,0)">
          <Distribution className="s0" x1="0" x2="8" data={data[0].values} coord={coord}/>
          <Distribution className="s1" x1="0" x2="8" data={data[1].values} coord={coord}/>
          <Distribution className="s2" x1="0" x2="8" data={data[2].values} coord={coord}/>
          <Distribution className="s3" x1="0" x2="8" data={data[3].values} coord={coord}/>
        </g>
        <g className="nv-legendWrap"
          transform="translate(0,-30)"><g className="nvd3 nv-legend"
          transform="translate(0,5)"><g transform="translate(317,5)"><g
          className="nv-series" transform="translate(0,5)"><circle
          className="nv-legend-symbol nv-series-0" r="5"></circle><text
          text-anchor="start" className="nv-legend-text" dy=".32em"
          dx="8">Group 0</text></g><g className="nv-series"
          transform="translate(72,5)"><circle className="nv-legend-symbol nv-series-1"
          r="5"></circle><text text-anchor="start"
          className="nv-legend-text" dy=".32em" dx="8">Group 1</text></g><g
          className="nv-series" transform="translate(144,5)"><circle
          className="nv-legend-symbol nv-series-2" r="5"></circle><text
          text-anchor="start" className="nv-legend-text" dy=".32em"
          dx="8">Group 2</text></g><g className="nv-series"
          transform="translate(216,5)"><circle className="nv-legend-symbol nv-series-3"
          r="5"></circle><text text-anchor="start"
          className="nv-legend-text" dy=".32em" dx="8">Group
        3</text></g></g></g></g><g
          className="nv-controlsWrap"></g>
      </g>
    </svg>;
  }
});