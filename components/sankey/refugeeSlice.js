import { createSlice } from '@reduxjs/toolkit';
import {q322} from "./sankeyData";

const refugeeSlice = createSlice({
	name: 'year',
	initialState: q322,
	reducers: {
		setValues2021: (state) => values2021,
		setValues2020: (state) => values2020,
		setValues2019: (state) => values2019,
		setValues2018: (state) => values2018,
		setValues2017: (state) => values2017
	}
})

export const {setValues2021, setValues2020, setValues2019, setValues2018, setValues2017} = refugeeSlice.actions;

export default refugeeSlice.reducer;
