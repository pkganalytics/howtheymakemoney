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
					<p>Upload your data, a description of the chart(s) you need, the animation you want and the level of interaction.  Alternatively, allow us to be creative!{' '}
						<Link href="/contactus">
							<a> Contact Form </a>
						</Link>{' '}
		or else email us at support@oxfordresumes.com. <br /> <br /> When we've agreed on a plan, we'll send you an invoice.  A consultant will call you to work out how we can optimize your résumé to bring out your most relevant skills and experience. Finally, we'll typeset your résumé so that you have a polished document to send to potential employers.
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
