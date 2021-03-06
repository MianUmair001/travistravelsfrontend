import axios from "axios";
import { toast } from "react-toastify";
import { endpoints, URL } from "../../endpoints";
import {
  CREATE_HOTEL_REQUEST,
  CREATE_HOTEL_SUCCESS,
  DELETE_HOTEL_SUCCESS,
  GET_HOTEL_BY_ID_SUCCESS,
  UPDATE_HOTEL_REQUEST,
  UPDATE_HOTEL_SUCCESS,
} from "../actionTypes";

export const createHotel = (name, price, description, images) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_HOTEL_REQUEST,
    });
    const response = await axios.post(URL + endpoints.CREATE_HOTEL, {
      name,
      price: Number(price),
      description,
      images,
    });
    console.log("I m in create hotel", response.data.data);
    dispatch({
      type: CREATE_HOTEL_SUCCESS,
      payload: {
        hotelID: response.data.data._id,
        hotelName: name,
        price,
        description,
        images,
      },
    });

    return response
  } catch (error) {
    console.error({ error });
  }
};

export const updateHotel =
  (id, name, price, description, images) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_HOTEL_REQUEST,
      });
      const response = await axios.put(
        URL + endpoints.UPDATE_HOTEL_BY_ID + id,
        {
          name,
          price,
          description,
          images,
        }
      );
      // console.log(URL + endpoints.UPDATE_HOTEL_BY_ID + id)
      console.log("I'm in update hotel", response.data.data._id);
      dispatch({
        type: UPDATE_HOTEL_SUCCESS,
        payload: {
          hotelID: response.data.data._id,
          hotelName: name,
          price,
          description,
          images,
        },
      });
    } catch (error) {
      console.error({ error });
    }
  };

export const getAllHotels = () => async (dispatch) => {
  try {
    // console.log(URL.concat(endpoints.GET_HOTEL));
    const response = await axios.get(URL + endpoints.GET_HOTEL);
    // console.log("I'm in get all hotels", response.data.data)
    const result = response.data.data;
    return [result];
  } catch (error) {
    console.log({ error });
  }
};

export const getHotelByID = (id) => async (dispatch) => {
  try {
    // console.log(URL.concat(endpoints.GET_HOTEL_BY_ID));
    const response = await axios.get(URL + endpoints.GET_HOTEL_BY_ID + id);
    // console.log("getHotelByID", response.data.data);
    dispatch({
      type: GET_HOTEL_BY_ID_SUCCESS,
      payload: {
        hotelID: response.data.data._id,
        hotelName: response.data.data.name,
        price:  response.data.data.price,
        description: response.data.data.description,
        images: response.data.data.images,
      },
    });
    return response;
  } catch (error) {
    console.log({ error });
  }
};

export const deleteHotel = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(URL + endpoints.DELETE_HOTEL + id);
    if (response.statusCode) {
      toast.success("Hotel has been deleted successfully");
    }
    // console.log("delete response", response.data.data);
    dispatch({
      type: DELETE_HOTEL_SUCCESS,
      payload: {
        hotelID: null,
        hotelName: null,
        description: null,
        images: null,
      },
    });
  } catch (error) {
    toast.error(error.response.data.message);
    console.log({ error });
  }
};

export const getHotelByName = (name) => async (dispatch) => {
  try {
    const { data } = await axios.get(URL + endpoints.GET_HOTEL_BY_NAME + name);
    console.log(data);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log({ error });
  }
};
