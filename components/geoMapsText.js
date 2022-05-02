import React from 'react';
import Link from 'next/link';
import PublicIcon from '@mui/icons-material/Public';


const GeoMapsText = () => {
	return (
		<div className="mainText">
		<h1><PublicIcon fontSize="inherit" style={{position: 'relative', top: '3px'}} /> GeoMaps</h1>
		
			<p>Bar charts, line charts and pie charts. 	Aute ipsum in irure culpa laboris. Excepteur enim eiusmod ullamco labore irure. Aliquip mollit cillum voluptate et. </p>
			<ul >
				<li className="mainList integrationListColumn">Bar Charts</li>
				Aute ipsum in irure culpa laboris. Excepteur enim eiusmod ullamco labore irure. Aliquip mollit cillum voluptate et. Laborum nisi aliquip ex Lorem pariatur enim id enim cillum sunt nisi amet. Ad fugiat ullamco quis sunt irure quis id consequat velit anim eiusmod proident exercitation veniam. Ullamco pariatur deserunt occaecat fugiat proident tempor in ex fugiat anim excepteur proident aliquip.
				<li className="mainList integrationListColumn">Line Charts</li>{' '}
				Aute ipsum in irure culpa laboris. Excepteur enim eiusmod ullamco labore irure. Aliquip mollit cillum voluptate et. Laborum nisi aliquip ex Lorem pariatur enim id enim cillum sunt nisi amet. Ad fugiat ullamco quis sunt irure quis id consequat velit anim eiusmod proident exercitation veniam. Ullamco pariatur deserunt occaecat fugiat proident tempor in ex fugiat anim excepteur proident aliquip.

				<li className="mainList integrationListColumn">Pie Charts</li>{' '}
				Aute ipsum in irure culpa laboris. Excepteur enim eiusmod ullamco labore irure. Aliquip mollit cillum voluptate et. Laborum nisi aliquip ex Lorem pariatur enim id enim cillum sunt nisi amet. Ad fugiat ullamco quis sunt irure quis id consequat velit anim eiusmod proident exercitation veniam. Ullamco pariatur deserunt occaecat fugiat proident tempor in ex fugiat anim excepteur proident aliquip.
			</ul>
		</div>
	);
};

export default GeoMapsText;
