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
import { setValuesq1, setValuesq2, setValuesq3, setValuesq4, setValuesq5, setValuesq6, setValuesq7, setValuesq8 } from './../sankey/refugeeSlice';
import SidePanelBox from '../../styles/styles';
import Box from '@mui/material/Box';

const TimeSidePanel = () => {

const dispatch = useDispatch();

  const [quarter, setQuarter] = useState(0);

	const quarterMarks = [
	{value: 0, label: '2017'},
	{value: 14, label: '2018'},
	{value: 28, label: '2019'},
	{value: 42, label: '2020'},
	{value: 56, label: '2021'},
	{value: 70, label: '2021'},
	{value: 86, label: '2021'},
	{value: 100, label: '2021'},
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

			<Stack spacing={2}>
				<Item style={{textAlign: "center"}}>
				<Slider
					vertical
					style={{ width: 800 }}
					value={quarter}
					onChange={changeQuarter}
					size='small'
					step={null}
					marks={quarterMarks}
				/>
				</Item>

		</Stack>
</div>
	)
};

export default TimeSidePanel;
