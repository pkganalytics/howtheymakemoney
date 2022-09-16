import React from 'react';
import Link from 'next/link';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
const IndexText = () => {
	return (
		<div className="mainText">
			<h1><HelpOutlineIcon fontSize="large"  style={{position: 'relative', top: '1px'}} /> Introduction
			</h1>
			<ul className="mainList">
<li className="mainList">Change over time</li>
			<p>
				Sankey diagrams are particularly useful for showing changes over time.  In this example, the number of refugees from each origin country is represented by the size of the node.  The nodes are also arranged in order.  This means that, as we move forwards or backwards in time, some nodes move up and down relative to each other.  The movement is made much clearer because the flow lines are animated: this means that there is not an abrupt change, and it's easier for the eyes to follow a particular node or flow-line.
			</p>
				<li className="mainList">Adding numbers</li>
While the sizes of the nodes and the widths of the flow lines are useful for getting a general idea about the number of refugees in each category, it's sometimes useful to have actual numbers.  Mousing over each flow line shows the number of people in that category (for example, those people traveling from Afghanistan to California).  Mousing over each node shows the total number of people either coming from that country or moving to that state.
		</ul>
	</div>
	);
};

export default IndexText;
