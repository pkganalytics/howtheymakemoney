import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Link from 'next/link'
import SidePanelBox from '../../styles/styles';


const IndexSidePanel = () => {
	return (
		<SidePanelBox>
				<Typography>
				This is an enlarged version of the Sankey diagram shown on the <Link href = '/'><a> Index </a></Link>page.
			<br/><br/>
			Overall numbers of refugees in each category can be seen from the sizes of the nodes and the width of the connecting curves.  To make this more precise, there are tooltips which give exact figures.  For example, when you mouse over the rectangles you see the total number of refugees in each country or state; when you mouse over the flow lines, you see the total number of people moving in that direction (for example from Afghanistan to California).
			<br/><br/>
			In addition to this, the lines are colored grey at first, to help draw the eyes to nodes.  The color is then transitioned in over a period of a few seconds.
			</Typography>
		</SidePanelBox>
	);
};


export default IndexSidePanel;
