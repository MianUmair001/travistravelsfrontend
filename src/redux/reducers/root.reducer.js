import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import { persistReducer } from 'redux-persist'


import storage from "redux-persist/lib/storage";
import { profileReducer } from "./profile.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'profile']
  }
   
  const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer
  });
  
  export default persistReducer(persistConfig, rootReducer)