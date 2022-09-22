import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';


const IndexSidePanel = () => {
	return (
	<div>
		<br/><br/>
			<Box sx={{pr: '1.5rem', pt: '1rem'}}>
			<Typography>
				This is an enlarged version of the Sankey diagram shown on the Index page.  It's fully responsive: in other words, it changes size automatically to adjust to the size of the device.  Moreover, because it's created using D3, it's SVG rather than JPEG or PNG, so the resolution is the same, regardless of the size.
			<br/><br/>
			There are two enharncements over a static Sankey diagram.  First, it uses a fade-in from grey for the line colours: this helps to draw the eyes to the nodes first.
			<br/><br/>
			The second enhancement is that there are pop-ups which appear when you mouse over the rectangles and flow lines, which show the total number of people in that category (for example, those people traveling from Afghanistan to California).
			</Typography>
		</Box>
		</div>
	);
};


export default IndexSidePanel;
