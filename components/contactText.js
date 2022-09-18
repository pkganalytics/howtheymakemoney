import React from 'react';
import Link from 'next/link';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CombinedForm from '../components/combinedForm';
import { Button} from '@mui/material';

const ContactText = () => {
	return (
		<div className="mainText">
			<h1><MailOutlineIcon fontSize="large" style={{position: 'relative', top: '3px'}} /> Contact Us
			</h1>
			<p>To get started send us your contact details and an explanation of the Sankey diagram you are looking for.  If possible, upload the data file so we can see how much work will be needed to convert it to JSON.  We will get back to you very quickly with a quote.  If necessary, we can call you to discuss your requirements in more detail, or to help you work out the best way to display your data.  When we have agreed on a price and a time-frame we will send you an invoice for the 20% deposit.  When this has been settled we will get started on the coding.  If you need revisions we will get back to you with the revised code as soon as possible.  Finally, if necessary, we will help you integrate the Sankey diagram into your existing code.  If you have questions please don't hesitate to get in touch.</p>
				<br/>
			<br />
			<CombinedForm />
			<div />
			<br />
		</div>
	);
};

export default ContactText;
