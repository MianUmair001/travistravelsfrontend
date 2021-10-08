import {
  CREATE_PROFILE_REQUEST,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  DELETE_PROFILE_SUCCESS,
  DELETE_PROFILE_REQUEST,
  DELETE_PROFILE_FAIL,
} from "../actionTypes";

const initialState = {
  auth: null,
  firstName: null,
  lastName: null,
  username: null,
  DateOfBirth: null,
  phone: null,
  address: {
    addressName: null,
    country: null,
    streetAddress: null,
    coordinates: null,
  },
  error: false,
  loading: false,
};

export const profileReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PROFILE_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case CREATE_PROFILE_SUCCESS:
      return {
        address: {
          addressName: payload.address.addressName,
          country: payload.address.country,
          streetAddress: payload.address.streetAddress,
          coordinates: payload.address.coordinates,
        },
        firstName: payload.firstName,
        lastName: payload.lastName,
        DateOfBirth: payload.DateOfBirth,
        phone: payload.phone,
        username: payload.username,
        auth: payload.auth,
        error: false,
      };

    case CREATE_PROFILE_FAIL:
      return {
        auth: null,
        firstName: null,
        lastName: null,
        username: null,
        DateOfBirth: null,
        phone: null,
        address: {
          addressName: null,
          country: null,
          streetAddress: null,
          coordinates: null,
        },
        error: true,
        loading: false,
      };

    case UPDATE_PROFILE_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case UPDATE_PROFILE_SUCCESS:
      return {
        address: {
          addressName: payload.address.addressName,
          country: payload.address.country,
          streetAddress: payload.address.streetAddress,
          coordinates: payload.address.coordinates,
        },
        firstName: payload.firstName,
        lastName: payload.lastName,
        DateOfBirth: payload.DateOfBirth,
        phone: payload.phone,
        username: payload.username,
        auth: payload.auth,
        error: false,
      };

    case UPDATE_PROFILE_FAIL:
      return {
        auth: null,
        firstName: null,
        lastName: null,
        username: null,
        DateOfBirth: null,
        phone: null,
        address: {
          addressName: null,
          country: null,
          streetAddress: null,
          coordinates: null,
        },
        error: true,
        loading: false,
      };

    case DELETE_PROFILE_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case DELETE_PROFILE_SUCCESS:
      return {
        auth: null,
        firstName: null,
        lastName: null,
        username: null,
        DateOfBirth: null,
        phone: null,
        address: {
          addressName: null,
          country: null,
          streetAddress: null,
          coordinates: null,
        },
        error: true,
        loading: false,
      };

    case DELETE_PROFILE_FAIL:
      return {
        address: {
          addressName: payload.address.addressName,
          country: payload.address.country,
          streetAddress: payload.address.streetAddress,
          coordinates: payload.address.coordinates,
        },
        firstName: payload.firstName,
        lastName: payload.lastName,
        DateOfBirth: payload.DateOfBirth,
        phone: payload.phone,
        username: payload.username,
        auth: payload.auth,
        error: false,
      };

    default:
      return prevState;
  }
};
