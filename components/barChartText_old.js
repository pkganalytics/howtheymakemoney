import React, { useRef, useEffect, useState } from "react";
import { select, axisBottom, axisLeft, axisRight, scaleLinear, scaleBand } from "d3";
import Link from 'next/link';
import BarChartIcon from '@mui/icons-material/BarChart';
import SidePanel from './sidePanel';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const useResizeObserver = (ref) => {
  const [dimensions, setDimensions] = useState(null);
  useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setDimensions(entry.contentRect);
      });
    });
    resizeObserver.observe(observeTarget);
    return () => {
      resizeObserver.unobserve(observeTarget);
    };
  }, [ref]);
  return dimensions;
};

function BarChartText() {
const [data, setData] = useState([25, 30, 45, 60, 10, 65, 75] );
const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    if (!dimensions) return;

    // scales
    const xScale = scaleBand()
      .domain(data.map((value, index) => index))
      .range([0, dimensions.width])
      .padding(0.5);

    const yScale = scaleLinear()
      .domain([0, 150])
      .range([dimensions.height, 0]);

    const colorScale = scaleLinear()
      .domain([75, 100, 150])
      .range(["green", "orange", "red"])
      .clamp(true);

    // create x-axis
    const xAxis = axisBottom(xScale).ticks(data.length);
    svg
      .select(".x-axis")
      .style("transform", `translateY(${dimensions.height}px)`)
	  .style("font", "16px times")
      .call(xAxis);

    // create y-axis
    const yAxis = axisLeft(yScale);
    svg
      .select(".y-axis")
	  .style("font", "16px times")
      .call(yAxis);

    // draw the bars
    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .style("transform", "scale(1, -1)")
      .attr("x", (value, index) => xScale(index))
      .attr("y", -dimensions.height)
      .attr("width", xScale.bandwidth())
      .on("mouseenter", function (event, value) {
        // events have changed in d3 v6:
        // https://observablehq.com/@d3/d3v6-migration-guide#events
        const index = svg.selectAll(".bar").nodes().indexOf(this);
        svg
          .selectAll(".tooltip")
          .data([value])
          .join((enter) => enter.append("text").attr("y", yScale(value) - 4))
          .attr("class", "tooltip")
          .text(value)
          .attr("x", xScale(index) + xScale.bandwidth() / 2)
          .attr("text-anchor", "middle")
          .transition()
          .attr("y", yScale(value) - 8)
          .attr("opacity", 1);
      })
      .on("mouseleave", () => svg.select(".tooltip").remove())
      .transition()
      .attr("fill", colorScale)
      .attr("height", (value) => dimensions.height - yScale(value));
  }, [data, dimensions]);

	return (
<div className="mainText">
	<Grid container>
		<Grid item container md={8} sm={12}>
			<Grid>
	<div className="subHeading">
		<Grid container direction="row" alignItems="center">
  <Grid item>
	  <BarChartIcon color="primary" className="icons" />
  </Grid>
  <Grid item>
		<Typography variant="h2"> Bar Charts </Typography>

  </Grid>
</Grid>
	</div>
	</Grid>
		<Grid item xs={12}>
	<div className="graph" ref={wrapperRef}>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
	</div>
		</Grid>
	</Grid>
		<Grid item container md={4} sm={12}>
	<Grid item xs={12}>
	<div className="buttons">
      <button className="controlButton" onClick={() => setData(data.map(value => value + 5))}>
        Update data
      </button>
      <button className="controlButton" onClick={() => setData(data.filter(value => value < 35))}>
        Filter data
      </button>
	</div>
	</Grid>
	<Grid item xs={12}>
	<SidePanel />
	</Grid>
		</Grid>
	</Grid>
</div>
	);
};

export default 	BarChartText;
