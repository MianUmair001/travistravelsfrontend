import {
  CREATE_PLACES_FAIL,
  CREATE_PLACES_REQUEST,
  CREATE_PLACES_SUCCESS,
} from "../actionTypes";

const initialState = {
  name: "",
  description: "",
  images: [],
};
const allPlacesInitialState = { places: [], error: null, loading: null };

export const placeReducer = (prevState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_PLACES_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case CREATE_PLACES_SUCCESS:
      return {
        name: payload.name,
        description: payload.description,
        images: payload.images,
      };

    case CREATE_PLACES_FAIL:
      return {
        name: null,
        description: null,
        images: null,
      };
    default:
      return prevState;
  }
};

export const placesReducer = (prevState = allPlacesInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_ALL_PLACES_Request":
      return { ...prevState, loading: true };
    case "GET_ALL_PLACES_SUCCESS":
      return { ...prevState, places: payload.data };
    case "GET_ALL_PLACES_FAIL":
      return [];
    default:
      return prevState;
  }
};
