import { useState } from "react";
import { values, colors }  from "/components/barcharts/barChartsData";
import BarChartsSvg from "/components/barcharts/barChartsSvg";
import BarChartsSidePanel from "/components//barcharts/barChartsSidePanel";
import Grid from '@mui/material/Grid';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Typography } from '@mui/material';
import Layout from '../components/Layout';
import Image from 'next/image';
import womenImage from '../public/twowomenwhiteboard.jpg'


const BarCharts = () =>  {
console.log('values=', values)
console.log('colors=', colors)
	return (
<Layout title="Bar Charts">
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
	 <div className="graph" >
		  <BarChartsSvg values={values} colors={colors} />
	</div>
		</Grid>
	</Grid>
		<Grid item container md={4} sm={12} sx={{borderLeft: "2px green solid", paddingLeft: "2rem"}}>
			< BarChartsSidePanel />
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

export default BarCharts;
