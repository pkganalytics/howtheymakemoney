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
import { setValues2021, setValues2020, setValues2019, setValues2018, setValues2017 } from '../sankey/refugeeSlice';
import SidePanelBox from '../../styles/styles';

const TimeSidePanel = () => {

const dispatch = useDispatch();

  const [year, setYear] = useState(0);

	const yearMarks = [
	{value: 0, label: '2017'},
	{value: 25, label: '2018'},
	{value: 50, label: '2019'},
	{value: 75, label: '2020'},
	{value: 100, label: '2021'},
];
  const changeYear = (event, year) => {
    setYear(year)
		if (year == 100) {dispatch(setValues2021()); return}
		if (year == 75) {dispatch(setValues2020()); return}
		if (year == 50) {dispatch(setValues2019()); return}
		if (year == 25) {dispatch(setValues2018()); return}
		if (year == 0) {dispatch(setValues2017()); return}
  };


const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  boxShadow: 'none',
  color: theme.palette.text.secondary
}));
	return(
		<SidePanelBox>
			<Typography>
			Sankey diagrams are particularly useful for showing changes over time.  Using the slider below, it's possible to see data for from 2017-21.
			<br /><br />
			Because the rectangles representing the origin and destination of the refugees are sized according to the number of people, and are arranged in order, some of them move up and down relative to each other as the numbers change from year to year.  In order to make these changes easier to follow, the movements are transitioned in over a few seconds.  This means that it's easy to keep track of an element of interest.
		</Typography>

			<Stack spacing={2}>
				<Item style={{textAlign: "center"}}>
				<Slider
					style={{ width: 300 }}
					value={year}
					onChange={changeYear}
					size='small'
					step={null}
					marks={yearMarks}
				/>
				</Item>

		</Stack>
		</SidePanelBox>
	)
};

export default TimeSidePanel;
