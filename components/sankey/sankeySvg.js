import React, { useEffect, useRef, useState} from "react";
import {
  select,
  selectAll,
  json,
  rgb,
  scaleLinear,
  easeLinear
} from "d3";
import { sankey as d3Sankey, sankeyLinkHorizontal } from 'd3-sankey';
import { format as d3Format } from 'd3-format';
import useResizeObserver from "./../useResizeObserver";
import { transition } from 'd3-transition';
import { rollups, sum, min, max, extent, merge } from 'd3-array';
import { color, hsl, lab } from 'd3-color';

function SankeySvg({ colors, values }) {

  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  const margin=10;
  const [previousState, setPreviousState ] = useState({...values});

  useEffect(() => {
    const { width, height} =
      dimensions || wrapperRef.current.getBoundingClientRect();
    const svg = select(svgRef.current)
			.attr("width", width)
			.attr("height", height)

// format variables
const formatNumber = d3Format(",.0f"),
    format = function(d) { return formatNumber(d); }


// Set the sankey diagram properties
const sankey = d3Sankey()
    .nodeWidth(36)
    .nodePadding(30)
    .size([width, height]);

	  const path = sankey.links();

// load the data
	  	const graph = sankey(previousState)

// calculate total for each source node
	  // var groupedValues = new Array[13, 8]
// console.log('groupedValues=', groupedValues)
	  const sourceTotals = rollups(values.links, v => sum (v, d => d.value), d => d.source);
	  const targetTotals = rollups(values.links, v => sum (v, d => d.value), d => d.target);

console.log('sourceTotals=', sourceTotals)
	  const totals = sourceTotals.concat(targetTotals);
console.log('totals=', totals)
	  graph.nodes.forEach((element, index) => graph.nodes.total = totals[index][0])

// Create array for colors
	  const colorTotals = [];
	  graph.nodes.forEach((element, index) => colorTotals[index] = totals[index][0].value);
	  console.log('colorTotals=', colorTotals)

	  const colorExtent = extent(colorTotals);
	  console.log('extent=', colorExtent)
const totalColor = scaleLinear()
				  .domain(colorExtent)
				  .range(["black", "red"])

// add in the links
  const link = svg.append("g")
	.selectAll(".link")
		  .data(graph.links)
      .enter()
	  .append("path")
      .attr("class", "link")
      .attr("d", sankeyLinkHorizontal())
	  .attr("stroke-width", d => d.width)

.on("mouseover", function(event, d) {
	div.transition()
        .duration(200)
		.ease(easeLinear)
		.style("font-weight", "bold")
        .style("opacity", 1);

	div.html(d.source.name + " → " + d.target.name + "\n" + format(d.value))
	     .style("left", (event.pageX) + "px")
        .style("top", (event.pageY - 28) + "px")
            })
        .on("mouseout", function(d) {		
            div.transition()
                .duration(500)
                .style("opacity", 0);
        });

// Define the div for the tooltip

const div = select("body")
			  .append("div")
			  .attr("class", "tooltip")
			  .style("opacity", 0);

// add in the nodes
  const node = svg.append("g").selectAll(".node")
				  .data(graph.nodes, d => d.name)
				  .enter().append("g")
				  .attr("class", "node");

// add the rectangles for the nodes
  node.append("rect")
	  .attr("x", d => d.x0)
	  .attr("y", d => d.y0)
	  .attr("height", d  => {return d.y1 - d.y0;})
      .attr("width", sankey.nodeWidth())
	  .attr("fill", d => totalColor(d.value))
	  // .attr("fill", d => rgb(d.value - 60, 0,0))
      .style("stroke", function(d) {
		  return rgb(d.color).darker(2); })

.on("mouseover", function(event, d) {
	div.transition()
        .duration(300)
		.ease(easeLinear)
		.style("font-weight", "bold")
        .style("opacity", .8);

	div.html("Total" + "</br>" + d.value)
	     .style("left", (event.pageX) + "px")
         .style("top", (event.pageY - 28) + "px")
            })
        .on("mouseout", function(d) {		
            div.transition()
                .duration(500)
				.ease(easeLinear)
                .style("opacity", 0);
        });
// add in the title for the nodes
  node.append("text")
		  .attr("x", d => d.x0 - 6)
      .attr("y", function(d) { return (d.y1 + d.y0) / 2; })
      .attr("dy", "0.35em")
      .attr("text-anchor", "end")
      .text(function(d) { return d.name; })
    .filter(function(d) { return d.x0 < width / 2; })
      .attr("x", function(d) { return d.x1 + 6; })
      .attr("text-anchor", "start");


// Recalculate sankey layout ////////////////////////////////

	  	const graph2 = sankey(values)

// Select each element that needs to be changed and pass the new data values

svg.selectAll(".link")
	  .data(graph2.links)
      .transition()
      .duration(3000)
      .attr("d", sankeyLinkHorizontal())
	  .attr("stroke-width", d => d.width);

	  // add in the nodes

  const node2 = svg.selectAll(".node")
	  .data(graph2.nodes, d => d.name)

const rect2 = svg.selectAll('.node rect')
	  .data(graph2.nodes, d => d.name)
	  .transition()
	  .duration(3000)
	  .attr("x", d => d.x0)
	  .attr("y", d => d.y0)
	  .attr("height", d  => {return d.y1 - d.y0;})

const title2 = svg.selectAll("title")
		  .exit()
		  .remove()

 node.selectAll("text")
	  .exit()
	  .remove()

const rect3 = svg.selectAll(".node rect")
	  .data(graph2.nodes, d => d.name)
		  // .append("title")
     // .text(function(d) {
		  // return d.name + "\n" + format(d.value); });

  node.selectAll("text")
	  .data(graph2.nodes, d => d.name)
	  .transition()
	  .duration(3000)
	  .attr("x", d => d.x0 - 6)
      .attr("y", function(d) { return (d.y1 + d.y0) / 2; })
      .attr("dy", "0.35em")
      .attr("text-anchor", "end")
      .text(function(d) { return d.name; })
    .filter(function(d) { return d.x0 < width / 2; })
      .attr("x", function(d) { return d.x1 + 6; })
      .attr("text-anchor", "start");
	  setPreviousState({...values});

	  return () => {
      svg.selectAll('*').remove()
    }
  }, [values, colors, dimensions]);

  return (
      <div className="graph" ref={wrapperRef} >
        <svg ref={svgRef}>
        </svg>
      </div>
  );
};

export default SankeySvg;
