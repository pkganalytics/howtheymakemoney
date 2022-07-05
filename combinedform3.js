import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Controller, useForm } from "react-hook-form";
// import axios from 'axios';
// import 'formdata-polyfill';

export const initialState = {
	email: '',
	firstname: '',
	surname: '',
	message: ''
};

function useFormValidation(initialState, validate) {
	const [ values, setValues ] = React.useState(initialState);
	const [ selectedFile1, setSelectedFile1 ] = useState([]);
	const [ selectedFile2, setSelectedFile2 ] = useState([]);
	const [ selectedFile3, setSelectedFile3 ] = useState([]);
	const [ selectedFileName1, setSelectedFileName1 ] = useState('');
	const [ selectedFileName2, setSelectedFileName2 ] = useState('');
	const [ selectedFileName3, setSelectedFileName3 ] = useState('');
	const [ receivedMessage, setReceivedMessage ] = useState('');

	let fileName;

	function handleChange(event) {
		setValues({
			...values,
			[event.target.name]: event.target.value
		});
		const validationErrors = validate(values);
		setErrors(validationErrors);
	}
	const handleChangeFile1 = (e) => {
		setSelectedFile1(e.target.files[0]);
		setSelectedFileName1(e.target.files[0].name);
	};
	const handleChangeFile2 = (e) => {
		setSelectedFile2(e.target.files[0]);
		setSelectedFileName2(e.target.files[0].name);
	};
	const handleChangeFile3 = (e) => {
		setSelectedFile3(e.target.files[0]);
		setSelectedFileName3(e.target.files[0].name);
	};

	function handleFormSubmit(event) {
		event.preventDefault();
		let formData = new FormData();
		formData.append('file1', selectedFile1);
		formData.append('file2', selectedFile2);
		formData.append('file3', selectedFile3);
		formData.append('email', values.email);
		formData.append('firstname', values.firstname);
		formData.append('surname', values.surname);
		formData.append('message', values.message);

		console.log(formData);
		// axios.post('/api/formidable3', formData).then((result) => setReceivedMessage(result.data));
		setValues(initialState);
		setSelectedFileName1([]);
		setSelectedFileName2([]);
		setSelectedFileName3([]);
	}
}

const CombinedForm = () => {
			const { handleSubmit, reset, control } = useForm();

	const [ selectedFile, setSelectedFile ] = useState(null);
	let fileName = '';

	//Direct click from Buttons to file input elements
	const handleClick1 = (e) => {
		document.getElementById('hiddenFileInput1').click();
	};
	const handleClick2 = (e) => {
		document.getElementById('hiddenFileInput2').click();
	};
	const handleClick3 = (e) => {
		document.getElementById('hiddenFileInput3').click();
	};

	const onChangeFile = (e) => {
		setSelectedFile(e.target.files[0]);
		let fileName = e.target.files[0].name;
	};

	return (

		<form onSubmit={handleFormSubmit} encType="multipart/form-data" method="POST">

					<Controller
						control={control}
						name="textValue"
						defaultValue=""
						render={({ field: { onChange, value } }) => (
							<TextField onChange={onChange} value={value} label={"Text Value"} />
								)}
					/>

			<ul>
				<li className="inputField">
					<div className="input">
						<input
							error = {errors.email}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="email"
							name="email"
							value={values.email}
							type="text"
							autoComplete="off"
						/>
					</div>
					<div className="message">{errors.email && <span className="errorText">{errors.email}</span>}</div>
				</li>
				<li className="inputField">
					<div className="input">
						<input
							onChange={handleChange}
							placeholder="First Name"
							value={values.firstname}
							name="firstname"
							type="text"
						/>
					</div>
				</li>
								<li className="inputField">
					<div className="input">
						<TextField
							autoFocus
							variant="outlined"
							label="Surname"
							onChange={handleChange}
							value={values.surname}
							name="surname"
							type="text"
							error
						/>
					</div>
				</li>

				<li className="inputTextArea">
					<div className="input">
					</div>
					<div className="message" />
				</li>

				<li className="inputTextArea">
					<div className="input">
						<TextField
							autoFocus
							variant="outlined"
							label="Message"
							onChange={handleChange}
							value={values.message}
							onBlur={handleBlur}
							name="message"
							type="text"
							multiline
							rows={8}
						/>
					</div>
				</li>

								<li className="inputField">
					<div className="input">
						 <Button variant="outlined" onClick={handleClick1}>Upload a file</Button>
						<input
							type="file"
							id="hiddenFileInput1"
							name="file1"
							onChange={handleChangeFile1}
							style={{ display: 'none' }}
						/>
					</div>
					<div className="message">{selectedFileName1}</div>
				</li>
				<li className="inputField">
					<div className="input">
						 <Button variant="outlined" onClick={handleClick2}>Upload a file</Button>
						<input
							type="file"
							id="hiddenFileInput2"
							name="file1"
							onChange={handleChangeFile2}
							style={{ display: 'none' }}
						/>
					</div>
					<div className="message">{selectedFileName2}</div>
				</li>
				<li className="inputField">
					<div className="input">
						 <Button variant="outlined" onClick={handleClick3}>Upload a file</Button>
						<input
							type="file"
							id="hiddenFileInput3"
							name="file1"
							onChange={handleChangeFile3}
							style={{ display: 'none' }}
						/>
					</div>
				</li>

				<li className="inputField submit">
					 <Button disabled={isSubmitting} type="primary" type="submit">
						      Submit
					 </Button></li>
				<li>
				<Button onClick={handleSubmit(handleFormSubmit)}>Submit Form</Button>
				</li>
			</ul>
		</form>
	);
};

export default CombinedForm;
