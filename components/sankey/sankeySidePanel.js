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
import {setNodeFilter3, setNodeFilter4, setNodeFilter5, setNodeFilter6} from './nodeFilterSlice';

const SankeySidePanel = () => {

const dispatch = useDispatch();

const colours = useSelector(state => state.colours);

const yearMarks = [
	{value: 0, label: '2017'},
	{value: 25, label: '2018'},
	{value: 50, label: '2019'},
	{value: 75, label: '2020'},
	{value: 100, label: '2021'},
];

const sourceMarks = [
	{value: 0, label: 'All'},
	{value: 25, label: 'Top 5'},
	{value: 50, label: 'Top 4'},
	{value: 75, label: 'Top 3'}
];

  const [year, setYear] = useState(0);
  const [sources, setSources] = useState(0);


  const changeYear = (event, year) => {
    setYear(year)
		if (year == 100) {dispatch(setValues2021()); return}
		if (year == 75) {dispatch(setValues2020()); return}
		if (year == 50) {dispatch(setValues2019()); return}
		if (year == 25) {dispatch(setValues2018()); return}
		if (year == 0) {dispatch(setValues2017()); return}
  };

const changeColour = (e) => {
		if (e.target.value == 'colour0') {dispatch(setColour0()); return}
		if (e.target.value == 'colour1') {dispatch(setColour1()); return}
		if (e.target.value == 'colour2') {dispatch(setColour2()); return}
		if (e.target.value == 'colour3') {dispatch(setColour3()); return}
	}

  const changeSources = (event, sources) => {
    setSources(sources)
		if (sources == 75) {dispatch(setNodeFilter3()); return}
		if (sources == 50) {dispatch(setNodeFilter4()); return}
		if (sources == 25) {dispatch(setNodeFilter5()); return}
		if (sources == 0) {dispatch(setNodeFilter6()); return}
  };

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
		value={year}
		onChange={changeYear}
		size='small'
		step={null}
        marks={yearMarks}
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

      <Slider
		style={{ width: 300 }}
		value={sources}
		onChange={changeSources}
		size='small'
		step={null}
        marks={sourceMarks}
      />
      </Stack>
</div>

	)
};

export default SankeySidePanel;
