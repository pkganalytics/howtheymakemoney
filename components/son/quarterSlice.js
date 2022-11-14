
import { createSlice } from '@reduxjs/toolkit';
import {q1, q2, q3, q4, q5, q6, q7, q8} from "../data/sonData";

const quarterSlice = createSlice({
	name: 'quarter',
	initialState: q1,
	reducers: {
		setValuesq1: (state) => q1,
		setValuesq2: (state) => q2,
		setValuesq3: (state) => q3,
		setValuesq4: (state) => q4,
		setValuesq5: (state) => q5,
		setValuesq6: (state) => q6,
		setValuesq7: (state) => q7,
		setValuesq8: (state) => q8
	}
})

export const {setValuesq1, setValuesq2, setValuesq3, setValuesq4, setValuesq5, setValuesq6, setValuesq7, setValuesq8
} = quarterSlice.actions;

export default quarterSlice.reducer;
