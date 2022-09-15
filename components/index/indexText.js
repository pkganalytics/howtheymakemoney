import React from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Typography from '@mui/material/Typography';
import Link from 'next/link'


const IndexText = () => {
	return (
		<div>
			<Typography variant='h5' color="primary">Flow between nodes</Typography>
			<Typography variant='body1' display='block'>
				Sankey diagrams are powerful tools for showing flow from one set of entities to another.  For example, they can be used to show the flow of energy resources from producers to consumers, or the flow of money from donors to recipients.  They differ from flow diagrams in that the amount of flow is indicated by the width of the flow lines.
				<br /><br />
				This example shows the flow of refugees: the rectangles on the left represent the countries of origin, while the ones on the right represent the US states to which these refugees are moving.
				<br /><br />
				The total number of refugees coming from or arriving in each region is shown by the height of the rectangle; the number moving between each region is shown by the thickness of the line.  To provide more accurate information this information can be shown with a <Link href = 'simple'><a>tooltip.</a></Link>
				<br /><br />
Color can also be used in this way.  In <Link href = 'color'><a>this example</a></Link> the shade of the rectangles is determined by the number of refugees in each area.
				<br /><br />
Sankey diagrams are particularly good at representing change over time.  In <Link href = 'time'><a>this example</a></Link>, we can see how the flow of refugees changes from one year to the next.  Because the diagram uses a smooth transition, it's easy to keep track of the changes.
				<br /><br />
In some cases we might need to focus on a particular <Link href = 'subset'><a>subset</a></Link> of the data - for example, the most important countries of origin.
			</Typography>
	</div>
	);
};

export default IndexText;
