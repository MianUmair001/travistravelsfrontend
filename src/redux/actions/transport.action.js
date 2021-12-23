import axios from "axios";
import { endpoints, URL } from "../../endpoints";
import {
  CREATE_TRANSPORT_REQUEST,
  CREATE_TRANSPORT_SUCCESS,
} from "../actionTypes";

export const createTransport =
  (
    name,
    modelName,
    description,
    transportType,
    numberOfSeats,
    pricePerKillomter,
    airConditioner,
    availability,
    images
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: CREATE_TRANSPORT_REQUEST,
      });

      const response = await axios.post(URL + endpoints.CREATE_TRANSPORT, {
        name,
        modelName,
        description,
        transportType,
        numberOfSeats: Number(numberOfSeats),
        pricePerKillomter: Number(pricePerKillomter),
        AC: airConditioner,
        Availability: availability,
        images,
      });
      console.log("I'm in create transport response", response.data.data);
      const result = response.data.data;
      dispatch({
        type: CREATE_TRANSPORT_SUCCESS,
        payload: {
          transportID: result._id,
          transportName: result.name,
          modelName,
          description,
          transportType,
          numberOfSeats,
          pricePerKillomter,
          airConditioner,
          availability,
          images,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

export const updateTransport =
  (
    id,
    name,
    modelName,
    description,
    transportType,
    numberOfSeats,
    pricePerKillomter,
    airConditioner,
    availability,
    images,
    auth
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: CREATE_TRANSPORT_REQUEST,
      });

      const response = await axios.put(
        URL + endpoints.UPDATE_TRANSPORT_BY_ID + id,
        {
          name,
          modelName,
          description,
          transportType,
          numberOfSeats: Number(numberOfSeats),
          pricePerKillomter: Number(pricePerKillomter),
          AC: airConditioner,
          Availability: availability,
          images,
          auth,
        }
      );
      console.log("I'm in update transport response", response.data.data);
      const result = response.data.data;
      dispatch({
        type: CREATE_TRANSPORT_SUCCESS,
        payload: {
          transportID: result._id,
          transportName: result.name,
          modelName,
          description,
          transportType,
          numberOfSeats,
          pricePerKillomter,
          airConditioner,
          availability,
          images,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

export const getALlTransport = () => async (dispatch) => {
  try {
    const { data } = await axios.get(URL + endpoints.GET_ALL_TRANSPORT);
    dispatch({
      type: "GET_ALL_TRANSPORT_SUCCESS",
      payload: data,
    });
    console.log("I'm in get all transport response", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTransportByid = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(URL + endpoints.GET_TRANSPORT_BY_ID + id);
    console.log("I'm from get transport by id", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTransportByName = (name) => async (dispatch) => {
  try {
    const response = await axios.get(
      URL + endpoints.GET_TRANSPORT_BY_NAME + name
    );
    console.log("I'm in get transport by name", response);
  } catch (error) {
    console.log(error);
  }
};

export const deleteTransportByID = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(URL + endpoints.DELETE_TRANSPORT + id);
    console.log("I'm in delete transport by id", response);
  } catch (error) {
    console.log(error);
  }
};

export const findAllTransportsWithUserId = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      URL + endpoints.GET_TRANSPORTS_WITH_USER_ID + userId
    );
    console.log(data);
    dispatch({
      type: "GET_ALL_TRANSPORT_SUCCESS",
      payload: data,
    });
    return data;
  } catch (error) {}
};
