import { useState } from "react";
import {values, colors}  from "/components/sankeyData";
import SankeySvg from "/components/sankeySvg";
import SankeySidePanel from "/components/sankeySidePanel";
import Grid from '@mui/material/Grid';
import TimelineIcon from '@mui/icons-material/Timeline';
import { Typography } from '@mui/material';
import Layout from '../components/Layout';
import Image from 'next/image';
import womenImage from '../public/twowomenwhiteboard.jpg'


const Sankey = () =>  {

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
		  <SankeySvg values={values} colors={colors} />
	</div>
		</Grid>
	</Grid>
		<Grid item container md={4} sm={12} sx={{borderLeft: "2px green solid", paddingLeft: "2rem"}}>
			< SankeySidePanel />
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

export default Sankey;
