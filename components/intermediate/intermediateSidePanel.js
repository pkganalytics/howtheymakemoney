import React, {useState} from "react";
import { Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { setColour0, setColour1, setColour2, setColour3 } from '../sankey/colourSlice';

const SankeySidePanel = () => {

const dispatch = useDispatch();

const colours = useSelector(state => state.colours);

const changeColour = (e) => {
		if (e.target.value == 'colour0') {dispatch(setColour0()); return}
		if (e.target.value == 'colour1') {dispatch(setColour1()); return}
		if (e.target.value == 'colour2') {dispatch(setColour2()); return}
		if (e.target.value == 'colour3') {dispatch(setColour3()); return}
	}


const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  boxShadow: 'none',
  color: theme.palette.text.secondary
}));
	return(
		<div>
			<ul className="mainList">
<li className="mainList">Using Intermediate Nodes</li>
				More complex Sankey diagrams can be created using intermediate nodes.  For example, this diagram traces the production (on the left) and use (on the right) of various types of energy.  The central nodes show how this energy is stored or transmitted.  These are imporant bottlenecks in the energy market.  By adding them to the diagram we can look at the data in a new light.
			  		</ul>

        <Item>
<FormControl>
	<FormLabel>Colour Options</FormLabel>
	 <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
	row
    defaultValue="colour0"
    name="Colour"
	onChange={changeColour}
 >
	  <FormControlLabel
				value="colour0"
				control={<Radio/>}
				label="Number shown as color scale (black = 0)"/>

	  <FormControlLabel
				value="colour1"
				control={<Radio/>}
				label="Number shown as color scale (red/blue = 0)"/>

	  <FormControlLabel
				value="colour2"
				control={<Radio/>}
				label="Colour scale (green = 0)"/>

	  <FormControlLabel
				value="colour3"
				control={<Radio/>}
				label="Colour scale (red/blue = 0; green = max)"/>

  </RadioGroup>

</FormControl>

</Item>
</div>

	)
};


export default SankeySidePanel;
