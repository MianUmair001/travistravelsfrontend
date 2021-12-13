import {
  CREATE_DISH_FAIL,
  CREATE_DISH_REQUEST,
  CREATE_DISH_SUCCESS,
} from "../actionTypes";

const initialState = {
  name: null,
  description: null,
  price: null,
  images: null,
};
const allDishesInitialState = { dishes: [], error: null, loading: null };

export const dishReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_DISH_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case CREATE_DISH_SUCCESS:
      return {
        name: payload.name,
        description: payload.description,
        price: payload.price,
        images: payload.images,
      };

    case CREATE_DISH_FAIL:
      return {
        name: null,
        description: null,
        price: null,
        images: null,
      };

    default:
      return prevState;
  }
};

export const dishesReducer = (prevState = allDishesInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_ALL_DISHES_Request":
      return { ...prevState, loading: true };
    case "GET_ALL_DISHES_SUCCESS":
      return { ...prevState, dishes: payload.data };
    case "GET_ALL_DISHES_FAIL":
      return [];
    default:
      return prevState;
  }
};
