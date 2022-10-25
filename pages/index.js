import IndexSidePanel from '../components/index/indexSidePanel';
import IndexText from '../components/index/indexText';
import MediationIcon from '@mui/icons-material/Mediation';
import { Typography } from '@mui/material';
import Layout from '../components/Layout';
import SankeySvg from "../components/sankey/sankeySvg";
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import remove from 'lodash/remove';
import cloneDeep from 'lodash/cloneDeep';



const Index = () => {

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
	<Layout>
	<Grid container>
		<Grid item container md={8} sm={12} >
			<Grid container direction="row" alignItems="center"  >
				<Grid item >
	  <MediationIcon  color="primary" className="icons" />
  </Grid>
  <Grid item>
		<Typography variant="h3"> Introduction </Typography>

  </Grid>
	</Grid>
			<Grid item sm={12} sx={{mt:3}}>
		 <IndexText />
		</Grid>
	</Grid>
		<Grid item md={4} sm={12} sx={{mt:'2rem'}}>
		  <SankeySvg colours={colours} values={values} nodeFilter={nodeFilter}/>

		</Grid>
	</Grid>
	</Layout>
  );
}

export default Index;
