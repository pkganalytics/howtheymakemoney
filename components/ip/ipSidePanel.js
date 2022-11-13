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
			<Typography>
The International Paper Company is an American pulp and paper company, the largest such company in the world. It has approximately 56,000 employees, and is headquartered in Memphis, Tennessee.
			</Typography>
		</div>
	);
};

export default SidePanel;
