import React from "react";
import { Typography } from '@mui/material';
import Link from 'next/link';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useSelector, useDispatch } from 'react-redux';
import { setValues2021, setValues2020, setValues2019 } from './refugeeSlice';

const SankeySidePanel = () => {

	const dispatch = useDispatch();

	const handleChange = (e) => {
		if (e.target.value == 'values2021') {dispatch(setValues2021()); return}
		if (e.target.value == 'values2020') {dispatch(setValues2020()); return}
		if (e.target.value == 'values2019') {dispatch(setValues2019()); return}
	}

	return(
			<div className="sidePanel">
<FormControl>
					<Typography variant="h6" gutterBottom={true}>Click the buttons to show just one element, so you can compare values across data or remove elements.  Notice how the other elements adjust their positions smoothly.<br /></Typography>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
	row
    defaultValue="values2021"
    name="Year"
	onChange={handleChange}

 >
	  <FormControlLabel
				value="values2021"
				control={<Radio/>}
				label="2021"/>

	  <FormControlLabel
				value="values2020"
				control={<Radio/>}
				label="2020"/>

	  <FormControlLabel
				value="values2019"
				control={<Radio/>}
				label="2019"/>


  </RadioGroup>
</FormControl>
			</div>

	)
};

export default SankeySidePanel;
