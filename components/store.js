import { configureStore } from '@reduxjs/toolkit';
import quarterReducer from './/wrk/quarterSlice'
import colourReducer from './/sankey/colourSlice'
import nodeFilterReducer from './/sankey/nodeFilterSlice'


export default configureStore({reducer: {
								quarter: quarterReducer,
								colours: colourReducer,
								nodeFilter: nodeFilterReducer
							}});

