import React from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';
import Image from 'next/image'

const SidePanel = () => {
	return (
		<div className="sidePanel">
				<Image
					src="/ccl.svg"
					width={400}
					height={300}
					alt=""
				/>
			<Typography>
CCL Industries Inc. is a Toronto, Ontario-based company founded in 1951. It describes itself as the world's largest label maker. It is listed on the Toronto Stock Exchange, and is an S&P/TSX 60 Component. CCL consists of five divisions – CCL Label, CCL Container, Avery, Checkpoint, and Innovia. It has 154 manufacturing facilities in North America, Latin America, Europe, Asia, Australia and Africa operated by approximately 20,000 employees.
			</Typography>
		</div>
	);
};

export default SidePanel;
