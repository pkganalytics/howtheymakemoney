import React from 'react';
import Link from 'next/link';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
const IndexText = () => {
	return (
		<div className="mainText">
			<h1><HelpOutlineIcon fontSize="large"  style={{position: 'relative', top: '1px'}} /> Introduction
			</h1>
			<ul className="mainList">
				<li className="mainList">Removing nodes</li>
				<p>
Sometimes it's useful to exclude some of the less important data.  For example, it might be useful to see just the top three source countries.  Alteratively, it might be interesting to exclude one particular country (for example, it might be useful to see all refugee flows excluding those from a particular country.)
			</p>
		</ul>
	</div>
	);
};

export default IndexText;