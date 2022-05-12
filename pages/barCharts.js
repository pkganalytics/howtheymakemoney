import { useState } from "react";
import {values, allkeys, colors}  from "/components/barChartsData";
import BarChartsSvg from "/components/barChartsSvg";
import BarChartsSidePanel from "/components/barChartsSidePanel";
import Grid from '@mui/material/Grid';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Typography } from '@mui/material';
import Layout from '../components/Layout';
import Image from 'next/image';
import womenImage from '../public/twowomenwhiteboard.jpg'


const Index = () => <Layout title="Dynamic D3">
    <IndexText />
    <SidePanel />
</Layout>;


const BarCharts = () =>  {
	const [keys, setKeys] = useState(allkeys);
	const selectKeys = setKeys;

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
			<BarChartsSvg values={values} keys={keys} colors={colors} />
	</div>
		</Grid>
	</Grid>
		<Grid item container md={4} sm={12} sx={{borderLeft: "2px green solid", paddingLeft: "2rem"}}>
			< BarChartsSidePanel allKeys={allkeys} keys={keys} colors={colors} selectKeys={selectKeys}/>
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
