import { configureStore } from '@reduxjs/toolkit';
import quarterReducer from './wrk/quarterSlice'


export default configureStore({reducer: {
								quarter: quarterReducer
							}});

