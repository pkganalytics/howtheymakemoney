import React from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';

const SidePanel = () => {
	return (
		<div className="sidePanel">
			<Typography>
			Phasellus eu quam. Quisque interdum cursus purus. In orci. Maecenas vehicula.
			Sed et mauris. Praesent feugiat viverra lacus. Suspendisse pulvinar
			lacus ut nunc. Quisque nisi. Suspendisse id risus nec nisi ultrices
			ornare. Donec eget tellus. Nullam molestie placerat felis. Aenean
			facilisis. Nunc erat. Integer in tellus. Mauris volutpat, neque vel
			ornare porttitor, dolor nisi sagittis dolor, sit amet bibendum orci
			leo blandit lacus.

			In id velit sodales arcu iaculis venenatis. Etiam at leo. Vivamus vitae sem.
			</Typography>
			<div>
				<img
					src="/twowomenwhiteboard.jpg"
					srcSet="/twowomenwhiteboard.jpg 1000w, /twowomenwhitboard_m.jpg 400w, /twowomenwhiteboard_s 200w"
					sizes="(max-width: 600px) 100vw, (min-width: 601px) 35vw"
					type="image/jpg"
					className="sidePanelImage"
				/>
			</div>
		</div>
	);
};

export default SidePanel;
