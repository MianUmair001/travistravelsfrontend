import {
  CREATE_PLAN_FAIL,
  CREATE_PLAN_REQUEST,
  CREATE_PLAN_SUCCESS,
  GET_ALL_PLANS_FAIL,
  GET_ALL_PLANS_SUCCESS,
  GET_PLAN_BY_ID_SUCCESS,
  UPDATE_PLAN_FAIL,
  UPDATE_PLAN_SUCCESS,
  GET_PLAN_BY_ID_FAIL,
  GET_PLAN_BY_NAME_SUCCESS,
  GET_PLAN_BY_NAME_FAIL,
} from "../actionTypes";

const initialState = {
  planID: null,
  description: null,
  price: null,
  name: null,
  rooms: null,
  allPlans: [],
  error: false,
  loading: false,
};

export const plan_reducer = (prevState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_PLAN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case CREATE_PLAN_SUCCESS:
      return {
        planID: payload.planID,
        description: payload.description,
        price: payload.price,
        name: payload.name,
        rooms: payload.rooms,
        error: false,
      };

    case CREATE_PLAN_FAIL:
      return {
        planID: null,
        description: null,
        price: null,
        name: null,
        rooms: null,
        error: true,
      };

    case GET_ALL_PLANS_SUCCESS:
      return {
        allPlans: payload.allPlans,
        error: false,
      };

    case GET_ALL_PLANS_FAIL:
      return {
        planID: null,
        description: null,
        price: null,
        name: null,
        rooms: null,
        error: true,
      };

    case GET_PLAN_BY_ID_SUCCESS:
      return {
        planID: payload.planID,
        description: payload.description,
        price: payload.price,
        name: payload.name,
        rooms: payload.rooms,
        error: false,
      };

    case GET_PLAN_BY_ID_FAIL:
      return {
        planID: null,
        description: null,
        price: null,
        name: null,
        rooms: null,
        error: true,
      };

    case GET_PLAN_BY_NAME_SUCCESS:
      return {
        planID: payload.planID,
        description: payload.description,
        price: payload.price,
        name: payload.name,
        rooms: payload.rooms,
        error: false,
      };

    case GET_PLAN_BY_NAME_FAIL:
      return {
        planID: null,
        description: null,
        price: null,
        name: null,
        rooms: null,
        error: true,
      };

    case UPDATE_PLAN_SUCCESS:
      return {
        planID: payload.planID,
        description: payload.description,
        price: payload.price,
        name: payload.name,
        rooms: payload.rooms,
        error: false,
      };

    case UPDATE_PLAN_FAIL:
      return {
        planID: null,
        description: null,
        price: null,
        name: null,
        rooms: null,
        error: true,
      };

    default:
      return prevState;
  }
};
