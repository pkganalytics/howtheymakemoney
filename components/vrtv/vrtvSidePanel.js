import React from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';
import Image from 'next/image'

const SidePanel = () => {
	return (
		<div className="sidePanel">
				<Image
					src="/vrtv.svg"
					width={400}
					height={300}
					alt=""
				/>
			<Typography>Veritiv Corporation is a business-to-business provider of packaging, publishing, and hygiene products. It has 125 operating distribution centers throughout the United States, Canada, and Mexico. It is headquartered in Sandy Springs, Georgia, part of the Atlanta metropolitan area.</Typography>
		</div>
	);
};

export default SidePanel;
