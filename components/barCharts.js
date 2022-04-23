import React, { useRef, useEffect, useState } from "react";
import { select, axisBottom, axisLeft, scaleLinear, scaleBand } from "d3";
import Link from 'next/link';
import BarChartIcon from '@mui/icons-material/BarChart';

const Barcharts = () => {

  const [data, setData] = useState([25, 30, 45, 60, 10, 65, 75]);
  const svgRef = useRef();

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleBand()
      .domain(data.map((value, index) => index))
      .range([0, 300])
      .padding(0.5);

    const yScale = scaleLinear()
      .domain([0, 150])
      .range([150, 0]);

    const colorScale = scaleLinear()
      .domain([75, 100, 150])
      .range(["green", "orange", "red"])
      .clamp(true);

    const xAxis = axisBottom(xScale).ticks(data.length);

    svg
      .select(".x-axis")
      .style("transform", "translateY(150px)")
      .call(xAxis);

    const yAxis = axisLeft(yScale);
    svg
      .select(".y-axis")
      .style("transform", "translateX(15px)")
      .call(yAxis);

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")

      .style("transform", "scale(1, -1)")
      .attr("x", (value, index) => xScale(index))
      .attr("y", -150)
      .attr("width", xScale.bandwidth())
      .transition()
      .attr("fill", colorScale)
      .attr("height", value => 150 - yScale(value));
  }, [data]);

	return (
		<div className="mainText">
		<h1><BarChartIcon fontSize="inherit" style={{position: 'relative', top: '3px'}} /> Bar Charts </h1>
		
			<p>Bar charts, line charts and pie charts. 	Aute ipsum in irure culpa laboris. Excepteur enim eiusmod ullamco labore irure. Aliquip mollit cillum voluptate et. </p>

      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
      <button onClick={() => setData(data.map(value => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter(value => value < 35))}>
        Filter data
      </button>
		</div>
	);
};

export default 	Barcharts;
