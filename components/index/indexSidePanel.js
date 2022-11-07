import React from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';

const IndexSidePanel = () => {
	return (
		<div className="sidePanel">
			<Typography> 
				PKG Analytics provides detailed financial analysis for the top twelve packaging companies in the world.  We use Sankey diagrams to provide graphical overviews of the financial statements of each company for the past eight quarters.
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
        <Link href="/wrk"></Link>
      </li>
      <li>
        <Link href="/wrk"></Link>
      </li>
      <li>
        <Link href="/wrk"></Link>
      </li>
      <li>
        <Link href="/wrk"></Link>
      </li>
      <li>
        <Link href="/wrk"></Link>
      </li>
      <li>
        <Link href="/wrk"></Link>
      </li>
      <li>
        <Link href="/wrk"></Link>
      </li>
      <li>
        <Link href="/wrk"></Link>
      </li>
      <li>
        <Link href="/wrk"></Link>
      </li>
      <li>
        <Link href="/wrk"></Link>
      </li>
    </ul>
			</Typography>
		</div>
	);
};

export default IndexSidePanel;
