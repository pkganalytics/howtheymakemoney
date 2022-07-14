import React from "react";
import { Typography } from '@mui/material';
import Link from 'next/link';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useSelector, useDispatch } from 'react-redux';
import { Data2021, Data2020, Data2019 } from './refugeeSlice';

const SankeySidePanel = () => {

	const dispatch = useDispatch();

	const handleChange = (e) => {
		console.log((e.target.value))
		if (e.target.value == 'Data2021') {dispatch(Data2021()); return}
		if (e.target.value == 'Data2020') {dispatch(Data2020()); return}
		if (e.target.value == 'Data2019') {dispatch(Data2019()); return}
	}

	return(
			<div className="sidePanel">
<FormControl>
					<Typography variant="h6" gutterBottom={true}>Click the buttons to show just one element, so you can compare values across data or remove elements.  Notice how the other elements adjust their positions smoothly.<br /></Typography>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
	row
    defaultValue="All Three"
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

export default SankeySidePanel;
