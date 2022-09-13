import React from 'react';


const IndexSidePanel = () => {
	return (
		<div className="sidePanel">
			<ul className="mainList">
<li className="mainList">Flow between nodes</li>
				<p>Sankey diagrams are flow diagrams which use the width of the connecting lines between two nodes to show the flow rate between them.  For example, the diagram on the right shows the movement of refugees: the nodes on the left are the countries of origin, while the nodes on the right are the states in the US where they end up.  The thickness of each line represents the number of people between each point of origin and each destination.
			</p>
				<li className="mainList">Adding numbers</li>
While the sizes of the nodes and the widths of the flow lines are useful for getting a general idea about the number of refugees in each category, it's sometimes useful to have actual numbers.  Mousing over each flow line shows the number of people in that category (for example, those people traveling from Afghanistan to California).  Mousing over each node shows the total number of people either coming from that country or moving to that state.
		</ul>
	</div>
	);
};


export default IndexSidePanel;
