import SankeySvg from "/components/sankey/sankeySvg";
import SankeySidePanel from "/components/sankey/sankeySidePanel";
import Grid from '@mui/material/Grid';
import MediationIcon from '@mui/icons-material/Mediation';
import { Typography } from '@mui/material';
import Layout from '../components/Layout';
import Image from 'next/image';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Sankey = () =>  {

	const colours = useSelector(state => state.colours);
	const nodeFilter = useSelector(state => state.nodeFilter);
	const _values = useSelector(state => state.year);
    const values = JSON.parse(JSON.stringify(_values));

	return (
<Layout title="Sankey Diagrams">
	<Grid container>
		<Grid item container md={8} sm={12}>
			<Grid>
	<div className="subHeading">
		<Grid container direction="row" alignItems="center" spacing={1}>
  <Grid item>
	  <MediationIcon color="primary" className="icons" />
  </Grid>
  <Grid item>
		<Typography variant="h4"> Sankey Diagrams </Typography>

  </Grid>
</Grid>
	</div>
	</Grid>
		<Grid item xs={12}>
	 <div className="graph" >
		  <SankeySvg colours={colours} values={values} nodeFilter={nodeFilter}/>
	</div>
		</Grid>
	</Grid>
		<Grid item container md={4} sm={12} sx={{borderLeft: "2px green solid", paddingLeft: "2rem"}}>
			< SankeySidePanel />

		</Grid>
	</Grid>
		</Layout>
  );
}

export default Sankey;
