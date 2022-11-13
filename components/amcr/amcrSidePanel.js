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
Amcor plc is an American-Australian global packaging company. It develops and produces flexible packaging, rigid containers, specialty cartons, closures and services for food, beverage, pharmaceutical, medical-device, home and personal-care, and other products.
			</Typography>
		</div>
	);
};

export default SidePanel;
