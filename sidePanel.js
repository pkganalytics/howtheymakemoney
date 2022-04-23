import React from 'react';
import Link from 'next/link';
import { Button } from 'antd';

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
				<br />
				<div className="outerWrapper">
					<Button shape="round" size="large" type="primary">
						<a href="mailto:help@friendlyghost.dev" className="link">
							help@friendlyghost.dev
						</a>
					</Button>
				</div>
				<br />
				<br />
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
