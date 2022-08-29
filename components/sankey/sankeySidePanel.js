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
import { setValues2021, setValues2020, setValues2019, setValues2018, setValues2017 } from './refugeeSlice';
import { setColour0, setColour1, setColour2, setColour3 } from './colourSlice';

const SankeySidePanel = () => {

const dispatch = useDispatch();

const colours = useSelector(state => state.colours);

const marks = [
	{value: 0, label: '2017'},
	{value: 25, label: '2018'},
	{value: 50, label: '2019'},
	{value: 75, label: '2020'},
	{value: 100, label: '2021'},
];

  const [value, setValue] = useState(0);

  const changeValue = (event, value) => {
    setValue(value)
		if (value == 100) {dispatch(setValues2021()); return}
		if (value == 75) {dispatch(setValues2020()); return}
		if (value == 50) {dispatch(setValues2019()); return}
		if (value == 25) {dispatch(setValues2018()); return}
		if (value == 0) {dispatch(setValues2017()); return}
  };

const handleChange = (e) => {
		if (e.target.value == 'colour0') {dispatch(setColour0()); return}
		if (e.target.value == 'colour1') {dispatch(setColour1()); return}
		if (e.target.value == 'colour2') {dispatch(setColour2()); return}
		if (e.target.value == 'colour3') {dispatch(setColour3()); return}
	}


const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  boxShadow: 'none',
  textAlign: 'center',
  color: theme.palette.text.secondary
}));
	return(
<div className="sidePanel">


	<Typography>
		This shows the flow of refugees from their country of origin to their state of destination in the US.
		<br /><br />
The number of people moving in a given year is shown by the thickness of the link and by the height and colour of the node.
		<br /><br />
	</Typography>
	<Stack spacing={2}>
        <Item>
      <Slider
		style={{ width: 300 }}
		value={value}
		onChange={changeValue}
		size='small'
		step={null}
        marks={marks}
      />
</Item>
        <Item>
<FormControl>
	<FormLabel>Colour Options</FormLabel>
	 <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
	row
    defaultValue="colour0"
    name="Colour"
	onChange={handleChange}
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

      </Stack>
</div>

	)
};

export default SankeySidePanel;
