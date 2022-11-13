import React from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';
import Image from 'next/image'

const SidePanel = () => {
	return (
		<div className="sidePanel">
				<Image
					src="/see.svg"
					width={400}
					height={300}
					alt=""
				/>
			<Typography>Sealed Air Corporation is a packaging company known for its brands: Cryovac food packaging and Bubble Wrap cushioning packaging. It sold off its stake in Diversey Holdings in 2017. Headquartered in Charlotte, North Carolina.</Typography>
		</div>
	);
};

export default SidePanel;
