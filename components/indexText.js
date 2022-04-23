import React from 'react';
import Link from 'next/link';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
const IndexText = () => {
	return (
		<div className="mainText">
			<h1><HelpOutlineIcon fontSize="large"  style={{position: 'relative', top: '3px'}} /> Introduction
			</h1>
			<p>Aliqua nostrud excepteur aute irure. Voluptate commodo reprehenderit ullamco est et pariatur laboris nisi enim officia proident. Laborum dolor irure amet occaecat mollit ut laborum culpa do id in irure esse sit.</p>
			<ul className="mainList">
				<li className="mainList">Consultation</li><li></li>Aliqua nostrud excepteur aute irure. Voluptate commodo reprehenderit ullamco est et pariatur laboris nisi enim officia proident. Laborum dolor irure amet occaecat mollit ut laborum culpa do id in irure esse sit.
				<li className="mainList">Writing and proof-reading your résumé</li>A professional writer will use the insights gained in the first two stages to write the text.  The text will be thoroughly proof-read by a professional and will then be sent to your for approval before the final stage.
				<li className="mainList">Professional typesetting</li>
			Your résumé will be typeset by a professional typesetter.  We will choose the design together, using a format which works best for your chosen job market.
			<li className="mainList">Follow up</li>Finally, we will follow up to find out how successful you have been.  This is how we can perfect our methodology and guide you in your future career.
		</ul>

	</div>
	);
};

export default IndexText;
