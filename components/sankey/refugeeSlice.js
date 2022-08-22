import { createSlice } from '@reduxjs/toolkit';
import {values2021, values2020, values2019} from "./sankeyData";

const refugeeSlice = createSlice({
	name: 'year',
	initialState: values2019,
	reducers: {
		setValues2021: (state) => values2021,
		setValues2020: (state) => values2020,
		setValues2019: (state) => values2019
	}
})

export const {setValues2021, setValues2020, setValues2019} = refugeeSlice.actions;

export default refugeeSlice.reducer;
