import React, {Component} from 'react';



export default class Repay extends Component {

    constructor(props) {
        super();
        this.props = props;
       this.state={
           width:100
       }
    }
    getDefaultProps() {
        return {
            width: 600,
            height: 300,
            chartId: 'v1_chart'
        };
    }

    render() {
        var data = [
            {day: '02-11-2016', count: 180},
            {day: '02-12-2016', count: 250},
            {day: '02-13-2016', count: 150},
            {day: '02-14-2016', count: 496},
            {day: '02-15-2016', count: 140},
            {day: '02-16-2016', count: 380},
            {day: '02-17-2016', count: 100},
            {day: '02-18-2016', count: 150}
        ];

        var margin = {top: 5, right: 50, bottom: 20, left: 50},
            w = this.state.width - (margin.left + margin.right),
            h = this.props.height - (margin.top + margin.bottom);

        var parseDate = d3.time.format("%m-%d-%Y").parse;

        data.forEach(function (d) {
            d.date = parseDate(d.day);
        });

        var x = d3.time.scale()
            .domain(d3.extent(data, function (d) {
                return d.date;
            }))
            .rangeRound([0, w]);

        var y = d3.scale.linear()
            .domain([0, d3.max(data, function (d) {
                return d.count + 100;
            })])
            .range([h, 0]);

        var line = d3.svg.line()
            .x(function (d) {
                return x(d.date);
            })
            .y(function (d) {
                return y(d.count);
            }).interpolate('cardinal');


        var transform = 'translate(' + margin.left + ',' + margin.top + ')';

        return (
            <div>
                <svg id={this.props.chartId} width={this.state.width} height={this.props.height}>

                    <g transform={transform}>
                        <path className="line shadow" d={line(data)} strokeLinecap="round"/>
                    </g>
                </svg>
            </div>
        );
    }

}
