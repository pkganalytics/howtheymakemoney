import SankeySvg from "/components/sankey/sankeySvg";
import SankeySidePanel from "/components/sankey/sankeySidePanel";
import Grid from '@mui/material/Grid';
import MediationIcon from '@mui/icons-material/Mediation';
import { Typography } from '@mui/material';
import Layout from '../components/Layout';
import Image from 'next/image';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import remove from 'lodash/remove';
import cloneDeep from 'lodash/cloneDeep';

const Sankey = () =>  {

	const colours = useSelector(state => state.colours);
	// const nodeFilter = useSelector(state => state.nodeFilter);
	const nodeFilter = 4;
	const _values = useSelector(state => state.year);

console.log('nodeFilter = ', nodeFilter);

// var filtered = JSON.parse(JSON.stringify(_values));
	var tobeFiltered = cloneDeep(_values);
	console.log('tobeFiltered =', tobeFiltered)

// Remove nodes > nodeFilter
	tobeFiltered.nodes.splice(nodeFilter, 7 - nodeFilter);
	const nodesWithNodesRemoved = cloneDeep(tobeFiltered.nodes);
	console.log('nodesWithNodesRemoved =', nodesWithNodesRemoved);

// Remove links which reference nodes > nodeFilter
	const linksWithRefNodesRemoved = cloneDeep(remove(tobeFiltered.links, item => item.source < (nodeFilter)));
	console.log('linksWithRefNodesRemoved =', linksWithRefNodesRemoved);

// Reduce values of target nodes
	const linksWithReducedTargets = cloneDeep(linksWithRefNodesRemoved);

	for (let i = 0; i < linksWithReducedTargets.length; i++) {
	if (linksWithReducedTargets[i].target >= nodeFilter)
		{linksWithReducedTargets[i].target = linksWithReducedTargets[i].target - 1;}
	}
	  console.log('linksWithReducedTargets =', linksWithReducedTargets);

	// Combine nodesWithNodesRemoved and linksWithReducedTargets
	
	const filtered = {}
	filtered.nodes = cloneDeep(nodesWithNodesRemoved);
	filtered.links = cloneDeep(linksWithReducedTargets);
	console.log('filtered =', filtered);

    // const values = JSON.parse(JSON.stringify(_values));
	const values = cloneDeep(_values);
	  // var filteredLinks = filtered.links.filter(item =>  { return item.source.index < nodeFilter - 1 || item.source.index > (filtered.nodes.length - 7) });
	// var filteredLinks = remove(filtered.links, (item =>  { return item.source.index >= nodeFilter - 1 || item.source.index <= (filtered.nodes.length - 7) }));

	  // console.log('filteredLinks =', filteredLinks);

	// filtered.nodes = filteredNodes;
	// filtered.links = filteredLinks;
	// console.log('filtered after adding nodes and links =', filtered) // delete filtered.length; console.log('length of filtered after adding nodes and links =', filtered.length) const values = cloneDeep(_values); const values = cloneDeep(filtered);
    // const values = JSON.parse(JSON.stringify(filtered)); return ( <Layout title="Sankey Diagrams">

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
