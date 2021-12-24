import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authReducer } from "../auth.reducer";
import { profileReducer } from "../profile.reducer";
import { hotelReducer, hotelsReducer } from "../hotel.reducer";
import { transportReducer, transportsReducer } from "../transport.reducer";
import { plan_reducer } from "../plan.reducer";
import { tourReducer, toursReducer } from "../tour.reducer";
import { restaurantReducer, restaurantsReducer } from "../restaurant.reducer";
import { placeReducer, placesReducer, place_reducer } from "../places.reducer";
import { dishesReducer, dishReducer } from "../dishes.reducer";
import { feedbackReducer, feedbacksReducer } from "../feedback.reducer";

import {
  allPostsReducer,
  postsByUserReducer,
  postReducer,
} from "../post.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "auth",
    "profile",
    "hotel",
    "hotels",
    "transport",
    "transports",
    "place",
    "places",
    "plan",
    "dish",
    "dishes",
    "tour",
    "tours",
    "restaurant",
    "restaurants",
    "post",
    "posts",
    "postByUser",
    "feedback",
    "feedbacks",
  ],
};

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  hotel: hotelReducer,
  hotels: hotelsReducer,
  transport: transportReducer,
  transports: transportsReducer,
  plan: plan_reducer,
  tours: toursReducer,
  tour: tourReducer,
  restaurant: restaurantReducer,
  restaurants: restaurantsReducer,
  place: placeReducer,
  places: placesReducer,
  dishes: dishesReducer,
  dish: dishReducer,
  feedback: feedbackReducer,
  feedbacks: feedbacksReducer,
  post: postReducer,
  posts: allPostsReducer,
  postByUser: postsByUserReducer,
});

export default persistReducer(persistConfig, rootReducer);
