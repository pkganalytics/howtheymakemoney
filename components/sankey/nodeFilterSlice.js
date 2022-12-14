import { createSlice } from '@reduxjs/toolkit';

const nodeFilterSlice = createSlice({
	name: 'nodeFilter',
	initialState: 14,
	reducers: {
		setNodeFilter3: (state) => 3,
		setNodeFilter4: (state) => 4,
		setNodeFilter5: (state) => 5,
		setNodeFilter6: (state) => 6,
		setNodeFilter7: (state) => 7
	}
})

export const {setNodeFilter3, setNodeFilter4, setNodeFilter5, setNodeFilter6, setNodeFilter7} = nodeFilterSlice.actions;

export default nodeFilterSlice.reducer;
