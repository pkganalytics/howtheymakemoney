import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ContactSidePanel = () => {
	return (
		<div className="sidePanel">
			<div>
				<ul>
					<li className="mainList">United States</li>
					12759 NE Whitaker Way, Portland, OR 97230, USA<br />
					<li className="mainList">United Kingdom</li>
					266 Banbury Road, Oxford, OX2 7DL, United Kingdom<br />
					<li className="mainList">Australia</li>
					8 Melville Street, Parramatta, NSW 2150, Australia<br />
				</ul>
			</div>
			<div>
				<br />
				<br />
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

export default ContactSidePanel;
