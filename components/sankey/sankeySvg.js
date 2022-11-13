import React, { useReducer, useEffect, useRef, useState} from "react";
import {
  select,
  selectAll,
  json,
  rgb,
  scaleLinear,
  easeLinear,
  ascending
} from "d3";
import { sankey as d3Sankey, sankeyLinkHorizontal } from 'd3-sankey';
import { format as d3Format } from 'd3-format';
import useResizeObserver from "use-resize-observer/polyfilled";
import { transition } from 'd3-transition';
import { rollups, sum, min, max, extent, merge } from 'd3-array';
import { color } from 'd3-color';
import cloneDeep from 'lodash/cloneDeep';
import Box from '@mui/material/Box';

const setOffset = (graph) => {
graph.nodes[0].xoffset = -20;
graph.nodes[1].xoffset = -20;
graph.nodes[2].xoffset = -20;
graph.nodes[3].xoffset = -20;
graph.nodes[4].xoffset = 25;
graph.nodes[5].xoffset = 20;
graph.nodes[6].xoffset = 20;
graph.nodes[7].xoffset = 20;
graph.nodes[8].xoffset = 40;
graph.nodes[9].xoffset = 40;
graph.nodes[10].xoffset = 40;
graph.nodes[11].xoffset = 40;
graph.nodes[12].xoffset = 40;
graph.nodes[13].xoffset = 40;
graph.nodes[14].xoffset = 40;
graph.nodes[0].yoffset = 0;
graph.nodes[1].yoffset = 0;
graph.nodes[2].yoffset = 0;
graph.nodes[3].yoffset = 0;
graph.nodes[4].yoffset = -25;
graph.nodes[5].yoffset = -20;
graph.nodes[6].yoffset = -20;
graph.nodes[7].yoffset = -20;
graph.nodes[8].yoffset = 50;
graph.nodes[9].yoffset = 0;
graph.nodes[10].yoffset = 0;
graph.nodes[11].yoffset = 0;
graph.nodes[12].yoffset = 0;
graph.nodes[13].yoffset = 0;
graph.nodes[14].yoffset = 0;
graph.nodes[0].textAnchor = "end";
graph.nodes[1].textAnchor = "end";
graph.nodes[2].textAnchor = "end";
graph.nodes[3].textAnchor = "end";
graph.nodes[4].textAnchor = "middle";
graph.nodes[5].textAnchor = "middle";
graph.nodes[6].textAnchor = "middle";
graph.nodes[7].textAnchor = "middle";
graph.nodes[8].textAnchor = "middle";
graph.nodes[9].textAnchor = "start";
graph.nodes[10].textAnchor = "start";
graph.nodes[11].textAnchor = "start";
graph.nodes[12].textAnchor = "start";
graph.nodes[13].textAnchor = "start";
graph.nodes[14].textAnchor = "start";
graph.nodes[0].color = "grey";
graph.nodes[1].color = "grey";
graph.nodes[2].color = "grey";
graph.nodes[3].color = "grey";
graph.nodes[4].color = "grey";
graph.nodes[5].color = "green";
graph.nodes[6].color = "red";
graph.nodes[7].color = "green";
graph.nodes[8].color = "red";
graph.nodes[9].color = "green";
graph.nodes[10].color = "red";
graph.nodes[11].color = "green";
graph.nodes[12].color = "red";
graph.nodes[13].color = "red";
graph.nodes[14].color = "red";
};


const linkColors = (graph) => {
graph.links[0].color = "grey";
graph.links[1].color = "grey";
graph.links[2].color = "grey";
graph.links[3].color = "grey";
graph.links[4].color = "grey";
graph.links[5].color = "green";
graph.links[6].color = "red";
graph.links[7].color = "red";
graph.links[8].color = "green";
graph.links[9].color = "red";
graph.links[10].color = "red";
graph.links[11].color = "red";
graph.links[12].color = "red";
graph.links[13].color = "red";
}


function SankeySvg({colours, values, nodeFilter }) {
  const svgRef = useRef();
  const margin=100;
  const [previousState, setPreviousState ] = useState({...values});
  const  { ref, width, height } = useResizeObserver();

  useEffect(() => {
    const svg = select(svgRef.current)
			.attr("width", width)
			.attr("height", height);

// format variables
const formatNumber = d3Format(",.0f"),
    format = function(d) { return formatNumber(d); }


// Set the sankey diagram properties
const sankey = d3Sankey()
    .nodeWidth(26)
    .nodePadding(30)
    .size([width-100, height]);


// load the data
	  const graph = sankey(previousState);

// move "Cost of Goods Sold" so that it's vertically aligned with "Gross Profit"
graph.links[4].target.x0 = graph.links[5].target.x0;

// add link colours
linkColors(graph);

	  console.log('graph.links[4].color after adding colours =', graph.links[4].color )
	  console.log('graph after adding colours =', graph )
// // calculate total for each source node
// const sourceTotals = rollups(graph.links, v => sum (v, d => d.value), d => d.source);

// const targetTotals = rollups(graph.links, v => sum (v, d => d.value), d => d.target);
// const totals = sourceTotals.concat(targetTotals);
// 	  graph.nodes.forEach((element, index) => graph.nodes.total = totals[index][0])


// // Create array for colors in order to calculate extent
// const colorTotals = [];
// 	  graph.nodes.forEach((element, index) => colorTotals[index] = totals[index][0].value);
// const colorExtent = extent(colorTotals);

// const totalRed = scaleLinear()
// 				  .domain(colorExtent)
// 				  .range(colours[0])

// const totalBlue = scaleLinear()
// 				  .domain(colorExtent)
// 				  .range(colours[1])

// add in the links
const link = svg.append("g")
	  .selectAll(".link")
	  .data(graph.links)
      .enter()
	  .append("path")
      .attr("class", "link")
      .attr("d", sankeyLinkHorizontal())
	  .attr("stroke-width", d => d.width)
	  .style("stroke", d => d.color)

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

// Change x0 positions in graph.nodes
console.log('graph.nodes=', graph.nodes)

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
.attr("fill", d => 'red')
	  .attr("fill", d => d.color)
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
setOffset(graph);

  node.append("text")
	  .attr("x", d =>  d.x0 + d.xoffset)
	  // .attr("y", d => { return (((d.y1 + d.y0) / 2) + d.yoffset); })
		  .attr("y", d => { return (d.textAnchor == 'middle' ? d.y0 + d.yoffset :((d.y1 + d.y0) / 2)) ; })
      .attr("dy", "0.35em")
      .attr("text-anchor", "end")
      .text(function(d) { return d.name; })
    .filter(function(d) { return d.x0 < width / 2; })
		  .attr("text-anchor", d => d.textAnchor);
console.log('end of first half')

// Recalculate sankey layout ////////////////////////////////
	  	const graph2 = sankey(values)

// move "Cost of Goods Sold" so that it's vertically aligned with "Gross Profit"
graph2.links[4].target.x0 = graph2.links[5].target.x0;

// add link colours
linkColors(graph2);
//swap positions of "Cost of Goods Sold" and "Gross Profit"
//to do that, swap y0 values of links 4 and 5
// const link24y0 = graph.links[4].target.y0;
// graph2.links[4].target.y0 = graph2.links[5].target.y0;
// graph2.links[5].target.y0 = link24y0;

console.log('graph2 = ', graph2)



// // calculate total for each source node
// 	  const newSourceTotals = rollups(graph2.links, v => sum (v, d => d.value), d => d.source);
// 	  const newTargetTotals = rollups(graph2.links, v => sum (v, d => d.value), d => d.target);
// 	  const newTotals = newSourceTotals.concat(newTargetTotals);
// 	  graph2.nodes.forEach((element, index) => graph2.nodes.total = newTotals[index][0])

// // Create array for colors in order to calculate extent
// 	  const newColorTotals = [];
// 	  graph2.nodes.forEach((element, index) => newColorTotals[index] = newTotals[index][0].value);
// 	  const newColorExtent = extent(newColorTotals);

// const newTotalRed = scaleLinear()
// 				  .domain(newColorExtent)
// 				   // .range(["#200000", "#ff0000"])
// 				  .range(colours[0])

// const newTotalBlue = scaleLinear()
// 				  .domain(newColorExtent)
// 				  // .range(["#000020", "#0000ff"])
// 				  .range(colours[1])

// Select each element that needs to be changed and pass the new data values
console.log('Starting second half')


const link2 = svg.selectAll(".link")
		  .data(graph2.links)
      .transition()
      .duration(3000)
      .attr("d", sankeyLinkHorizontal())
	  .attr("stroke-width", d => d.width)
	  .attr("stroke", d => d.color)

	  // add in the nodes
const node2 = svg.selectAll(".node")
	  .data(graph2.nodes, d => d.name)
		  // .enter().append()
		  // .exit().remove()

const rect2 = svg.selectAll('.node rect')
	  .data(graph2.nodes, d => d.name)
	  .transition()
	  .duration(3000)
	  .attr("x", d => d.x0)
	  .attr("y", d => d.y0)
	  .attr("height", d  => {return d.y1 - d.y0;})
.attr("fill", d => 'red')
	  .attr("fill", d => d.color)

	  svg.selectAll('.node rect').exit().remove();

const title2 = svg.selectAll("title")

setOffset(graph2);

  node.selectAll("text")
	  .data(graph2.nodes, d => d.name)
	  .transition()
	  .duration(3000)
	  .attr("x", d => d.x0 + d.xoffset)
		  .attr("y", d => { return (d.textAnchor == 'middle' ? d.y0 + d.yoffset :((d.y1 + d.y0) / 2)) ; })
      .attr("dy", "0.35em")
	  .attr("text-anchor", d => d.textAnchor)
      .text(function(d) { return d.name; })
    // .filter(function(d) { return d.x0 < width / 2; })
    //   .attr("x", function(d) { return d.x1 + 6; })
	  // setPreviousState(values);
	  setPreviousState({...values});
console.log('end of second part')
	  return () => {
      svg.selectAll('*').remove();
	  console.log('Ran return')
    }
  }, [values, nodeFilter, colours, width, height]);

  return (
	  <Box ref={ref} sx={{ml: 15, mr: 3}}>
			  <svg ref={svgRef}>
	  </svg>
	  </Box>
  );
};

export default SankeySvg;
