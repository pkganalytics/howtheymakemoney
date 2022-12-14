import React, {useState} from "react";
import { Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { setValuesq1, setValuesq2, setValuesq3, setValuesq4, setValuesq5, setValuesq6, setValuesq7, setValuesq8 } from './quarterSlice';
import Box from '@mui/material/Box';
import {q1, q2, q3, q4, q5, q6, q7, q8} from "../data/wrkData";

// Determining slider label, based on string inside data JSON
const _labels = new Array(8);
 _labels[0] = q1.period;
 _labels[1] = q2.period;
 _labels[2] = q3.period;
 _labels[3] = q4.period;
 _labels[4] = q5.period;
 _labels[5] = q6.period;
 _labels[6] = q7.period;
 _labels[7] = q8.period;

const labels = _labels.sort();

const WrkSlider = () => {
const dispatch = useDispatch();

  const [quarter, setQuarter] = useState(100);

	const quarterMarks = [
	{value: 0, label: labels[0]},
	{value: 14, label: labels[1]},
	{value: 28, label: labels[2]},
	{value: 42, label: labels[3]},
	{value: 56, label: labels[4]},
	{value: 70, label: labels[5]},
	{value: 86, label: labels[6]},
	{value: 100, label: labels[7]},
];

  const changeQuarter = (event, quarter) => {
    setQuarter(quarter)
		if (quarter == 100) {dispatch(setValuesq1()); return}
		if (quarter == 86) {dispatch(setValuesq2()); return}
		if (quarter == 70) {dispatch(setValuesq3()); return}
		if (quarter == 56) {dispatch(setValuesq4()); return}
		if (quarter == 42) {dispatch(setValuesq5()); return}
		if (quarter == 28) {dispatch(setValuesq6()); return}
		if (quarter == 14) {dispatch(setValuesq7()); return}
		if (quarter == 0) {dispatch(setValuesq8()); return}
  };


const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  boxShadow: 'none',
  color: theme.palette.text.secondary
}));
	return(
<div className="sidePanel">
 <Box sx={{ width: 300 }}>
				<Slider
					style={{ width: 800 }}
					value={quarter}
					onChange={changeQuarter}
					size='small'
					step={null}
					marks={quarterMarks}
				/>
 </Box>
</div>
	)
};

export default WrkSlider;
