import React from 'react';
import Link from 'next/link';

const SidePanel = () => {
	return (
		<div className="sidePanel">
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
