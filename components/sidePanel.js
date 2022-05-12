import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SidePanel = () => {
	return (
		<div className="sidePanel">
				<Image
					src="/twowomenwhiteboard.jpg"
					width={600}
					height={400}
					alt=""
				/>
			</div>
	);
};

export default SidePanel;
