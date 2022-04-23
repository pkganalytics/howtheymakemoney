export default function validateAuth(values) {
	let errors = {};
	// Email Errors
	if (!values.email) {
		errors.email = 'Please enter your email address';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}

	// FirstName Errors
	if (!values.firstname) {
		errors.firstname = 'Please enter your first name';
	}
	// Surname Errors
	if (!values.surname) {
		errors.surname = 'Please enter your surname';
	}
	return errors;
}
