import React from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const IndexSidePanel = () => {
	return (
		<Box sx={{ml: 4, pl:9, borderLeft: 'green solid', borderWidth: 2}}>
			<br />
				<Typography sx={{fontSize: 16}}>

				Below are charts by company from How They Make Money - Packaging Edition
				<br />
				<br />
				<br />
				<Link href="/wrk">West Rock (WRK)</Link>
				<br />
				<Link href="/about">The International Paper Company</Link>
				<br />
				<Link href="/wrk">CCL Industries Inc.</Link>
				<br />
				<Link href="/wrk">Packaging Corporation of America</Link>
				<br />
				<Link href="/wrk">Amcor PLC</Link>
				<br />
				<Link href="/wrk">Graphic Packaging Holding Company</Link>
				<br />
				<Link href="/wrk">Sonoco</Link>
				<br />
				<Link href="/wrk">Sealed Air Corporation</Link>
				<br />
				<Link href="/wrk">Veritiv Corporation</Link>
				<br />
				<Link href="/wrk">Ball Corporation</Link>
				<br />
				<Link href="/wrk">Ardagh Group</Link>
				<br />
				<Link href="/wrk">Greif Inc</Link>
				<br />
				<br />
				<br />
				Any questions or comments feel free to reach out to sunshine@pkganalytics.com.
		</Typography>
		</Box>
	);
};

export default IndexSidePanel;
