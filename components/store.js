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

const refugeeSlice = createSlice({
	name: 'year',
	initialState: ['2021'],
	reducers: {
		Data2021: (state) => ['2021'],
		Data2020: (state) => ['2020'],
		Data2019: (state) => ['2019'],
	}
})

export const {spleen, liver, heart, all} = organSlice.actions;
export const {Data2021, Data2020, Data2019} = refugeeSlice.actions;
export default configureStore({reducer: {
								dataSelection: organSlice.reducer,
								year: refugeeSlice.reducer
							}});
