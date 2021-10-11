import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";

import { authReducer } from "../auth.reducer";
import { profileReducer } from "../profile.reducer";
import { hotelReducer } from '../hotel.reducer'
import { transportReducer } from '../transport.reducer'
import { plan_reducer } from '../plan.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'profile', 'hotel', 'transport', 'plan']
  }
   
  const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    hotel: hotelReducer,
    transport: transportReducer,
    plan: plan_reducer,
  });
  
  export default persistReducer(persistConfig, rootReducer)