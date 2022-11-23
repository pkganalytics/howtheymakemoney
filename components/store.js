import { configureStore } from '@reduxjs/toolkit';
import wrkquarterReducer from './wrk/quarterSlice'
import ipquarterReducer from './ip/quarterSlice'
import cclbquarterReducer from './cclb/quarterSlice'
import pkgquarterReducer from './pkg/quarterSlice'
import amcrquarterReducer from './amcr/quarterSlice'
import gpkquarterReducer from './gpk/quarterSlice'
import sonquarterReducer from './son/quarterSlice'
import seequarterReducer from './see/quarterSlice'
import vrtvquarterReducer from './vrtv/quarterSlice'
import ballquarterReducer from './ball/quarterSlice'
import ambpquarterReducer from './ambp/quarterSlice'
import gefquarterReducer from './gef/quarterSlice'



export default configureStore({reducer: {
								wrkquarter: wrkquarterReducer,
								ipquarter: ipquarterReducer,
								cclbquarter: cclbquarterReducer,
								pkgquarter: pkgquarterReducer,
								amcrquarter: amcrquarterReducer,
								gpkquarter: gpkquarterReducer,
								sonquarter: sonquarterReducer,
								seequarter: seequarterReducer,
								vrtvquarter: vrtvquarterReducer,
								ballquarter: ballquarterReducer,
								ambpquarter: ambpquarterReducer,
								gefquarter: gefquarterReducer
							}});

