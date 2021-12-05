import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authReducer } from "../auth.reducer";
import { profileReducer } from "../profile.reducer";
import { hotelReducer, hotelsReducer } from "../hotel.reducer";
import { transportReducer } from "../transport.reducer";
import { plan_reducer } from "../plan.reducer";
import { tourReducer, toursReducer } from "../tour.reducer";
import { restaurantReducer, restaurantsReducer } from "../restaurant.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "profile", "hotel", "transport", "plan"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  hotel: hotelReducer,
  hotels: hotelsReducer,
  transport: transportReducer,
  plan: plan_reducer,
  tours: toursReducer,
  tour: tourReducer,
  restaurant: restaurantReducer,
  restaurants: restaurantsReducer,
});

export default persistReducer(persistConfig, rootReducer);
