/** @jsx React.DOM */

"use strict";

var React = require('react');
var Chart = require('react-charts');

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
    d.name = d.name || groupName;
    d.x = d[xField];
    d.y = d[yField];
    d.size = d[sizeField];
    group.values.push(d);
    groups[groupName] = group;
  });
  return groupOrder.map(function(g) { return groups[g] });
}

var data = processData(require('./data.js'), 'career', 'age', 'netWorth2014', 'careerLength');

React.renderComponent(<Chart data={data}/>, document.getElementById('root'));
