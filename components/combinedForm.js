import React, { useEffect, useState, useCallback } from "react";
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import { Controller, useFormContext, useForm, FormProvider } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {useDropzone} from 'react-dropzone';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/router';

const CombinedForm = () => {

	const router = useRouter();

	const schema = yup.object().shape({
		firstName: yup.string(),
		secondName: yup.string(),
		email: yup.string().email().required('Please enter your email address'),
		phone: yup.number()
					.typeError("Please enter digits.")
					.positive("A phone number can't start with a minus")
					.integer("A phone number can't include a decimal point")
					.min(8),
		message: yup.string(),
		images: yup.mixed()

	});
	
	const [receivedMessage, setReceivedMessage ]= useState('');
	
	const { register, unregister, setValue, watch, handleSubmit, formState: {errors}, reset, control } = useForm({
		resolver: yupResolver(schema)});

	const name = "images";

    const files = watch(name)
	   const onDrop = useCallback(
        (droppedFiles) => {
            const newFiles = (!!files?.length && [...files].concat(droppedFiles)) || droppedFiles;
            setValue(name, newFiles, { shouldValidate: true });
        },
        [setValue, name, files],
    );

	const {getRootProps, acceptedFiles, getInputProps, isDragActive, isDragAccept, isDragReject} = useDropzone({
				onDrop, maxFiles:1,
		accept: "application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-word.document.macroEnabled.12, text/plain, application/rtf, application/vnd.oasis.opendocument.text"});

    useEffect(() => {
        register("images")
        return () => {
            unregister("images")
        }
    }, [register, unregister, name])

		const onSubmit = (data) => {
			router.push('/thankyou')
		console.log("data = ", data);
		const formData = new FormData();

			formData.append('firstName', data.firstName);
			formData.append('secondName', data.secondName);
			formData.append('email', data.email);
			formData.append('phone', data.phone);
			if(data.message){
			formData.append('message', data.message);
			}
			if(data.images){
			formData.append('images', data.images[0]);
			}
			axios.post('api/formidable', formData). then((result) => setReceivedMessage(result.data));
			console.log("receivedMessage = ", receivedMessage);
			};

	return (
		<FormProvider>
		<form onSubmit={onSubmit} encType="multipart/form-data" method="POST" name="enquiry">
			<div className="formWrapper">
			<div className="formColumnOne">
				<Controller
						control={control}
						name="firstName"
						defaultValue=""
						render={({ ref, field: {...field} }) => (
							<div className="formInput">
							<TextField
								inputRef={ref}
								error={!!errors.firstName}
								label={"First Name"}
								size="small"
								helperText={errors.firstName ? errors.firstName?.message : ""}
								{...field}
							/>
						</div>
					)}
							/>
							<br/>
							<br/>
				<Controller
						control={control}
						name="secondName"
						defaultValue=""
						render={({ ref, field: {...field} }) => (
							<div className="formInput">
							<TextField
								inputRef={ref}
								error={!!errors.secondName}
								label={"Second Name"}
								size="small"
								helperText={errors.secondName ? errors.secondName?.message : ""}
								{...field}
							/>
							</div>
							)}
							/>
							<br/>
							<br/>
				<Controller
						control={control}
						name="email"
						defaultValue=""
						render={({ ref, field: {...field} }) => (
							<div className="formInput">
							<TextField
								inputRef={ref}
								error={!!errors.email}
								label={"Email"}
								size="small"
								helperText={errors.email ? errors.email?.message : ""}
								{...field}
							/>
							</div>
							)}
							/>
							<br />
							<br />
				<Controller
						control={control}
						name="phone"
						defaultValue=""
						render={({ ref, field: {...field} }) => (
							<div className="formInput">
							<TextField
								inputRef={ref}
								error={!!errors.phone}
								label={"Phone"}
								size="small"
								helperText={errors.phone ? errors.phone?.message : ""}
								{...field}
							/>
							</div>	
							)}
							/>

						</div>
						<div className="formColumnTwo">
				<Controller
						control={control}
						name="message"
						defaultValue=""
						render={({ ref, field: {...field} }) => (
						<TextField
								inputRef={ref}
								error={!!errors.message}
								label={"Message"}
								size="small"
								multiline
								rows={6}
								{...field}
							/>
							)}

/>				
			<div className="formInputTwo">
	            <div
                {...getRootProps()}
                type="file"
                role="button"
                aria-label="File Upload"
                id="images"
			>
				<input {...getInputProps()} />
				<p>Please send us your existing resume in PDF, TXT or MS Word format.<br/>
					Click in the box below to select the file.<br/>
					Alternatively, drag your file into the box.<br/><br/>
				</p>
				<div {...getRootProps({
					className: `baseStyle
					${isDragActive && 'activeStyle'}
					${isDragAccept && 'acceptStyle'}
					${isDragReject && 'rejectStyle'} `
							})}>
					<p>{isDragAccept ? "Correct file type!" : ""} </p>
					<p>{isDragReject ? "Wrong file type!" : ""}</p>

                    {!!files?.length && (
                        <div className=" ">
                            {files.map(file => {
                                return (
                                    <div key={file.name}>
										{file.name}
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
			</div>
		  </div>
					<div className="formInputTwo submitButton">
						<Button onClick={handleSubmit(onSubmit)} variant={"outlined"}>Submit</Button>
					</div>
				</div>
						</div>
					</form>
				</FormProvider>
	);
};


export default CombinedForm;
