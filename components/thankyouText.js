import React from 'react';
import Link from 'next/link';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CombinedForm from '../components/combinedForm';
import { Button} from '@mui/material';
import Alert from '@mui/material/Alert';


const ContactText = () => {
	return (
		<div className="mainText">
			<br />

			<Alert 
			sx={{
				maxWidth: '30em',
				marginLeft: { 
					xs: '3em',
					sm: '5em',
					lg: '10em'
						},
				marginTop: {
					ws: '0em',
					sm: '3em',
					lg: '5em'
						},
				marginBottom: {
					ws: '3em'},
				maxHeight: '20em'
				}}
			severity="success"
			variant="outlined">
				<br />
				<h1>Thank you for your email!</h1>
				<br />
				<h2>A consultant will get back to you,<br />usually within a couple of hours!</h2></Alert>
		</div>
	);
};

export default ContactText;
