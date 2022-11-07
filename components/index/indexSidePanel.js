import React from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';

const IndexSidePanel = () => {
	return (
		<div className="sidePanel">
			<br />
			<Typography sx={{fontSize: 16}}>
				PKG Analytics provides detailed financial analysis for the top twelve packaging companies in the world.  We use Sankey diagrams to provide graphical overviews of the financial statements of each company for the past eight quarters.
				<br />
				<br />
				<br />
<ul>
      <li>
        <Link href="/wrk">West Rock (WRK)</Link>
      </li>
      <li>
        <Link href="/about">The International Paper Company</Link>
      </li>
      <li>
        <Link href="/wrk">CCL Industries Inc.</Link>
      </li>
      <li>
        <Link href="/wrk">Packaging Corporation of America</Link>
      </li>
      <li>
        <Link href="/wrk">Amcor PLC</Link>
      </li>
      <li>
        <Link href="/wrk">Graphic Packaging Holding Company</Link>
      </li>
      <li>
        <Link href="/wrk">Sonoco</Link>
      </li>
      <li>
        <Link href="/wrk">Sealed Air Corporation</Link>
      </li>
      <li>
        <Link href="/wrk">Veritiv Corporation</Link>
      </li>
      <li>
        <Link href="/wrk">Ball Corporation</Link>
      </li>
      <li>
        <Link href="/wrk">Ardagh Group</Link>
      </li>
      <li>
        <Link href="/wrk">Greif Inc</Link>
      </li>
    </ul>
			</Typography>
		</div>
	);
};

export default IndexSidePanel;
