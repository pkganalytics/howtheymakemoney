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
import Box from '@mui/material/Box';

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
		<Box sx={{pr: '1.5rem'}}>

	<Typography>
				Sankey diagrams are particularly useful for showing changes over time.  In this example, the number of refugees from each origin country is represented by the size of the node.  The nodes are also arranged in order.  This means that, as we move forwards or backwards in time, some nodes move up and down relative to each other.  The movement is made much clearer because the flow lines are animated: this means that there is not an abrupt change, and it's easier for the eyes to follow a particular node or flow-line.
		<br/><br/>
While the sizes of the nodes and the widths of the flow lines are useful for getting a general idea about the number of refugees in each category, it's sometimes useful to have actual numbers.  Mousing over each flow line shows the number of people in that category (for example, those people traveling from Afghanistan to California).  Mousing over each node shows the total number of people either coming from that country or moving to that state.
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

      </Stack>
		</Box>
	)
};

export default TimeSidePanel;
