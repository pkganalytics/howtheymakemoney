import React, {useState} from "react";
import { Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import {setNodeFilter3, setNodeFilter4, setNodeFilter5, setNodeFilter6, setNodeFilter7} from '../sankey/nodeFilterSlice';
import Box from '@mui/material/Box';

const SubsetSidePanel = () => {

const dispatch = useDispatch();


const sourceMarks = [
	{value: 0, label: 'All'},
	{value: 25, label: 'Top 6'},
	{value: 50, label: 'Top 5'},
	{value: 75, label: 'Top 4'},
	{value: 100, label: 'Top 3'}
];

  const [sources, setSources] = useState(0);


  const changeSources = (event, sources) => {
		setSources(sources);
		if (sources == 100) {dispatch(setNodeFilter3()); return}
		if (sources == 75) {dispatch(setNodeFilter4()); return}
		if (sources == 50) {dispatch(setNodeFilter5()); return}
		if (sources == 25) {dispatch(setNodeFilter6()); return}
		if (sources == 0) {dispatch(setNodeFilter7()); return}
  };

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  boxShadow: 'none',
  color: theme.palette.text.secondary
}));
	return(
<div className="sidePanel">


	<Box sx={{pr: '1.5rem', pt: '1rem'}}>
	<Typography>
Sometimes it's useful to exclude some of the less important data.  For example, it might be useful to see just the top three source countries.  Alteratively, it might be interesting to exclude one particular country (for example, it might be useful to see all refugee flows excluding those from a particular country.)
		<br /><br />
	</Typography>
      <Slider
		style={{ width: 300 }}
		value={sources}
		onChange={changeSources}
		size='small'
		step={null}
        marks={sourceMarks}
      />
	</Box>
</div>

	)
};

export default SubsetSidePanel;

