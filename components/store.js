import { configureStore } from '@reduxjs/toolkit';
import refugeeReducer from './/sankey/refugeeSlice'
import colourReducer from './/sankey/colourSlice'
import nodeFilterReducer from './/sankey/nodeFilterSlice'


export default configureStore({reducer: {
								year: refugeeReducer,
								colours: colourReducer,
								nodeFilter: nodeFilterReducer
							}});

