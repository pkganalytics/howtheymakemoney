import React, { useEffect, useRef } from "react";
import {
  select,
  scaleBand,
  axisBottom,
  stack,
  max,
  scaleLinear,
  axisLeft,
  stackOrderAscending
} from "d3";
import useResizeObserver from "./useResizeObserver";
import { useSelector} from 'react-redux';
import { counterSlice } from './store';


function StackedBarChartsSvg({ values, colors }) {
	const keys = useSelector(state => state);
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();
    const stackGenerator = stack()
      .keys(keys)
      .order(stackOrderAscending);
    const layers = stackGenerator(values);
    const extent = [
      0,
      max(layers, layer => max(layer, d => d[1]))
    ];

    // scales
    const xScale = scaleBand()
      .domain(values.map(d => d.year))
      .range([0, width])
      .padding(0.25);

    const yScale = scaleLinear()
      .domain(extent)
      .range([height, 0]);

    const yHeightScale = scaleLinear()
      .domain(extent)
      .range([0, height]);

	  const barTopY = d => {yScale(d[0] + d[1])};
	  const barBaseY = d => height - yScale(d[1]);
	  const barHeight = d => yScale(d[1])
	  
	  const animateBars = (selection) => {
		selection.transition()
		  .duration(5000)
		  .attr('fake', console.log("yScale[d0]", barBaseY))
		  .attr("fake", () => console.log("height", height))
	  .attr("y", barBaseY)
      .attr("height", barHeight)
	 }

    // rendering
    svg
      .selectAll(".layer")
      .data(layers)
      .join("g")
      .attr("class", "layer")
      .attr("fill", layer => colors[layer.key])
		        .selectAll("rect")
      .data(layer => layer)
      .join("rect")
      .attr("x", d => xScale(d.data.year))
      .attr("width", xScale.bandwidth())
      .attr("y", height)
	  .attr("height", 0)
		  .call(animateBars)

    // axes
    const xAxis = axisBottom(xScale);
    svg
      .select(".x-axis")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis);

    const yAxis = axisLeft(yScale);
    svg.select(".y-axis").call(yAxis);
  }, [colors, dimensions, keys, values]);

  return (
      <div className="graph" ref={wrapperRef} >
        <svg ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
  );
}

export default StackedBarChartsSvg;
