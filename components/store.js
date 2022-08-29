import { configureStore } from '@reduxjs/toolkit';
import organReducer from'.//barcharts/organSlice'
import refugeeReducer from './/sankey/refugeeSlice'
import colourReducer from './/sankey/colourSlice'
import nodeFilterReducer from './/sankey/nodeFilterSlice'


export default configureStore({reducer: {
								organ: organReducer,
								year: refugeeReducer,
								colours: colourReducer,
								nodeFilter: nodeFilterReducer
							}});

