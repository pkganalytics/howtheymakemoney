import React from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Typography from '@mui/material/Typography';


const IndexText = () => {
	return (
		<div>
			<Typography variant='body1'>
			<Typography variant='h5' color="primary">Flow between nodes</Typography>
Sankey diagrams are powerful tools for showing flow from one set of entities to another.  For example, they can be used to show different ways in which energy is created and how it is used.
												<p>Sankey diagrams are flow diagrams which use the width of the connecting lines between two nodes to show the flow rate between them.  For example, the diagram on the right shows the movement of refugees: the nodes on the left are the countries of origin, while the nodes on the right are the states in the US where they end up.  The thickness of each line represents the number of people between each point of origin and each destination.
			</p>

			</Typography>
	</div>
	);
};

export default IndexText;
