import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SidePanel = () => {
	return (
		<div className="sidePanel">
			<div>
				<br />
				<br />
				<div>
					<p>Get started today with a free quote!</p>
					<br />
					<p>
						Send us your request using our{' '}
						<Link href="/contactus">
							<a> Contact Form </a>
						</Link>{' '}
						or else email us. You will hear directly from a senior Website Developer, usually within
						minutes.
					</p>
				</div>

				<br />
				<div className="outerWrapper">
				</div>
				<br />
				<br />
				<Image
					src="/twowomenwhiteboard.jpg"
					width={600}
					height={400}
					alt=""
				/>
			</div>
		</div>
	);
};

export default SidePanel;
