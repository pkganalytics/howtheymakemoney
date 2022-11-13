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
			<Typography>Graphic Packaging Holding Company is a Fortune 500 corporation based in Sandy Springs, Georgia, United States. It is a leading company in the design and manufacturing of packaging for commercial products. GPI manufactures paperboard and folding cartons for a wide range of popular consumer goods, particularly beverages and packaged food. The company operates mills in Middletown, OH, Kalamazoo and Battle Creek, Michigan, West Monroe, Louisiana, Augusta, Georgia , Texarkana, Texas and in Macon, Georgia, that use recycled municipal wastewater in the manufacture of food grade cardboard and coated paper board.</Typography>
		</div>
	);
};

export default SidePanel;
