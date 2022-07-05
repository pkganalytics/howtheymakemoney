import React, { useState } from 'react';
import axios from 'axios';
import 'formdata-polyfill';

export const initialState = {
	email: '',
	firstname: '',
	surname: '',
	message: ''
};

function useFormValidation(initialState, validate) {
	const [ values, setValues ] = React.useState(initialState);
	const [ errors, setErrors ] = React.useState({});
	const [ isSubmitting, setSubmitting ] = React.useState(false);
	const [ selectedFile1, setSelectedFile1 ] = useState([]);
	const [ selectedFile2, setSelectedFile2 ] = useState([]);
	const [ selectedFile3, setSelectedFile3 ] = useState([]);
	const [ selectedFileName1, setSelectedFileName1 ] = useState('');
	const [ selectedFileName2, setSelectedFileName2 ] = useState('');
	const [ selectedFileName3, setSelectedFileName3 ] = useState('');
	const [ deadline, setDeadline ] = useState(6);
	const [ receivedMessage, setReceivedMessage ] = useState('');

	let fileName;
	React.useEffect(
		() => {
			if (isSubmitting) {
				console.log('isSubmitting = ' + isSubmitting);
				const noErrors = Object.keys(errors).length === 0;
				if (noErrors) {
					console.log('authenticated!', values.email, values.password);
					setSubmitting(false);
				} else {
					setSubmitting(false);
				}
			}
		},
		[ errors, isSubmitting, values.email, values.password ]
	);

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

	function handleBlur() {
		const validationErrors = validate(values);
		setErrors(validationErrors);
	}

	function handleFormSubmit(event) {
		event.preventDefault();
		const validationErrors = validate(values);
		setErrors(validationErrors);
		setSubmitting(true);
		let formData = new FormData();
		formData.append('file1', selectedFile1);
		formData.append('file2', selectedFile2);
		formData.append('file3', selectedFile3);
		formData.append('email', values.email);
		formData.append('firstname', values.firstname);
		formData.append('surname', values.surname);
		formData.append('deadline', deadline);
		formData.append('message', values.message);

		console.log(formData);
		// axios.post('/api/formidable3', formData).then((result) => setReceivedMessage(result.data));
		setValues(initialState);
		setSelectedFileName1([]);
		setSelectedFileName2([]);
		setSelectedFileName3([]);
	}

	return {
		handleFormSubmit,
		handleChange,
		handleChangeFile1,
		handleChangeFile2,
		handleChangeFile3,
		deadline,
		setDeadline,
		selectedFileName1,
		selectedFileName2,
		selectedFileName3,
		handleBlur,
		values,
		errors,
		isSubmitting,
		receivedMessage
	};
}

export default useFormValidation;
