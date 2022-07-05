import { createSlice, configureStore } from '@reduxjs/toolkit';

const organSlice = createSlice({
	name: 'dataSelection',
	initialState: ["Spleen", "Liver", "Heart"],
	reducers: {
		all: (state) => ["Spleen", "Liver", "Heart"],
		spleen: (state) => ["Spleen"],
		liver: (state) => ["Liver"],
		heart: (state) => ["Heart"],
	}
})


export const {spleen, liver, heart, all} = organSlice.actions;
export default configureStore({reducer: organSlice.reducer});
