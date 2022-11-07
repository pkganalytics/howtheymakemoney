import React from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';

const SidePanel = () => {
	return (
		<div className="sidePanel">
			<div>
				<img
					src="/westrockLogo.svg"
					sizes="(max-width: 600px) 100vw, (min-width: 601px) 35vw"
					type="image/jpg"
					className="sidePanelImage"
				/>
			</div>
			<Typography>
WestRock is an American corrugated packaging company. It was formed in July 2015 after the merger of MeadWestvaco and RockTenn. WestRock is the 2nd largest American packaging company. It is one of the world's largest paper and packaging companies with US$15 billion in annual revenue and 42,000 employees in 30 countries. The company is headquartered in Sandy Springs, Georgia, consolidating offices from Norcross, Georgia and Richmond, Virginia.
			</Typography>
		</div>
	);
};

export default SidePanel;
