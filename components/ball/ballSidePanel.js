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
			<Typography>Ball Corporation is an American company headquartered in Broomfield, Colorado. It is best known for its early production of glass jars, lids, and related products used for home canning. Since its founding in Buffalo, New York, in 1880, when it was known as the Wooden Jacket Can Company, the Ball company has expanded and diversified into other business ventures, including aerospace technology. It eventually became the world's largest manufacturer of recyclable metal beverage and food containers.</Typography>
		</div>
	);
};

export default SidePanel;
