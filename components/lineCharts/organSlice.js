import { createSlice } from '@reduxjs/toolkit';


const organSlice = createSlice({
	name: 'organ',
	initialState: ["Spleen", "Liver", "Heart"],
	reducers: {
		all: (state) => ["Spleen", "Liver", "Heart"],
		spleen: (state) => ["Spleen"],
		liver: (state) => ["Liver"],
		heart: (state) => ["Heart"],
	}
})
export const {spleen, liver, heart, all} = organSlice.actions;

export default organSlice.reducer;


