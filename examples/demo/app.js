/** @jsx React.DOM */

"use strict";

require("!style!css!./styles.css");

var React = require('react');
var Chart = require('react-charts');
var numeral = require('numeral');

function processData(input, groupField, xField, yField, sizeField) {
  var groups = {};
  var groupOrder = [];
  input.forEach(function(d) {
    var groupName = d[groupField];
    var group = groups[groupName];
    if (!group) {
      group = {name: groupName, values: []};
      groupOrder.push(groupName);
    }
    d.x = d[xField];
    d.y = d[yField];
    d.size = d[sizeField];
    group.values.push(d);
    groups[groupName] = group;
  });
  return groupOrder.map(function(g) { return groups[g] });
}

var data = processData(require('./data.js'), 'career', 'age', 'netWorth2014', 'careerLength');

var App = React.createClass({
  getInitialState: function() {
    return {detail: {}};
  },
  doSelect: function(d) {
    this.setState({detail: d});
  },
  render: function() {
    var d = this.state.detail;
    var config = { xAxis: { label: "Age", format: "0" }, yAxis: { label: "Net Worth", format: "$0,0", scale: "log" }};
    return <div className="root">
      <Chart data={data} onSelect={this.doSelect} config={config}/>
      <div className="tooltip">
        <h3><a href={d.bio}>{d.name}</a></h3>
        {d.career} ({d.knownFrom})<br/>
        Net Worth: <a href={d.netWorth}>{numeral(d.netWorth2014).format('$0,0')}</a><br/>
        Age: {d.age}<br/>
        Career Length: {d.careerLength} years<br/>
      </div>
    </div>;
  }
})

var elements = document.getElementsByClassName(ChartData[0]);
React.renderComponent(<App/>, elements[0]);
