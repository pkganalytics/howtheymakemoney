import { createSlice } from '@reduxjs/toolkit';
import {values2021} from "./sankeyData";

const previousRefugeeSlice = createSlice({
	name: 'previousYear',
	initialState: values2021,
	reducers: {
		setPreviousValues2021: state => state.year,
		setPreviousValues2020: state => state.year,
		setPreviousValues2019: state => state.year
	}
})

// export const {setPreviousValues2021, setPreviousValues2020, setPreviousValues2019} = previousRefugeeSlice.actions;

export default previousRefugeeSlice.reducer;
