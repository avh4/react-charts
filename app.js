/** @jsx React.DOM */

"use strict";

var React = require('react');
var Chart = require('./Chart');
var randgen = require('randgen');

function randomData(groups, points) { //# groups,# points per group
  var data = [];
  var random = randgen.rnorm;

  for (var i = 0; i < groups; i++) {
    data.push({
      key: 'Group ' + i,
      values: []
    });

    for (var j = 0; j < points; j++) {
      data[i].values.push({
        x: random()*10
      , y: random()*10
      , size: Math.random()   //Configure the size of each scatter point
    });
    }
  }

  return data;
}

var data = randomData(4, 40);

React.renderComponent(<Chart data={data}/>, document.getElementById('root'));
