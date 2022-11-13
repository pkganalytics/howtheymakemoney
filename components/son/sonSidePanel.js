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
			<Typography>Sonoco is the world's largest producer of tubes, cores, and fiber concrete columns under the brand name Sonotube concrete forms and a leading manufacturer of blow-molded plastic containers, consumer and industrial thermoformed plastic packaging, engineered molded and extruded plastic products, rigid paperboard containers, and convenience closures. Sonoco's operations consist of its consumer packaging businesses, Global Flexibles and Global Plastics; its Global Services division; its Industrial Converted Products businesses and its Protective Packaging division, which produces highly engineered, custom-designed protective, temperature-assurance, and retail security packaging.</Typography>
		</div>
	);
};

export default SidePanel;
