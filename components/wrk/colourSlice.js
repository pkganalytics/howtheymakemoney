import { createSlice } from '@reduxjs/toolkit';
import { colours } from "./sankeyData";

const colourSlice = createSlice({
	name: 'colours',
	initialState: colours[3],
	reducers: {
		setColour0: (state) => colours[0],
		setColour1: (state) => colours[1],
		setColour2: (state) => colours[2],
		setColour3: (state) => colours[3],
	}
})

export const {setColour0, setColour1, setColour2, setColour3} = colourSlice.actions;

export default colourSlice.reducer;
