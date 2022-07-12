import { configureStore } from '@reduxjs/toolkit';
import organReducer from'.//barcharts/organSlice'
import refugeeReducer from './/sankey/refugeeSlice'



export default configureStore({reducer: {
								dataSelection: organReducer,
								year: refugeeReducer
							}});

