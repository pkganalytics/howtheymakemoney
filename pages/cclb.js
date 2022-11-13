import WrkSlider from '../components/wrk/wrkSlider';
import CclbSidePanel from '../components/cclb/cclbSidePanel';
import SankeySvg from "../components/sankey/sankeySvg";
import Grid from '@mui/material/Grid';
import MediationIcon from '@mui/icons-material/Mediation';
import { Typography } from '@mui/material';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import remove from 'lodash/remove';
import cloneDeep from 'lodash/cloneDeep';



const Sankey = () =>  {
	const _quarter = useSelector(state => state.quarter);
const quarter = cloneDeep(_quarter);

	return (
<Layout title="Sankey Diagrams">
	<Grid container>
		<Grid item container md={8} sm={12}>
			<Grid>
	<div className="subHeading">
		<Grid container direction="row" alignItems="center" spacing={1}>
  <Grid item>
		<Typography variant="h3"> CCL Industries Inc. (CCL.B) </Typography>

  </Grid>
</Grid>
	</div>
	</Grid>
			<Grid item xs={12} md={12} sx={{mt: 3, ml: 1}}>
	 <div className="graph" >
		  <SankeySvg quarter={quarter}/>
		 	< WrkSlider />
	</div>
		</Grid>
	</Grid>
		<Grid item container md={4} sm={12} sx={{borderLeft: "2px green solid", paddingLeft: "2rem"}}>
		 	< CclbSidePanel />

		</Grid>
	</Grid>
		</Layout>
  );
}

export default Sankey;
