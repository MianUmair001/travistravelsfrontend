import {
  CREATE_TRANSPORT_REQUEST,
  CREATE_TRANSPORT_SUCCESS,
  CREATE_TRANSPORT_FAIL,
} from "../actionTypes";

const initialState = {
  transportID: null,
  transportName: null,
  modelName: null,
  description: null,
  transportType: null,
  numberOfSeats: null,
  pricePerKillomter: null,
  airConditioner: null,
  availability: null,
  images: null,
  loading: false,
  error: false,
};
const allToursInitialState = { transports: [], error: null, loading: null };

export const transportReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TRANSPORT_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case CREATE_TRANSPORT_SUCCESS:
      return {
        transportID: payload.transportID,
        transportName: payload.transportName,
        modelName: payload.modelName,
        description: payload.description,
        transportType: payload.transportType,
        numberOfSeats: payload.numberOfSeats,
        pricePerKillomter: payload.pricePerKillomter,
        airConditioner: payload.airConditioner,
        availability: payload.availability,
        images: payload.images,
        loading: false,
        error: false,
      };

    case CREATE_TRANSPORT_FAIL:
      return {
        transportID: null,
        transportName: null,
        modelName: null,
        description: null,
        transportType: null,
        numberOfSeats: null,
        pricePerKillomter: null,
        airConditioner: null,
        availability: null,
        images: null,
        loading: false,
        error: false,
      };

    default:
      return prevState;
  }
};

export const transportsReducer = (prevState = allToursInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_ALL_TRANSPORT_Request":
      return { ...prevState, loading: true };
    case "GET_ALL_TRANSPORT_SUCCESS":
      return { ...prevState, transports: payload.data };
    case "GET_ALL_TRANSPORT_FAIL":
      return [];
    default:
      return prevState;
  }
};
