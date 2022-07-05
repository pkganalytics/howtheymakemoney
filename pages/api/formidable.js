import formidable from 'formidable';
const nodemailer = require('nodemailer');
const fs = require('fs');

export const config = {
	api: {
		bodyParser: false,
		externalResolver: true
	}
};

const transporter = nodemailer.createTransport({
	host: 'mail.runbox.com',
	port: 465,
	secure: true, // true for 465, false for other ports
	auth: {
		user: 'pkail@runbox.com',
		pass: process.env.DB_PASS
	},
	requireTLS: true
});

export default async (req, res) => {
	const form = new formidable.IncomingForm();
// { uploadDir: './uploads' }
	form.keepExtensions = true;
	form.multiples = true;
	form.maxFileSize = 20 * 1024 * 1024;
	form.on('end', () => {
		res.statusCode = 200;
		console.log('Hello');
		res.send('Thank you for your message!');
	});

			// console.log("files=", files);


	form.parse(req, (err, fields, files) => {
	console.log('fields', fields);
		console.log('files', files);
		const main = async (req, res) => {
			let sendMailObject = {
				from: 'pkail@runbox.com',
				to: 'support@oxfordresumes.com',
				subject: 'Query from ' + fields.firstName + ' ' + fields.secondName, // Subject line
				text:
					'Message: ' +
					fields.message +
					' From: ' +
					fields.email +
					' First Name: ' +
					fields.firstName +
					' Second Name: ' +
					fields.secondName +
					' Phone: ' +
					fields.phone,

				html:
					'<b>Message: </b>' +
					fields.message +
					'<br/><b>From: </b> ' +
					fields.email +
					'<br/><b>First Name: </b>' +
					fields.firstName +
					'<br/><b>Second Name: </b> ' +
					fields.secondName +
					'<br/><b>Phone: </b> ' +
					fields.phone
				};


			let attachments = [];
			if (typeof files.images !== 'undefined') {
				attachments.push({
					filename: files.images.name,
					path: files.images.path
				});
			}
			if (typeof files.file2 !== 'undefined') {
				attachments.push({
					filename: files.file2.name,
					path: files.file2.path
				});
			}
			if (typeof files.file3 !== 'undefined') {
				attachments.push({
					filename: files.file3.name,
					path: files.file3.path
				});
			}

			sendMailObject.attachments = attachments;

			await transporter.sendMail(sendMailObject);

			 if (typeof files.file1 !== 'undefined') {
			 fs.unlinkSync(files.file1.path);
			 }

			 if (typeof files.file2 !== 'undefined') {
			 	fs.unlinkSync(files.file2.path);
			 }

			 if (typeof files.file3 !== 'undefined') {
			 	fs.unlinkSync(files.file3.path);
			 }
		};
		main(req, res);
	});
};
