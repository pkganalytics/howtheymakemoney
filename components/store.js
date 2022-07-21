import { configureStore } from '@reduxjs/toolkit';
import organReducer from'.//barcharts/organSlice'
import refugeeReducer from './/sankey/refugeeSlice'
import previousRefugeeReducer from './/sankey/previousRefugeeSlice'


export default configureStore({reducer: {
								organ: organReducer,
								year: refugeeReducer
							}});

