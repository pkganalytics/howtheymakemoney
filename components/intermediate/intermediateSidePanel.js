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

const SankeySidePanel = () => {



const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  boxShadow: 'none',
  color: theme.palette.text.secondary
}));
	return(
		<div>
			<ul className="mainList">
<li className="mainList">Using Intermediate Nodes</li>
				More complex Sankey diagrams can be created using intermediate nodes.  For example, this diagram traces the production (on the left) and use (on the right) of various types of energy.  The central nodes show how this energy is stored or transmitted.  These are imporant bottlenecks in the energy market.  By adding them to the diagram we can look at the data in a new light.
			  		</ul>

</div>

	)
};


export default SankeySidePanel;
