import {
  CREATE_HOTEL_REQUEST,
  CREATE_HOTEL_SUCCESS,
  CREATE_HOTEL_FAIL,
  UPDATE_HOTEL_REQUEST,
  UPDATE_HOTEL_SUCCESS,
  UPDATE_HOTEL_FAIL,
  DELETE_HOTEL_REQUEST,
  DELETE_HOTEL_SUCCESS,
  DELETE_HOTEL_FAIL,
  GET_HOTEL_BY_ID_SUCCESS,
} from "../actionTypes";

const initialState = {
  hotelID: null,
  hotelName: null,
  description: null,
  images: null,
  price: null,
  error: false,
  loading: false,
};

export const hotelReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_HOTEL_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case CREATE_HOTEL_SUCCESS:
      return {
        hotelID: payload.hotelID,
        hotelName: payload.hotelName,
        price: payload.price,
        description: payload.description,
        images: payload.images,
      };

    case CREATE_HOTEL_FAIL:
      return {
        hotelID: null,
        hotelName: null,
        price: null,
        description: null,
        images: null,
        error: false,
        loading: false,
      };

    case UPDATE_HOTEL_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case UPDATE_HOTEL_SUCCESS:
      return {
        hotelID: payload.hotelID,
        hotelName: payload.hotelName,
        price: payload.price,
        description: payload.description,
        images: payload.images,
      };

    case UPDATE_HOTEL_FAIL:
      return {
        hotelID: null,
        hotelName: null,
        price: null,
        description: null,
        images: null,
        error: false,
        loading: false,
      };

    case DELETE_HOTEL_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case DELETE_HOTEL_SUCCESS:
      return {
        hotelID: null,
        hotelName: null,
        price: null,
        description: null,
        images: null,
        error: false,
        loading: false,
      };

    case DELETE_HOTEL_FAIL:
      return {
        hotelID: payload.hotelID,
        hotelName: payload.hotelName,
        price: payload.price,
        description: payload.description,
        images: payload.images,
      };

    case GET_HOTEL_BY_ID_SUCCESS:
      return {
        hotelID: payload.hotelID,
        hotelName: payload.hotelName,
        price: payload.price,
        description: payload.description,
        images: payload.images,
      };

    default:
      return prevState;
  }
};
