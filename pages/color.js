import ColorSidePanel from '../components/color/colorSidePanel';
import SankeySvg from "../components/sankey/sankeySvg";
import Grid from '@mui/material/Grid';
import MediationIcon from '@mui/icons-material/Mediation';
import { Typography } from '@mui/material';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import remove from 'lodash/remove';
import cloneDeep from 'lodash/cloneDeep';
import ColorLensIcon from '@mui/icons-material/ColorLens';


const Color = () =>  {

	const colours = useSelector(state => state.colours);
	const nodeFilter = useSelector(state => state.nodeFilter);
	const _values = useSelector(state => state.year);

	var tobeFiltered = cloneDeep(_values);

// Remove nodes > nodeFilter
	tobeFiltered.nodes.splice(nodeFilter, 7 - nodeFilter);
	const nodesWithNodesRemoved = cloneDeep(tobeFiltered.nodes);

// Remove links which reference nodes > nodeFilter
	const linksWithRefNodesRemoved = cloneDeep(remove(tobeFiltered.links, item => item.source < (nodeFilter)));

// Reduce values of target nodes
	const linksWithReducedTargets = cloneDeep(linksWithRefNodesRemoved);

	for (let i = 0; i < linksWithReducedTargets.length; i++) {
	if (linksWithReducedTargets[i].target >= nodeFilter)
		{linksWithReducedTargets[i].target = linksWithReducedTargets[i].target - (_values.nodes.length - nodesWithNodesRemoved.length);}
	}

	const filtered = {}
	filtered.nodes = nodesWithNodesRemoved;
	filtered.links = linksWithReducedTargets;
	const values = cloneDeep(filtered);

	return (
<Layout title="Sankey Diagrams">
	<Grid container>
		<Grid item container md={8} sm={12}>
			<Grid>
	<div className="subHeading">
		<Grid container direction="row" alignItems="center" spacing={1}>
  <Grid item>
	  <ColorLensIcon color="primary" className="icons" />
  </Grid>
  <Grid item>
		<Typography variant="h4"> Using Color to Convey Meaning </Typography>

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
			< ColorSidePanel />

		</Grid>
	</Grid>
		</Layout>
  );
}

export default Color;
