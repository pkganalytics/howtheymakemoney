import { useState } from "react";
import {values, colors}  from "/components/lineChartsData";
import LineChartsSvg from "/components/lineChartsSvg";
import LineChartsSidePanel from "/components/lineChartsSidePanel";
import Grid from '@mui/material/Grid';
import TimelineIcon from '@mui/icons-material/Timeline';
import { Typography } from '@mui/material';
import Layout from '../components/Layout';
import Image from 'next/image';
import womenImage from '../public/twowomenwhiteboard.jpg'


const LineCharts = () =>  {

	return (
<Layout title="Line Charts">
	<Grid container>
		<Grid item container md={8} sm={12}>
			<Grid>
	<div className="subHeading">
		<Grid container direction="row" alignItems="center">
  <Grid item>
	  <TimelineIcon color="primary" className="icons" />
  </Grid>
  <Grid item>
		<Typography variant="h2"> Line Charts </Typography>

  </Grid>
</Grid>
	</div>
	</Grid>
		<Grid item xs={12}>
	 <div className="graph" >
		  <LineChartsSvg values={values} colors={colors} />
	</div>
		</Grid>
	</Grid>
		<Grid item container md={4} sm={12} sx={{borderLeft: "2px green solid", paddingLeft: "2rem"}}>
			< LineChartsSidePanel />
			<Image
				src={womenImage}
				width="100vw"
				height="60vw"
				alt=""
				/>

		</Grid>
	</Grid>
		</Layout>
  );
}

export default LineCharts;
