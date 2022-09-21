import React, { useReducer, useEffect, useRef, useState} from "react";
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
import useResizeObserver from "use-resize-observer/polyfilled";
import { transition } from 'd3-transition';
import { rollups, sum, min, max, extent, merge } from 'd3-array';
import { color } from 'd3-color';
import cloneDeep from 'lodash/cloneDeep';

function SankeySvg({colours, values, nodeFilter }) {
console.log('values=', values)
	console.log('Beginning of functional component')
	console.log('nodeFilter =', nodeFilter)
  const svgRef = useRef();
  const margin=10;
  const [previousState, setPreviousState ] = useState({...values});
  const  { ref, width, height } = useResizeObserver();

  useEffect(() => {
	  console.log('Beginning of useEffect hook')
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

// const path = sankey.links();

// load the data
	  const graph = sankey(previousState);
console.log('graph =', graph)
// calculate total for each source node
const sourceTotals = rollups(graph.links, v => sum (v, d => d.value), d => d.source);

console.log('sourceTotals =', sourceTotals);
const targetTotals = rollups(graph.links, v => sum (v, d => d.value), d => d.target);
console.log('targetTotals =', targetTotals);
const totals = sourceTotals.concat(targetTotals);
console.log('totals =', totals);
	  graph.nodes.forEach((element, index) => graph.nodes.total = totals[index][0])


// Create array for colors in order to calculate extent
const colorTotals = [];
	  graph.nodes.forEach((element, index) => colorTotals[index] = totals[index][0].value);
const colorExtent = extent(colorTotals);

const totalRed = scaleLinear()
				  .domain(colorExtent)
				  .range(colours[0])

const totalBlue = scaleLinear()
				  .domain(colorExtent)
				  .range(colours[1])

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
		  // .join("g")
				  .enter().append("g")
				  .attr("class", "node");

// add the rectangles for the nodes
  node.append("rect")
	  .attr("x", d => d.x0)
	  .attr("y", d => d.y0)
	  .attr("height", d  => {return d.y1 - d.y0;})
      .attr("width", sankey.nodeWidth())
		  .attr("fill", d => { return d.index < 7 ? totalRed(d.value): totalBlue(d.value)})
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
         .style("top", (event.pageY - 28) + "px");
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
console.log('end of first half')

// Recalculate sankey layout ////////////////////////////////
	  	const graph2 = sankey(values)

console.log('graph2 = ', graph2)
// calculate total for each source node
	  const newSourceTotals = rollups(graph2.links, v => sum (v, d => d.value), d => d.source);
	  const newTargetTotals = rollups(graph2.links, v => sum (v, d => d.value), d => d.target);
	  const newTotals = newSourceTotals.concat(newTargetTotals);
	  graph2.nodes.forEach((element, index) => graph2.nodes.total = newTotals[index][0])

// Create array for colors in order to calculate extent
	  const newColorTotals = [];
	  graph2.nodes.forEach((element, index) => newColorTotals[index] = newTotals[index][0].value);
	  const newColorExtent = extent(newColorTotals);

const newTotalRed = scaleLinear()
				  .domain(newColorExtent)
				   // .range(["#200000", "#ff0000"])
				  .range(colours[0])

const newTotalBlue = scaleLinear()
				  .domain(newColorExtent)
				  // .range(["#000020", "#0000ff"])
				  .range(colours[1])

// Select each element that needs to be changed and pass the new data values
console.log('Starting second half')


const link2 = svg.selectAll(".link")
		  .data(graph2.links)
      .transition()
      .duration(3000)
      .attr("d", sankeyLinkHorizontal())
	  .attr("stroke-width", d => d.width)
		.style("stroke", d => { return newTotalRed(d.source.value) });


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
		  .attr("fill", d => { return d.index < 7 ? newTotalRed(d.value): newTotalBlue(d.value)})

	  svg.selectAll('.node rect').exit().remove();

const title2 = svg.selectAll("title")

 node.selectAll("text")


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
	  // setPreviousState(values);
	  setPreviousState({...values});
console.log('end of second part')
	  return () => {
      svg.selectAll('*').remove();
	  console.log('Ran return')
    }
  }, [values, nodeFilter, colours, width, height]);

  return (
      <div className="graph" ref={ref} >
        <svg ref={svgRef}>
        </svg>
      </div>
  );
};

export default SankeySvg;
