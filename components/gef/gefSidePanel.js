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
			<Typography>Greif, Inc. (NYSE: GEF) is an American manufacturing company based in Delaware, Ohio. Originally a manufacturer of barrels, the company is now focused on producing industrial packaging and containers.</Typography>
		</div>
	);
};

export default SidePanel;
