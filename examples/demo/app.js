/** @jsx React.DOM */

"use strict";

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
    return <div>
      <Chart data={data} onSelect={this.doSelect}/>
      <div>
        <h3><a href={d.bio}>{d.name}</a></h3>
        <dl>
        <dt>Net Worth</dt>
        <dd>{numeral(d.netWorth2014).format('$0,0')}</dd>
        <dt>Age</dt>
        <dd>{d.age}</dd>
        </dl>
      </div>
    </div>;
  }
})

React.renderComponent(<App/>, document.getElementById('root'));
