import IntermediateSidePanel from '../components/intermediate/intermediateSidePanel';
import SankeySvg from "../components/sankey/sankeySvg";
import { intermediateData } from'../components/intermediate/intermediateData';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import remove from 'lodash/remove';
import cloneDeep from 'lodash/cloneDeep';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import AddRoadIcon from '@mui/icons-material/AddRoad';

const Intermediate = () =>  {

	const colours = useSelector(state => state.colours);
	const nodeFilter = useSelector(state => state.nodeFilter);
console.log('intermediateData=', intermediateData)
	return (
<Layout title="Sankey Diagrams">
	<Grid container>
		<Grid item container md={8} sm={12}>
			<Grid>
	<div className="subHeading">
		<Grid container direction="row" alignItems="center" spacing={1}>
  <Grid item>
	  <AddRoadIcon color="primary" className="icons" />
  </Grid>
  <Grid item>
		<Typography variant="h4"> Intermediate Nodes </Typography>

  </Grid>
</Grid>
	</div>
	</Grid>
		<Grid item xs={12}>
	 <div className="graph" >
		  <SankeySvg colours={colours} values={intermediateData} nodeFilter={nodeFilter}/>
	</div>
		</Grid>
	</Grid>
		<Grid item container md={4} sm={12} sx={{borderLeft: "2px green solid", paddingLeft: "2rem"}}>
			< IntermediateSidePanel />

		</Grid>
	</Grid>
		</Layout>
  );
}

export default Intermediate;
