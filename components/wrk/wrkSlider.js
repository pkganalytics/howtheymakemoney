import React, {useState} from "react";
import { Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { setValuesq1, setValuesq2, setValuesq3, setValuesq4, setValuesq5, setValuesq6, setValuesq7, setValuesq8 } from './quarterSlice';
import {q1, q2, q3, q4, q5, q6, q7, q8} from "../data/wrkData";
import Box from '@mui/material/Box';

const label1 = q1.period;
const label2 = q2.period;
const label3 = q3.period;
const label4 = q4.period;
const label5 = q5.period;
const label6 = q6.period;
const label7 = q7.period;
const label8 = q8.period;


const TimeSidePanel = () => {
const dispatch = useDispatch();

  const [quarter, setQuarter] = useState(100);

	const quarterMarks = [
	{value: 0, label: label8},
	{value: 14, label: label7},
	{value: 28, label: label6},
	{value: 42, label: label5},
	{value: 56, label: label4},
	{value: 70, label: label3},
	{value: 86, label: label2},
	{value: 100, label: label1},
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

export default TimeSidePanel;
