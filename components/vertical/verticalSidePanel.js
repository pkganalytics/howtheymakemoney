import React, {useState} from "react";
import { Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { setColour0, setColour1, setColour2, setColour3 } from '../sankey/colourSlice';
import Box from '@mui/material/Box';


const SankeySidePanel = () => {

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  boxShadow: 'none',
  color: theme.palette.text.secondary
}));
	return(
		<div>
			<Box sx={{pr: '1.5rem', pt: '1rem'}}>
			<Typography>
This diagram adds extra nodes which represent the ways in which refugees are entering the US.  Note that the topological mapping of these nodes corresponds clearly and simply with the physical movement of the people themselves: they start in their countries of origin; they enter the US through a port, airport or land border, and they end up in a particular state.  As with the previous diagrams, we can see the flow of people both through the thickness of the links and from the numbers which appear when we hover over each element using a mouse.
			</Typography>
		</Box>

</div>

	)
};


export default SankeySidePanel;
