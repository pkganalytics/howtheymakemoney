import React from "react";
import { Typography } from '@mui/material';
import Link from 'next/link';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useSelector, useDispatch } from 'react-redux';
import {spleen, liver, heart, all} from './store';

const StackedBarChartsSidePanel = () => {

	const dispatch = useDispatch();

	const handleChange = (e) => {
		console.log((e.target.value))
		if (e.target.value == 'spleen') {dispatch(spleen()); return}
		if (e.target.value == 'liver') {dispatch(liver()); return}
		if (e.target.value == 'heart') {dispatch(heart()); return}
		if (e.target.value == 'all') {dispatch(all()); return}
	}

	return(
			<div className="sidePanel">
<FormControl>
					<Typography variant="h6" gutterBottom={true}>Click the buttons to show just one element, so you can compare values across data or remove elements.  Notice how the other elements adjust their positions smoothly.<br /></Typography>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
	row
    defaultValue="all"
    name="Organ"
	onChange={handleChange}

 >
	  <FormControlLabel
				value="all"
				control={<Radio/>}
				label="All Three"/>

	  <FormControlLabel
				value="spleen"
				control={<Radio/>}
				label="Spleen"/>

	  <FormControlLabel
				value="liver"
				control={<Radio/>}
				label="Liver"/>

	  <FormControlLabel
				value="heart"
				control={<Radio/>}
				label="Heart"/>


  </RadioGroup>
</FormControl>
			</div>

	)
};

export default StackedBarChartsSidePanel;
