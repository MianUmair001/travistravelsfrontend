import axios from "axios";
import { toast } from "react-toastify";
import { endpoints, URL } from "../../endpoints";
import {
  CREATE_TOUR_FAIL,
  CREATE_TOUR_REQUEST,
  CREATE_TOUR_SUCCESS,
} from "../actionTypes";

export const createTour =
  (
    name,
    description,
    tourType,
    startLocation,
    endLocation,
    price,
    startDate,
    endDate,
    status,
    places,
    images,
    numberOfPeople,
    auth
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: CREATE_TOUR_REQUEST });
      const response = await axios.post(URL + endpoints.CREATE_TOUR, {
        name,
        description,
        tourType,
        startLocation,
        endLocation,
        price,
        startDate,
        endDate,
        status,
        places,
        images,
        numberOfPeople: Number(numberOfPeople),
        auth,
      });
      if (response.data.statusCode === 201) {
        dispatch({ type: CREATE_TOUR_SUCCESS, payload: response.data });
        dispatch(getTours());
        toast.success("Tour has been successfully created");
      }
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch({
        type: CREATE_TOUR_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const getTour =
  (id = "612b4ca9c3f43029f4dc9ac3") =>
  async (dispatch) => {
    console.log(id);
    console.log("I am in Get Tour by Id");
    const url = URL + endpoints.GET_TOUR + "/" + id;
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      console.log({ error });
    }
  };

export const getTourByName = (name) => async (dispatch) => {
  try {
    const { data } = await axios.get(URL + endpoints.GET_TOUR_BY_NAME + name);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const getTours = () => async (dispatch) => {
  try {
    const { data } = await axios.get(URL + endpoints.GET_TOUR);
    dispatch({
      type: "GET_ALL_TOURS_SUCCESS",
      payload: data,
    });
    console.log("I am in Get Tours", data);
    return data;
  } catch (error) {
    console.log({ error });
  }
};
export const getToursByType = (tourType) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      URL + endpoints.GET_TOUR_BY_TYPE + tourType
    );
    dispatch({
      type: "GET_ALL_TOURS_SUCCESS",
      payload: data,
    });
    console.log("I am in Get Tours", data);
    return data;
  } catch (error) {
    console.log({ error });
  }
};

export const updateTour =
  (
    id,
    {
      name,
      description,
      tourType,
      startLocation,
      endLocation,
      price,
      startDate,
      endDate,
      status,
      places,
      images,
    }
  ) =>
  async (dispatch) => {
    try {
      console.log("I am Images in Action file ", images);
      const { data } = await axios.put(URL + endpoints.UPDATE_TOUR + id, {
        name,
        description,
        tourType,
        startLocation,
        endLocation,
        price,
        startDate,
        endDate,
        status,
        places,
        images,
      });
      console.log("Update Tour", data);
      toast.success("Tour has been Updated");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log({ error });
    }
  };

export const deleteTour = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(URL + endpoints.DELETE_TOUR + id);
    console.log(data);
    toast.success("Tour has been successfully deleted");
  } catch (error) {
    console.error({ error });
  }
};

export const updateTourNumberOfPeople = (id) => async (dispatch) => {
  try {
    const { data } = await axios.patch(
      URL + endpoints.UPDATE_TOUR_NO_OF_PEOPLE + id
    );
    console.log(data);
    toast.success("Tour has been successfully booked");
  } catch (error) {
    console.log({ error });
  }
};

export const findAllTourWithUserId = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      URL + endpoints.GET_TOURS_WITH_USER_ID + userId
    );
    console.log(data);
    dispatch({
      type: "GET_ALL_TOURS_SUCCESS",
      payload: data,
    });
    return data;
  } catch (error) {}
};
