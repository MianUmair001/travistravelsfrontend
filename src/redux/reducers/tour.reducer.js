import {
  CREATE_TOUR_REQUEST,
  CREATE_TOUR_SUCCESS,
  CREATE_TOUR_FAIL,
} from "../actionTypes";

const initialState = {
  name: null,
  description: null,
  tourType: null,
  startLocation: null,
  endLocation: null,
  price: null,
  startDate: null,
  endDate: null,
  status: null,
  places: null,
  images: null,
  loading: null,
  error: null,
};
const allToursInitialState = { tours: [], error: null, loading: null };

export const tourReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TOUR_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case CREATE_TOUR_SUCCESS:
      return {
        name: payload.name,
        description: payload.description,
        tourType: payload.tourType,
        startLocation: payload.startLocation,
        endLocation: payload.endLocation,
        price: payload.price,
        startDate: payload.startDate,
        endDate: payload.endDate,
        status: payload.status,
        places: payload.places,
        images: payload.images,
      };

    case CREATE_TOUR_FAIL:
      return {
        name: null,
        description: null,
        tourType: null,
        startLocation: null,
        endLocation: null,
        price: null,
        startDate: null,
        endDate: null,
        status: null,
        places: null,
        images: null,
      };

    default:
      return prevState;
  }
};

export const toursReducer = (prevState = allToursInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_ALL_TOURS_Request":
      return { ...prevState, loading: true };
    case "GET_ALL_TOURS_SUCCESS":
      return { ...prevState, tours: payload.data };
    case "GET_ALL_TOURS_FAIL":
      return [];
    default:
      return prevState;
  }
};
