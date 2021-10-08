import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import { profileReducer } from "./profile.reducer";
import { plan_reducer } from "./plan.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "profile", "plan"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  plan: plan_reducer,
});

export default persistReducer(persistConfig, rootReducer);
