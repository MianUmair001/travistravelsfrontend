import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionTypes";

const initialState = {
  user: null,
  accessToken: null,
  loading: false,
  error: false,
};

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case LOGIN_SUCCESS: {
      return {
        error: false,
        user: payload.user,
        accessToken: payload.accessToken,
        loading: false,
      };
    }
    case LOGIN_FAIL:
      return {
        accessToken: null,
        user: null,
        loading: false,
        error: true,
      };
    case LOG_OUT:
      return {
        ...prevState,
        accessToken: null,
        user: null,
      };
    default:
      return prevState;
  }
};
