import {
  CREATE_DISH_FAIL,
  CREATE_DISH_REQUEST,
  CREATE_DISH_SUCCESS,
  CREATE_FEEDBACK_FAIL,
  CREATE_FEEDBACK_REQUEST,
  CREATE_FEEDBACK_SUCCESS,
} from "../actionTypes";

const initialState = {
  tyoe: "rating",
  feedbackRating: null,
  feedbackText: null,
  serviceId: null,
  user: null,
};
const allFeedbacksInitialState = { feedbacks: [], error: null, loading: null };

export const feedbackReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_FEEDBACK_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case CREATE_FEEDBACK_SUCCESS:
      return {
        type: payload.type,
        feedbackRating: payload.feedbackRating,
        feedbackText: payload.feedbackRating,
        serviceId: payload.serviceId,
        user: payload.user,
      };

    case CREATE_FEEDBACK_FAIL:
      return {
        type: null,
        feedbackRating: null,
        feedbackText: null,
        serviceId: null,
        user: null,
      };

    default:
      return prevState;
  }
};

export const feedbacksReducer = (
  prevState = allFeedbacksInitialState,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_ALL_FEEDBACKS_Request":
      return { ...prevState, loading: true };
    case "GET_ALL_FEEDBACKS_SUCCESS":
      return { ...prevState, feedbacks: payload.data };
    case "GET_ALL_FEEDBACKS_FAIL":
      return [];
    default:
      return prevState;
  }
};
