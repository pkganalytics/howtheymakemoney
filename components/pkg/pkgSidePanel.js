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
Packaging Corporation of America is an American manufacturing company based in Lake Forest, Illinois.[2] The company has about 15,500 employees, with operations primarily in the United States.
			</Typography>
		</div>
	);
};

export default SidePanel;
