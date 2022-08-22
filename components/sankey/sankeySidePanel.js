import React, {useState} from "react";
import { Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Link from 'next/link';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useSelector, useDispatch } from 'react-redux';
import { setValues2021, setValues2020, setValues2019, setValues2018, setValues2017 } from './refugeeSlice';

const SankeySidePanel = () => {

const dispatch = useDispatch();

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
		if (value == 0) {dispatch(setValues2018()); return}
  };

	return(
<div className="sidePanel">
	<br />
	<Typography>
		This shows the flow of refugees from their country of origin to their state of destination in the US.
		<br /><br />
The number of people moving in a given year is shown by the thickness of the link and by the height and colour of the node.
		<br /><br />
	</Typography>
<FormControl>

      <Slider
		style={{ width: 300 }}
		value={value}
		onChange={changeValue}
		size='small'
		step={null}
        marks={marks}
      />


</FormControl>

</div>

	)
};

export default SankeySidePanel;
