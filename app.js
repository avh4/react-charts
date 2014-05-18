/** @jsx React.DOM */

"use strict";

var React = require('react');
var XAxis = require('./XAxis.js');
var YAxis = require('./YAxis.js');
var Series = require('./Series.js');
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

    return <svg viewBox="0 0 500 500">
  <g className="nvd3 nv-wrap nv-scatterChart
    nv-chart-92514" transform="translate(75,30)">
    <g>
      <XAxis/>
      <YAxis/>
      <g>
        <Series className="chart-series s0" data={data[0].values}/>
        <Series className="chart-series s1" data={data[1].values}/>
        <Series className="chart-series s2" data={data[2].values}/>
        <Series className="chart-series s3" data={data[3].values}/>
      </g>
      <g className="nv-distWrap"><g
        className="nv-distributionX" transform="translate(0,420)"><g
        className="nvd3 nv-distribution" transform="translate(0,0)"><g><g
        className="nv-dist nv-series-0"><line x1="275.2909871033891" x2="275.2909871033891"
        className="nv-distx nv-distx-0" y1="0" y2="8"></line><line
        x1="372.36701373263725" x2="372.36701373263725" className="nv-distx
        nv-distx-1" y1="0" y2="8"></line><line x1="316.6771014686917"
        x2="316.6771014686917" className="nv-distx nv-distx-2" y1="0"
        y2="8"></line><line x1="380.92755307283073"
        x2="380.92755307283073" className="nv-distx nv-distx-3" y1="0"
        y2="8"></line><line x1="474.1798173204466" x2="474.1798173204466"
        className="nv-distx nv-distx-4" y1="0" y2="8"></line><line
        x1="481.4774490694153" x2="481.4774490694153" className="nv-distx
        nv-distx-5" y1="0" y2="8"></line><line x1="279.51740238259623"
        x2="279.51740238259623" className="nv-distx nv-distx-6" y1="0"
        y2="8"></line><line x1="437.84015186396226"
        x2="437.84015186396226" className="nv-distx nv-distx-7" y1="0"
        y2="8"></line><line x1="313.987741936589" x2="313.987741936589"
        className="nv-distx nv-distx-8" y1="0" y2="8"></line><line
        x1="222.210749091455" x2="222.210749091455" className="nv-distx
        nv-distx-9" y1="0" y2="8"></line><line x1="288.89832265673726"
        x2="288.89832265673726" className="nv-distx nv-distx-10" y1="0"
        y2="8"></line><line x1="431.56850070516595"
        x2="431.56850070516595" className="nv-distx nv-distx-11" y1="0"
        y2="8"></line><line x1="336.3252282883377" x2="336.3252282883377"
        className="nv-distx nv-distx-12" y1="0" y2="8"></line><line
        x1="89.13291696084659" x2="89.13291696084659" className="nv-distx
        nv-distx-13" y1="0" y2="8"></line><line x1="380.07699493333376"
        x2="380.07699493333376" className="nv-distx nv-distx-14" y1="0"
        y2="8"></line><line x1="479.896132469562" x2="479.896132469562"
        className="nv-distx nv-distx-15" y1="0" y2="8"></line><line
        x1="255.26529241865478" x2="255.26529241865478" className="nv-distx
        nv-distx-16" y1="0" y2="8"></line><line x1="479.0026851287934"
        x2="479.0026851287934" className="nv-distx nv-distx-17" y1="0"
        y2="8"></line><line x1="327.5731900248613" x2="327.5731900248613"
        className="nv-distx nv-distx-18" y1="0" y2="8"></line><line
        x1="372.94462012984025" x2="372.94462012984025" className="nv-distx
        nv-distx-19" y1="0" y2="8"></line><line x1="313.1082374069842"
        x2="313.1082374069842" className="nv-distx nv-distx-20" y1="0"
        y2="8"></line><line x1="530.1205255667019" x2="530.1205255667019"
        className="nv-distx nv-distx-21" y1="0" y2="8"></line><line
        x1="272.0485999431578" x2="272.0485999431578" className="nv-distx
        nv-distx-22" y1="0" y2="8"></line><line x1="273.6468571852312"
        x2="273.6468571852312" className="nv-distx nv-distx-23" y1="0"
        y2="8"></line><line x1="202.46781402282906"
        x2="202.46781402282906" className="nv-distx nv-distx-24" y1="0"
        y2="8"></line><line x1="541.6326824169518" x2="541.6326824169518"
        className="nv-distx nv-distx-25" y1="0" y2="8"></line><line
        x1="185.82676116792535" x2="185.82676116792535" className="nv-distx
        nv-distx-26" y1="0" y2="8"></line><line x1="290.6859385163431"
        x2="290.6859385163431" className="nv-distx nv-distx-27" y1="0"
        y2="8"></line><line x1="382.9884473249633" x2="382.9884473249633"
        className="nv-distx nv-distx-28" y1="0" y2="8"></line><line
        x1="490.1467804180806" x2="490.1467804180806" className="nv-distx
        nv-distx-29" y1="0" y2="8"></line><line x1="219.1392515975986"
        x2="219.1392515975986" className="nv-distx nv-distx-30" y1="0"
        y2="8"></line><line x1="89.23649410338706" x2="89.23649410338706"
        className="nv-distx nv-distx-31" y1="0" y2="8"></line><line
        x1="346.43580928217426" x2="346.43580928217426" className="nv-distx
        nv-distx-32" y1="0" y2="8"></line><line x1="525.2409181212219"
        x2="525.2409181212219" className="nv-distx nv-distx-33" y1="0"
        y2="8"></line><line x1="326.4624507793765" x2="326.4624507793765"
        className="nv-distx nv-distx-34" y1="0" y2="8"></line><line
        x1="305.86796053542423" x2="305.86796053542423" className="nv-distx
        nv-distx-35" y1="0" y2="8"></line><line x1="337.6680163000256"
        x2="337.6680163000256" className="nv-distx nv-distx-36" y1="0"
        y2="8"></line><line x1="219.71175492009388"
        x2="219.71175492009388" className="nv-distx nv-distx-37" y1="0"
        y2="8"></line><line x1="358.6865930189408" x2="358.6865930189408"
        className="nv-distx nv-distx-38" y1="0" y2="8"></line><line
        x1="458.64695014726306" x2="458.64695014726306" className="nv-distx
        nv-distx-39" y1="0" y2="8"></line></g><g className="nv-dist
        nv-series-1"><line
        x1="368.2379023282138" x2="368.2379023282138" className="nv-distx
        nv-distx-0" y1="0" y2="8"></line><line x1="335.7615275443283"
        x2="335.7615275443283" className="nv-distx nv-distx-1" y1="0"
        y2="8"></line><line x1="404.71749247538116"
        x2="404.71749247538116" className="nv-distx nv-distx-2" y1="0"
        y2="8"></line><line x1="254.32303418576575"
        x2="254.32303418576575" className="nv-distx nv-distx-3" y1="0"
        y2="8"></line><line x1="332.5163520033127" x2="332.5163520033127"
        className="nv-distx nv-distx-4" y1="0" y2="8"></line><line
        x1="401.52642292745753" x2="401.52642292745753" className="nv-distx
        nv-distx-5" y1="0" y2="8"></line><line x1="321.23148601119124"
        x2="321.23148601119124" className="nv-distx nv-distx-6" y1="0"
        y2="8"></line><line x1="528.4921518453963" x2="528.4921518453963"
        className="nv-distx nv-distx-7" y1="0" y2="8"></line><line
        x1="297.9454336254715" x2="297.9454336254715" className="nv-distx
        nv-distx-8" y1="0" y2="8"></line><line x1="488.7566488691299"
        x2="488.7566488691299" className="nv-distx nv-distx-9" y1="0"
        y2="8"></line><line x1="323.69776137053344"
        x2="323.69776137053344" className="nv-distx nv-distx-10" y1="0"
        y2="8"></line><line x1="444.962728945637" x2="444.962728945637"
        className="nv-distx nv-distx-11" y1="0" y2="8"></line><line
        x1="256.2390780201933" x2="256.2390780201933" className="nv-distx
        nv-distx-12" y1="0" y2="8"></line><line x1="432.6940518028992"
        x2="432.6940518028992" className="nv-distx nv-distx-13" y1="0"
        y2="8"></line><line x1="367.2147418028852" x2="367.2147418028852"
        className="nv-distx nv-distx-14" y1="0" y2="8"></line><line
        x1="213.88740929262522" x2="213.88740929262522" className="nv-distx
        nv-distx-15" y1="0" y2="8"></line><line x1="293.2025162027925"
        x2="293.2025162027925" className="nv-distx nv-distx-16" y1="0"
        y2="8"></line><line x1="315.5976367616069" x2="315.5976367616069"
        className="nv-distx nv-distx-17" y1="0" y2="8"></line><line
        x1="401.4061169603758" x2="401.4061169603758" className="nv-distx
        nv-distx-18" y1="0" y2="8"></line><line x1="451.38650468612474"
        x2="451.38650468612474" className="nv-distx nv-distx-19" y1="0"
        y2="8"></line><line x1="207.32785437083464"
        x2="207.32785437083464" className="nv-distx nv-distx-20" y1="0"
        y2="8"></line><line x1="300.6777666479807" x2="300.6777666479807"
        className="nv-distx nv-distx-21" y1="0" y2="8"></line><line
        x1="363.8926231735989" x2="363.8926231735989" className="nv-distx
        nv-distx-22" y1="0" y2="8"></line><line x1="210.11911110127548"
        x2="210.11911110127548" className="nv-distx nv-distx-23" y1="0"
        y2="8"></line><line x1="220.56376278185354"
        x2="220.56376278185354" className="nv-distx nv-distx-24" y1="0"
        y2="8"></line><line x1="297.22540406183396"
        x2="297.22540406183396" className="nv-distx nv-distx-25" y1="0"
        y2="8"></line><line x1="403.93948090615294"
        x2="403.93948090615294" className="nv-distx nv-distx-26" y1="0"
        y2="8"></line><line x1="123.72351257496283"
        x2="123.72351257496283" className="nv-distx nv-distx-27" y1="0"
        y2="8"></line><line x1="272.57733016213757"
        x2="272.57733016213757" className="nv-distx nv-distx-28" y1="0"
        y2="8"></line><line x1="239.1099856400836" x2="239.1099856400836"
        className="nv-distx nv-distx-29" y1="0" y2="8"></line><line
        x1="391.77851923408065" x2="391.77851923408065" className="nv-distx
        nv-distx-30" y1="0" y2="8"></line><line x1="326.5002341596781"
        x2="326.5002341596781" className="nv-distx nv-distx-31" y1="0"
        y2="8"></line><line x1="475.8264002362012" x2="475.8264002362012"
        className="nv-distx nv-distx-32" y1="0" y2="8"></line><line
        x1="206.42602827832778" x2="206.42602827832778" className="nv-distx
        nv-distx-33" y1="0" y2="8"></line><line x1="391.6978847486339"
        x2="391.6978847486339" className="nv-distx nv-distx-34" y1="0"
        y2="8"></line><line x1="378.56730412715484"
        x2="378.56730412715484" className="nv-distx nv-distx-35" y1="0"
        y2="8"></line><line x1="338.74547984780384"
        x2="338.74547984780384" className="nv-distx nv-distx-36" y1="0"
        y2="8"></line><line x1="463.0705957095134" x2="463.0705957095134"
        className="nv-distx nv-distx-37" y1="0" y2="8"></line><line
        x1="420.8998635616938" x2="420.8998635616938" className="nv-distx
        nv-distx-38" y1="0" y2="8"></line><line x1="330.3286848872308"
        x2="330.3286848872308" className="nv-distx nv-distx-39" y1="0"
        y2="8"></line></g><g className="nv-dist nv-series-2"><line x1="376.73991723132264"
        x2="376.73991723132264" className="nv-distx nv-distx-0" y1="0"
        y2="8"></line><line x1="153.92217487950842"
        x2="153.92217487950842" className="nv-distx nv-distx-1" y1="0"
        y2="8"></line><line x1="222.03954716723848"
        x2="222.03954716723848" className="nv-distx nv-distx-2" y1="0"
        y2="8"></line><line x1="259.4222379745567" x2="259.4222379745567"
        className="nv-distx nv-distx-3" y1="0" y2="8"></line><line
        x1="232.2601611270528" x2="232.2601611270528" className="nv-distx
        nv-distx-4" y1="0" y2="8"></line><line x1="285.49579650695097"
        x2="285.49579650695097" className="nv-distx nv-distx-5" y1="0"
        y2="8"></line><line x1="364.2056122948713" x2="364.2056122948713"
        className="nv-distx nv-distx-6" y1="0" y2="8"></line><line
        x1="271.68942581717226" x2="271.68942581717226" className="nv-distx
        nv-distx-7" y1="0" y2="8"></line><line x1="301.52088131277355"
        x2="301.52088131277355" className="nv-distx nv-distx-8" y1="0"
        y2="8"></line><line x1="221.75583454668896"
        x2="221.75583454668896" className="nv-distx nv-distx-9" y1="0"
        y2="8"></line><line x1="324.4496789242541" x2="324.4496789242541"
        className="nv-distx nv-distx-10" y1="0" y2="8"></line><line
        x1="204.8600110239871" x2="204.8600110239871" className="nv-distx
        nv-distx-11" y1="0" y2="8"></line><line x1="432.51680243498095"
        x2="432.51680243498095" className="nv-distx nv-distx-12" y1="0"
        y2="8"></line><line x1="473.8145274531139" x2="473.8145274531139"
        className="nv-distx nv-distx-13" y1="0" y2="8"></line><line
        x1="321.1719457576268" x2="321.1719457576268" className="nv-distx
        nv-distx-14" y1="0" y2="8"></line><line x1="579.9846106405773"
        x2="579.9846106405773" className="nv-distx nv-distx-15" y1="0"
        y2="8"></line><line x1="455.89453358405024"
        x2="455.89453358405024" className="nv-distx nv-distx-16" y1="0"
        y2="8"></line><line x1="288.5695318470826" x2="288.5695318470826"
        className="nv-distx nv-distx-17" y1="0" y2="8"></line><line
        x1="179.70945560936258" x2="179.70945560936258" className="nv-distx
        nv-distx-18" y1="0" y2="8"></line><line x1="348.1483578564602"
        x2="348.1483578564602" className="nv-distx nv-distx-19" y1="0"
        y2="8"></line><line x1="439.3592750886079" x2="439.3592750886079"
        className="nv-distx nv-distx-20" y1="0" y2="8"></line><line
        x1="348.13029031467715" x2="348.13029031467715" className="nv-distx
        nv-distx-21" y1="0" y2="8"></line><line x1="301.734755370814"
        x2="301.734755370814" className="nv-distx nv-distx-22" y1="0"
        y2="8"></line><line x1="303.471165222357" x2="303.471165222357"
        className="nv-distx nv-distx-23" y1="0" y2="8"></line><line
        x1="253.83497607274907" x2="253.83497607274907" className="nv-distx
        nv-distx-24" y1="0" y2="8"></line><line x1="369.0053223026992"
        x2="369.0053223026992" className="nv-distx nv-distx-25" y1="0"
        y2="8"></line><line x1="0" x2="0" className="nv-distx nv-distx-26"
        y1="0" y2="8"></line><line x1="461.96600808328697"
        x2="461.96600808328697" className="nv-distx nv-distx-27" y1="0"
        y2="8"></line><line x1="414.54519182908035"
        x2="414.54519182908035" className="nv-distx nv-distx-28" y1="0"
        y2="8"></line><line x1="460.4273526993964" x2="460.4273526993964"
        className="nv-distx nv-distx-29" y1="0" y2="8"></line><line
        x1="144.83879957152828" x2="144.83879957152828" className="nv-distx
        nv-distx-30" y1="0" y2="8"></line><line x1="276.9198711347906"
        x2="276.9198711347906" className="nv-distx nv-distx-31" y1="0"
        y2="8"></line><line x1="323.87661305625454"
        x2="323.87661305625454" className="nv-distx nv-distx-32" y1="0"
        y2="8"></line><line x1="450.3984075825709" x2="450.3984075825709"
        className="nv-distx nv-distx-33" y1="0" y2="8"></line><line
        x1="466.7552384393923" x2="466.7552384393923" className="nv-distx
        nv-distx-34" y1="0" y2="8"></line><line x1="152.87059825842624"
        x2="152.87059825842624" className="nv-distx nv-distx-35" y1="0"
        y2="8"></line><line x1="495.652060877385" x2="495.652060877385"
        className="nv-distx nv-distx-36" y1="0" y2="8"></line><line
        x1="370.5007729597003" x2="370.5007729597003" className="nv-distx
        nv-distx-37" y1="0" y2="8"></line><line x1="217.00454697160083"
        x2="217.00454697160083" className="nv-distx nv-distx-38" y1="0"
        y2="8"></line><line x1="221.35138199016723"
        x2="221.35138199016723" className="nv-distx nv-distx-39" y1="0"
        y2="8"></line></g><g className="nv-dist nv-series-3" ><line x1="411.8377449035061"
        x2="411.8377449035061" className="nv-distx nv-distx-0" y1="0"
        y2="8"></line><line x1="500.1312311521421" x2="500.1312311521421"
        className="nv-distx nv-distx-1" y1="0" y2="8"></line><line
        x1="233.85994325301075" x2="233.85994325301075" className="nv-distx
        nv-distx-2" y1="0" y2="8"></line><line x1="269.8230791262755"
        x2="269.8230791262755" className="nv-distx nv-distx-3" y1="0"
        y2="8"></line><line x1="429.92822001913095"
        x2="429.92822001913095" className="nv-distx nv-distx-4" y1="0"
        y2="8"></line><line x1="529.7807702733206" x2="529.7807702733206"
        className="nv-distx nv-distx-5" y1="0" y2="8"></line><line
        x1="123.27728434967742" x2="123.27728434967742" className="nv-distx
        nv-distx-6" y1="0" y2="8"></line><line x1="391.29688585047535"
        x2="391.29688585047535" className="nv-distx nv-distx-7" y1="0"
        y2="8"></line><line x1="395.2656443844196" x2="395.2656443844196"
        className="nv-distx nv-distx-8" y1="0" y2="8"></line><line
        x1="483.788306030585" x2="483.788306030585" className="nv-distx
        nv-distx-9" y1="0" y2="8"></line><line x1="307.0720180705538"
        x2="307.0720180705538" className="nv-distx nv-distx-10" y1="0"
        y2="8"></line><line x1="440.8993405552144" x2="440.8993405552144"
        className="nv-distx nv-distx-11" y1="0" y2="8"></line><line
        x1="252.81869754147263" x2="252.81869754147263" className="nv-distx
        nv-distx-12" y1="0" y2="8"></line><line x1="416.75138621514634"
        x2="416.75138621514634" className="nv-distx nv-distx-13" y1="0"
        y2="8"></line><line x1="307.7852179159155" x2="307.7852179159155"
        className="nv-distx nv-distx-14" y1="0" y2="8"></line><line x1="605"
        x2="605" className="nv-distx nv-distx-15" y1="0" y2="8"></line><line
        x1="488.02701711084865" x2="488.02701711084865" className="nv-distx
        nv-distx-16" y1="0" y2="8"></line><line x1="392.776627431126"
        x2="392.776627431126" className="nv-distx nv-distx-17" y1="0"
        y2="8"></line><line x1="318.1727055079372" x2="318.1727055079372"
        className="nv-distx nv-distx-18" y1="0" y2="8"></line><line
        x1="327.10090047613454" x2="327.10090047613454" className="nv-distx
        nv-distx-19" y1="0" y2="8"></line><line x1="207.76121366526718"
        x2="207.76121366526718" className="nv-distx nv-distx-20" y1="0"
        y2="8"></line><line x1="455.6038511319529" x2="455.6038511319529"
        className="nv-distx nv-distx-21" y1="0" y2="8"></line><line
        x1="397.3834500680173" x2="397.3834500680173" className="nv-distx
        nv-distx-22" y1="0" y2="8"></line><line x1="377.26875075817554"
        x2="377.26875075817554" className="nv-distx nv-distx-23" y1="0"
        y2="8"></line><line x1="448.7032970834546" x2="448.7032970834546"
        className="nv-distx nv-distx-24" y1="0" y2="8"></line><line
        x1="408.2176644037933" x2="408.2176644037933" className="nv-distx
        nv-distx-25" y1="0" y2="8"></line><line x1="411.71202024895524"
        x2="411.71202024895524" className="nv-distx nv-distx-26" y1="0"
        y2="8"></line><line x1="231.59261422639005"
        x2="231.59261422639005" className="nv-distx nv-distx-27" y1="0"
        y2="8"></line><line x1="401.67100315846795"
        x2="401.67100315846795" className="nv-distx nv-distx-28" y1="0"
        y2="8"></line><line x1="272.3127734881427" x2="272.3127734881427"
        className="nv-distx nv-distx-29" y1="0" y2="8"></line><line
        x1="234.06195697434583" x2="234.06195697434583" className="nv-distx
        nv-distx-30" y1="0" y2="8"></line><line x1="437.21013575499023"
        x2="437.21013575499023" className="nv-distx nv-distx-31" y1="0"
        y2="8"></line><line x1="270.04297093995615"
        x2="270.04297093995615" className="nv-distx nv-distx-32" y1="0"
        y2="8"></line><line x1="295.70122837688285"
        x2="295.70122837688285" className="nv-distx nv-distx-33" y1="0"
        y2="8"></line><line x1="221.24264752413563"
        x2="221.24264752413563" className="nv-distx nv-distx-34" y1="0"
        y2="8"></line><line x1="311.81658249365614"
        x2="311.81658249365614" className="nv-distx nv-distx-35" y1="0"
        y2="8"></line><line x1="316.70531541154594"
        x2="316.70531541154594" className="nv-distx nv-distx-36" y1="0"
        y2="8"></line><line x1="372.5452553485507" x2="372.5452553485507"
        className="nv-distx nv-distx-37" y1="0" y2="8"></line><line
        x1="404.72358633742004" x2="404.72358633742004" className="nv-distx
        nv-distx-38" y1="0" y2="8"></line><line x1="255.9550481272808"
        x2="255.9550481272808" className="nv-distx nv-distx-39" y1="0"
        y2="8"></line></g></g></g></g><g className="nv-distributionY"
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
