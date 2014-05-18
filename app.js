/** @jsx React.DOM */

"use strict";

var React = require('react');
var XAxis = require('./XAxis.js');
var YAxis = require('./YAxis.js');
var Series = require('./Series.js');
var Distribution = require('./Distribution.js');
var randgen = require('randgen');

function randomData(groups, points) { //# groups,# points per group
  var data = [],
      shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
      random = randgen.rnorm;

  for (var i = 0; i < groups; i++) {
    data.push({
      key: 'Group ' + i,
      values: []
    });

    for (var j = 0; j < points; j++) {
      data[i].values.push({
        x: random()
      , y: random()
      , size: Math.random()   //Configure the size of each scatter point
      , shape: (Math.random() > 0.95) ? shapes[j % 6] : "circle"  //Configure the shape of each scatter point.
      });
    }
  }

  return data;
}

var App = React.createClass({
  render: function() {
    var data = randomData(4, 40);

    var width = 600;
    var height = 420;
    var xRange = [-3.41, 2.47];
    var yRange = [-2.47, 2.25];
    var coord = function(x, y) {
      var xPercent = (x - xRange[0]) / (xRange[1]-xRange[0]);
      var yPercent = (y - yRange[0]) / (yRange[1]-yRange[0]);
      return {
        x: xPercent * width,
        y: yPercent * height
      };
    }

    return <svg viewBox="0 0 500 500">
  <g className="nvd3 nv-wrap nv-scatterChart
    nv-chart-92514" transform="translate(75,30)">
    <g>
      <XAxis/>
      <YAxis/>
      <g>
        <Series className="chart-series s0" data={data[0].values} coord={coord}/>
        <Series className="chart-series s1" data={data[1].values} coord={coord}/>
        <Series className="chart-series s2" data={data[2].values} coord={coord}/>
        <Series className="chart-series s3" data={data[3].values} coord={coord}/>
      </g>
      <g className="nv-distWrap">
        <g transform="translate(0,420)">
          <Distribution className="s0" data={data[0].values} coord={coord}/>
          <Distribution className="s1" data={data[1].values} coord={coord}/>
          <Distribution className="s2" data={data[2].values} coord={coord}/>
          <Distribution className="s3" data={data[3].values} coord={coord}/>
        </g>
        <g className="nv-distributionY"
        transform="translate(-8,0)"><g className="nvd3 nv-distribution"
        transform="translate(0,0)"><g><g className="nv-dist nv-series-0"
        ><line y1="263.2279733232025"
        y2="263.2279733232025" className="nv-disty nv-disty-0" x1="0"
        x2="8"></line><line y1="61.70774750454149" y2="61.70774750454149"
        className="nv-disty nv-disty-1" x1="0" x2="8"></line><line
        y1="149.61810861490744" y2="149.61810861490744" className="nv-disty
        nv-disty-2" x1="0" x2="8"></line><line y1="234.9150062272011"
        y2="234.9150062272011" className="nv-disty nv-disty-3" x1="0"
        x2="8"></line><line y1="357.93591674904536"
        y2="357.93591674904536" className="nv-disty nv-disty-4" x1="0"
        x2="8"></line><line y1="196.0701258283152" y2="196.0701258283152"
        className="nv-disty nv-disty-5" x1="0" x2="8"></line><line
        y1="104.105479977519" y2="104.105479977519" className="nv-disty
        nv-disty-6" x1="0" x2="8"></line><line y1="57.58428614310736"
        y2="57.58428614310736" className="nv-disty nv-disty-7" x1="0"
        x2="8"></line><line y1="254.78841446184515"
        y2="254.78841446184515" className="nv-disty nv-disty-8" x1="0"
        x2="8"></line><line y1="161.8124640442802" y2="161.8124640442802"
        className="nv-disty nv-disty-9" x1="0" x2="8"></line><line
        y1="313.3540374431381" y2="313.3540374431381" className="nv-disty
        nv-disty-10" x1="0" x2="8"></line><line y1="229.8882633788765"
        y2="229.8882633788765" className="nv-disty nv-disty-11" x1="0"
        x2="8"></line><line y1="163.9727670801201" y2="163.9727670801201"
        className="nv-disty nv-disty-12" x1="0" x2="8"></line><line
        y1="205.32446438351843" y2="205.32446438351843" className="nv-disty
        nv-disty-13" x1="0" x2="8"></line><line y1="350.40927356516795"
        y2="350.40927356516795" className="nv-disty nv-disty-14" x1="0"
        x2="8"></line><line y1="305.57228292618566"
        y2="305.57228292618566" className="nv-disty nv-disty-15" x1="0"
        x2="8"></line><line y1="106.90379744741489"
        y2="106.90379744741489" className="nv-disty nv-disty-16" x1="0"
        x2="8"></line><line y1="358.8012178177374" y2="358.8012178177374"
        className="nv-disty nv-disty-17" x1="0" x2="8"></line><line
        y1="219.5657025282331" y2="219.5657025282331" className="nv-disty
        nv-disty-18" x1="0" x2="8"></line><line y1="294.9782170785157"
        y2="294.9782170785157" className="nv-disty nv-disty-19" x1="0"
        x2="8"></line><line y1="124.54250773574967"
        y2="124.54250773574967" className="nv-disty nv-disty-20" x1="0"
        x2="8"></line><line y1="276.1311518965837" y2="276.1311518965837"
        className="nv-disty nv-disty-21" x1="0" x2="8"></line><line
        y1="231.8517176186053" y2="231.8517176186053" className="nv-disty
        nv-disty-22" x1="0" x2="8"></line><line y1="239.05393373829983"
        y2="239.05393373829983" className="nv-disty nv-disty-23" x1="0"
        x2="8"></line><line y1="15.855432245251166"
        y2="15.855432245251166" className="nv-disty nv-disty-24" x1="0"
        x2="8"></line><line y1="204.1764724139208" y2="204.1764724139208"
        className="nv-disty nv-disty-25" x1="0" x2="8"></line><line
        y1="299.8794140726649" y2="299.8794140726649" className="nv-disty
        nv-disty-26" x1="0" x2="8"></line><line y1="289.40173700694146"
        y2="289.40173700694146" className="nv-disty nv-disty-27" x1="0"
        x2="8"></line><line y1="289.7694894948489" y2="289.7694894948489"
        className="nv-disty nv-disty-28" x1="0" x2="8"></line><line
        y1="222.65688543991345" y2="222.65688543991345" className="nv-disty
        nv-disty-29" x1="0" x2="8"></line><line y1="133.32403701416155"
        y2="133.32403701416155" className="nv-disty nv-disty-30" x1="0"
        x2="8"></line><line y1="209.82986612861765"
        y2="209.82986612861765" className="nv-disty nv-disty-31" x1="0"
        x2="8"></line><line y1="252.5602154975761" y2="252.5602154975761"
        className="nv-disty nv-disty-32" x1="0" x2="8"></line><line
        y1="168.2446303682962" y2="168.2446303682962" className="nv-disty
        nv-disty-33" x1="0" x2="8"></line><line y1="317.2236643558341"
        y2="317.2236643558341" className="nv-disty nv-disty-34" x1="0"
        x2="8"></line><line y1="166.2391969628958" y2="166.2391969628958"
        className="nv-disty nv-disty-35" x1="0" x2="8"></line><line
        y1="184.96993073838848" y2="184.96993073838848" className="nv-disty
        nv-disty-36" x1="0" x2="8"></line><line y1="157.86902613208838"
        y2="157.86902613208838" className="nv-disty nv-disty-37" x1="0"
        x2="8"></line><line y1="64.60436912186015" y2="64.60436912186015"
        className="nv-disty nv-disty-38" x1="0" x2="8"></line><line
        y1="78.1136106540597" y2="78.1136106540597" className="nv-disty
        nv-disty-39" x1="0" x2="8"></line></g><g className="nv-dist
        nv-series-1"><line
        y1="352.3069447451869" y2="352.3069447451869" className="nv-disty
        nv-disty-0" x1="0" x2="8"></line><line y1="149.0454591780914"
        y2="149.0454591780914" className="nv-disty nv-disty-1" x1="0"
        x2="8"></line><line y1="220.49874550105477"
        y2="220.49874550105477" className="nv-disty nv-disty-2" x1="0"
        x2="8"></line><line y1="237.44360478007437"
        y2="237.44360478007437" className="nv-disty nv-disty-3" x1="0"
        x2="8"></line><line y1="321.59407128972606"
        y2="321.59407128972606" className="nv-disty nv-disty-4" x1="0"
        x2="8"></line><line y1="323.4447713624628" y2="323.4447713624628"
        className="nv-disty nv-disty-5" x1="0" x2="8"></line><line
        y1="2.4627274997047266" y2="2.4627274997047266" className="nv-disty
        nv-disty-6" x1="0" x2="8"></line><line y1="266.207978242595"
        y2="266.207978242595" className="nv-disty nv-disty-7" x1="0"
        x2="8"></line><line y1="130.95788321159705"
        y2="130.95788321159705" className="nv-disty nv-disty-8" x1="0"
        x2="8"></line><line y1="218.02964811067912"
        y2="218.02964811067912" className="nv-disty nv-disty-9" x1="0"
        x2="8"></line><line y1="87.94938418573457" y2="87.94938418573457"
        className="nv-disty nv-disty-10" x1="0" x2="8"></line><line
        y1="221.46199592536632" y2="221.46199592536632" className="nv-disty
        nv-disty-11" x1="0" x2="8"></line><line y1="199.95078566452088"
        y2="199.95078566452088" className="nv-disty nv-disty-12" x1="0"
        x2="8"></line><line y1="209.23745023666632"
        y2="209.23745023666632" className="nv-disty nv-disty-13" x1="0"
        x2="8"></line><line y1="94.31925265674494" y2="94.31925265674494"
        className="nv-disty nv-disty-14" x1="0" x2="8"></line><line
        y1="392.61645901718106" y2="392.61645901718106" className="nv-disty
        nv-disty-15" x1="0" x2="8"></line><line y1="17.431080350719924"
        y2="17.431080350719924" className="nv-disty nv-disty-16" x1="0"
        x2="8"></line><line y1="248.74564189214587"
        y2="248.74564189214587" className="nv-disty nv-disty-17" x1="0"
        x2="8"></line><line y1="238.6779942381423" y2="238.6779942381423"
        className="nv-disty nv-disty-18" x1="0" x2="8"></line><line
        y1="340.47126706150937" y2="340.47126706150937" className="nv-disty
        nv-disty-19" x1="0" x2="8"></line><line y1="223.19475989214723"
        y2="223.19475989214723" className="nv-disty nv-disty-20" x1="0"
        x2="8"></line><line y1="199.68019372803644"
        y2="199.68019372803644" className="nv-disty nv-disty-21" x1="0"
        x2="8"></line><line y1="329.72422453477407"
        y2="329.72422453477407" className="nv-disty nv-disty-22" x1="0"
        x2="8"></line><line y1="67.29621593462196" y2="67.29621593462196"
        className="nv-disty nv-disty-23" x1="0" x2="8"></line><line
        y1="43.886832672360015" y2="43.886832672360015" className="nv-disty
        nv-disty-24" x1="0" x2="8"></line><line y1="71.32741633495306"
        y2="71.32741633495306" className="nv-disty nv-disty-25" x1="0"
        x2="8"></line><line y1="152.28021075045513"
        y2="152.28021075045513" className="nv-disty nv-disty-26" x1="0"
        x2="8"></line><line y1="231.39959473852727"
        y2="231.39959473852727" className="nv-disty nv-disty-27" x1="0"
        x2="8"></line><line y1="159.2123419291491" y2="159.2123419291491"
        className="nv-disty nv-disty-28" x1="0" x2="8"></line><line
        y1="337.17724600241246" y2="337.17724600241246" className="nv-disty
        nv-disty-29" x1="0" x2="8"></line><line y1="273.1027632053499"
        y2="273.1027632053499" className="nv-disty nv-disty-30" x1="0"
        x2="8"></line><line y1="220.50055706033572"
        y2="220.50055706033572" className="nv-disty nv-disty-31" x1="0"
        x2="8"></line><line y1="204.0331444351975" y2="204.0331444351975"
        className="nv-disty nv-disty-32" x1="0" x2="8"></line><line
        y1="157.17420295659332" y2="157.17420295659332" className="nv-disty
        nv-disty-33" x1="0" x2="8"></line><line y1="174.21255192309783"
        y2="174.21255192309783" className="nv-disty nv-disty-34" x1="0"
        x2="8"></line><line y1="205.54230165347013"
        y2="205.54230165347013" className="nv-disty nv-disty-35" x1="0"
        x2="8"></line><line y1="215.4836192023541" y2="215.4836192023541"
        className="nv-disty nv-disty-36" x1="0" x2="8"></line><line
        y1="257.89164338410984" y2="257.89164338410984" className="nv-disty
        nv-disty-37" x1="0" x2="8"></line><line y1="196.1525731918135"
        y2="196.1525731918135" className="nv-disty nv-disty-38" x1="0"
        x2="8"></line><line y1="143.384667066529" y2="143.384667066529"
        className="nv-disty nv-disty-39" x1="0" x2="8"></line></g><g
        className="nv-dist nv-series-2"><line y1="175.22872733577543" y2="175.22872733577543"
        className="nv-disty nv-disty-0" x1="0" x2="8"></line><line
        y1="282.62820360272315" y2="282.62820360272315" className="nv-disty
        nv-disty-1" x1="0" x2="8"></line><line y1="157.70541960300795"
        y2="157.70541960300795" className="nv-disty nv-disty-2" x1="0"
        x2="8"></line><line y1="156.78390135490753"
        y2="156.78390135490753" className="nv-disty nv-disty-3" x1="0"
        x2="8"></line><line y1="347.26118064667855"
        y2="347.26118064667855" className="nv-disty nv-disty-4" x1="0"
        x2="8"></line><line y1="112.88511537288701"
        y2="112.88511537288701" className="nv-disty nv-disty-5" x1="0"
        x2="8"></line><line y1="213.06351705478107"
        y2="213.06351705478107" className="nv-disty nv-disty-6" x1="0"
        x2="8"></line><line y1="244.78358028563753"
        y2="244.78358028563753" className="nv-disty nv-disty-7" x1="0"
        x2="8"></line><line y1="274.5418373619589" y2="274.5418373619589"
        className="nv-disty nv-disty-8" x1="0" x2="8"></line><line
        y1="268.3575999040074" y2="268.3575999040074" className="nv-disty
        nv-disty-9" x1="0" x2="8"></line><line y1="183.08685414253415"
        y2="183.08685414253415" className="nv-disty nv-disty-10" x1="0"
        x2="8"></line><line y1="282.4295228531793" y2="282.4295228531793"
        className="nv-disty nv-disty-11" x1="0" x2="8"></line><line
        y1="246.7664853637117" y2="246.7664853637117" className="nv-disty
        nv-disty-12" x1="0" x2="8"></line><line y1="420" y2="420"
        className="nv-disty nv-disty-13" x1="0" x2="8"></line><line
        y1="394.6631649185453" y2="394.6631649185453" className="nv-disty
        nv-disty-14" x1="0" x2="8"></line><line y1="362.4151232253247"
        y2="362.4151232253247" className="nv-disty nv-disty-15" x1="0"
        x2="8"></line><line y1="407.54438547301635"
        y2="407.54438547301635" className="nv-disty nv-disty-16" x1="0"
        x2="8"></line><line y1="221.09699196869073"
        y2="221.09699196869073" className="nv-disty nv-disty-17" x1="0"
        x2="8"></line><line y1="324.65897334250053"
        y2="324.65897334250053" className="nv-disty nv-disty-18" x1="0"
        x2="8"></line><line y1="108.10558129295492"
        y2="108.10558129295492" className="nv-disty nv-disty-19" x1="0"
        x2="8"></line><line y1="202.15314372864668"
        y2="202.15314372864668" className="nv-disty nv-disty-20" x1="0"
        x2="8"></line><line y1="209.6842793012751" y2="209.6842793012751"
        className="nv-disty nv-disty-21" x1="0" x2="8"></line><line
        y1="312.45891377817384" y2="312.45891377817384" className="nv-disty
        nv-disty-22" x1="0" x2="8"></line><line y1="97.96343815283285"
        y2="97.96343815283285" className="nv-disty nv-disty-23" x1="0"
        x2="8"></line><line y1="172.01320084605064"
        y2="172.01320084605064" className="nv-disty nv-disty-24" x1="0"
        x2="8"></line><line y1="171.38884566096309"
        y2="171.38884566096309" className="nv-disty nv-disty-25" x1="0"
        x2="8"></line><line y1="249.89492988053328"
        y2="249.89492988053328" className="nv-disty nv-disty-26" x1="0"
        x2="8"></line><line y1="293.36322092144167"
        y2="293.36322092144167" className="nv-disty nv-disty-27" x1="0"
        x2="8"></line><line y1="158.3510977027343" y2="158.3510977027343"
        className="nv-disty nv-disty-28" x1="0" x2="8"></line><line
        y1="330.41223708960894" y2="330.41223708960894" className="nv-disty
        nv-disty-29" x1="0" x2="8"></line><line y1="186.87675051608613"
        y2="186.87675051608613" className="nv-disty nv-disty-30" x1="0"
        x2="8"></line><line y1="274.2280991954463" y2="274.2280991954463"
        className="nv-disty nv-disty-31" x1="0" x2="8"></line><line
        y1="237.96122611918727" y2="237.96122611918727" className="nv-disty
        nv-disty-32" x1="0" x2="8"></line><line y1="103.84623016590109"
        y2="103.84623016590109" className="nv-disty nv-disty-33" x1="0"
        x2="8"></line><line y1="307.2370776225715" y2="307.2370776225715"
        className="nv-disty nv-disty-34" x1="0" x2="8"></line><line
        y1="230.2028364125791" y2="230.2028364125791" className="nv-disty
        nv-disty-35" x1="0" x2="8"></line><line y1="217.63473051686088"
        y2="217.63473051686088" className="nv-disty nv-disty-36" x1="0"
        x2="8"></line><line y1="165.6171337606259" y2="165.6171337606259"
        className="nv-disty nv-disty-37" x1="0" x2="8"></line><line
        y1="140.96296903913225" y2="140.96296903913225" className="nv-disty
        nv-disty-38" x1="0" x2="8"></line><line y1="112.8539188397454"
        y2="112.8539188397454" className="nv-disty nv-disty-39" x1="0"
        x2="8"></line></g><g className="nv-dist nv-series-3"><line y1="203.5512905428096"
        y2="203.5512905428096" className="nv-disty nv-disty-0" x1="0"
        x2="8"></line><line y1="268.31210114048497"
        y2="268.31210114048497" className="nv-disty nv-disty-1" x1="0"
        x2="8"></line><line y1="212.37905143070026"
        y2="212.37905143070026" className="nv-disty nv-disty-2" x1="0"
        x2="8"></line><line y1="25.497623506639457"
        y2="25.497623506639457" className="nv-disty nv-disty-3" x1="0"
        x2="8"></line><line y1="103.76700036603978"
        y2="103.76700036603978" className="nv-disty nv-disty-4" x1="0"
        x2="8"></line><line y1="263.7934480021062" y2="263.7934480021062"
        className="nv-disty nv-disty-5" x1="0" x2="8"></line><line
        y1="61.09600380005264" y2="61.09600380005264" className="nv-disty
        nv-disty-6" x1="0" x2="8"></line><line y1="287.7665345007873"
        y2="287.7665345007873" className="nv-disty nv-disty-7" x1="0"
        x2="8"></line><line y1="206.47010557935627"
        y2="206.47010557935627" className="nv-disty nv-disty-8" x1="0"
        x2="8"></line><line y1="0" y2="0" className="nv-disty nv-disty-9"
        x1="0" x2="8"></line><line y1="209.5404089822325"
        y2="209.5404089822325" className="nv-disty nv-disty-10" x1="0"
        x2="8"></line><line y1="162.3600531790679" y2="162.3600531790679"
        className="nv-disty nv-disty-11" x1="0" x2="8"></line><line
        y1="214.93084759122374" y2="214.93084759122374" className="nv-disty
        nv-disty-12" x1="0" x2="8"></line><line y1="170.72799558904245"
        y2="170.72799558904245" className="nv-disty nv-disty-13" x1="0"
        x2="8"></line><line y1="176.42248911426339"
        y2="176.42248911426339" className="nv-disty nv-disty-14" x1="0"
        x2="8"></line><line y1="123.275084835455" y2="123.275084835455"
        className="nv-disty nv-disty-15" x1="0" x2="8"></line><line
        y1="171.10087297211143" y2="171.10087297211143" className="nv-disty
        nv-disty-16" x1="0" x2="8"></line><line y1="114.36173686094787"
        y2="114.36173686094787" className="nv-disty nv-disty-17" x1="0"
        x2="8"></line><line y1="167.7824416631167" y2="167.7824416631167"
        className="nv-disty nv-disty-18" x1="0" x2="8"></line><line
        y1="136.39428563301738" y2="136.39428563301738" className="nv-disty
        nv-disty-19" x1="0" x2="8"></line><line y1="226.47159926338358"
        y2="226.47159926338358" className="nv-disty nv-disty-20" x1="0"
        x2="8"></line><line y1="293.3239936558384" y2="293.3239936558384"
        className="nv-disty nv-disty-21" x1="0" x2="8"></line><line
        y1="329.19081153245247" y2="329.19081153245247" className="nv-disty
        nv-disty-22" x1="0" x2="8"></line><line y1="261.93721401652886"
        y2="261.93721401652886" className="nv-disty nv-disty-23" x1="0"
        x2="8"></line><line y1="41.50103696197249" y2="41.50103696197249"
        className="nv-disty nv-disty-24" x1="0" x2="8"></line><line
        y1="68.23322759868427" y2="68.23322759868427" className="nv-disty
        nv-disty-25" x1="0" x2="8"></line><line y1="238.64888924348838"
        y2="238.64888924348838" className="nv-disty nv-disty-26" x1="0"
        x2="8"></line><line y1="205.54733502843746"
        y2="205.54733502843746" className="nv-disty nv-disty-27" x1="0"
        x2="8"></line><line y1="192.94936086185797"
        y2="192.94936086185797" className="nv-disty nv-disty-28" x1="0"
        x2="8"></line><line y1="241.95357614929685"
        y2="241.95357614929685" className="nv-disty nv-disty-29" x1="0"
        x2="8"></line><line y1="291.0424077214577" y2="291.0424077214577"
        className="nv-disty nv-disty-30" x1="0" x2="8"></line><line
        y1="149.53826649767888" y2="149.53826649767888" className="nv-disty
        nv-disty-31" x1="0" x2="8"></line><line y1="267.77777242833463"
        y2="267.77777242833463" className="nv-disty nv-disty-32" x1="0"
        x2="8"></line><line y1="218.72467336890026"
        y2="218.72467336890026" className="nv-disty nv-disty-33" x1="0"
        x2="8"></line><line y1="214.97930206182133"
        y2="214.97930206182133" className="nv-disty nv-disty-34" x1="0"
        x2="8"></line><line y1="200.04417350402227"
        y2="200.04417350402227" className="nv-disty nv-disty-35" x1="0"
        x2="8"></line><line y1="131.40167605027835"
        y2="131.40167605027835" className="nv-disty nv-disty-36" x1="0"
        x2="8"></line><line y1="109.41701991641133"
        y2="109.41701991641133" className="nv-disty nv-disty-37" x1="0"
        x2="8"></line><line y1="228.00614588928795"
        y2="228.00614588928795" className="nv-disty nv-disty-38" x1="0"
        x2="8"></line><line y1="270.25866869501954"
        y2="270.25866869501954" className="nv-disty nv-disty-39" x1="0"
        x2="8"></line></g></g></g></g></g><g className="nv-legendWrap"
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
  </g>
</svg>;
  }
})

React.renderComponent(<App/>, document.getElementById('root'));
