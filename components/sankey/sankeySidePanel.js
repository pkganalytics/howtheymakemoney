import React, {useState} from "react";
import { Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
// import Box from '@mui/material/Box';
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

const marks = [
	{value: 100, label: '2021'},
	{value: 50, label: '2020'},
	{value: 0, label: '2019'}
];

  const [value, setValue] = useState(100);

  const changeValue = (event, value) => {
    setValue(value)
		if (value == 100) {dispatch(setValues2021()); return}
		if (value == 50) {dispatch(setValues2020()); return}
		if (value == 0) {dispatch(setValues2019()); return}
  };

	return(
<div className="sidePanel">
<FormControl>

      <Slider
		style={{ width: 300 }} value={value} onChange={changeValue}
		step={null}
        marks={marks}
      />
</FormControl>

</div>

	)
};

export default SankeySidePanel;
