import {
  CREATE_RESTAURANT_REQUEST,
  CREATE_RESTAURANT_SUCCESS,
  CREATE_RESTAURANT_FAIL,
} from "../actionTypes";

const initialState = {
  name: null,
  description: null,
  address: null,
  noOfTables: null,
  menu: null,
  images: null,
  schedule: null,
};

const allRestaurantsInitialState = {
  restaurants: [],
  error: null,
  loading: null,
};



export const restaurantReducer = (prevState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_RESTAURANT_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case CREATE_RESTAURANT_SUCCESS:
      return {
        name: payload.name,
        description: payload.description,
        address: payload.address,
        noOfTables: payload.noOfTables,
        menu: payload.menu,
        images: payload.images,
        schedule: payload.schedule,
      };

    case CREATE_RESTAURANT_FAIL:
      return {
        name: null,
        description: null,
        address: null,
        noOfTables: null,
        menu: null,
        images: null,
        schedule: null,
      };

    default:
      return prevState;
  }
};

export const restaurantsReducer = (
  prevState = allRestaurantsInitialState,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_ALL_RESTAURNANTS_REQUEST":
      return { ...prevState, loading: true };
    case "GET_ALL_RESTAURANTS_SUCCESS":
      return { ...prevState, restaurants: payload.data };
    case "GET_ALL_RESTAURNANTS_FAIL":
      return [];
    default:
      return prevState;
  }
};
