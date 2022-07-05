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
			<p>To get started send us your contact details and either your existing résumé or detailed notes of your education and career.  We will send you an invoice: when this has been settled we will contact you to arrange your one-on-one consultation.  If you have questions please don't hesitate to get in touch.</p>
				<br/>
			<br />
			<CombinedForm />
			<div />
			<br />
		</div>
	);
};

export default ContactText;
