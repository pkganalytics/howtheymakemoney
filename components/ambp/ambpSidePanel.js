import React from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';
import Image from 'next/image'

const SidePanel = () => {
	return (
		<div className="sidePanel">
				<Image
					src="/westrockLogo.svg"
					width={400}
					height={300}
					alt=""
				/>
			<Typography>Ardagh Group is a Luxembourg-based producer of glass and metal products that has "grown in the past two decades into one of the world’s largest metal and glass packaging companies".</Typography>
		</div>
	);
};

export default SidePanel;
