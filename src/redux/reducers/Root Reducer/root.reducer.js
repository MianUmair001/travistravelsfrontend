import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";

import { authReducer } from "../auth.reducer";
import { profileReducer } from "../profile.reducer";
import { hotelReducer } from '../hotel.reducer'
import { transportReducer } from '../transport.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'profile', 'hotel', 'transport']
  }
   
  const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    hotel: hotelReducer,
    transport: transportReducer,
  });
  
  export default persistReducer(persistConfig, rootReducer)