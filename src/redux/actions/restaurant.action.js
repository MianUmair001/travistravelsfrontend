import axios from "axios";
import { toast } from "react-toastify";
import { endpoints, URL } from "../../endpoints";
import {
  CREATE_RESTAURANT_FAIL,
  CREATE_RESTAURANT_REQUEST,
  CREATE_RESTAURANT_SUCCESS,
} from "../actionTypes";

export const createRestaurant =
  (name, description, address, noOfTables, menu, images, schedule, price) =>
  async (dispatch) => {
    try {
      dispatch({ type: CREATE_RESTAURANT_REQUEST });
      console.log(
        name,
        description,
        address,
        noOfTables,
        menu,
        images,
        schedule,
        price
      );
      const response = await axios.post(URL + endpoints.CREATE_RESTAURANT, {
        name,
        description,
        address,
        noOfTables: Number(noOfTables),
        menu,
        images,
        schedule,
        price: Number(price),
      });
      if (response.data.statusCode === 201) {
        dispatch({
          type: CREATE_RESTAURANT_SUCCESS,
          payload: response.data.data,
        });
        toast.success("Restaurnat has been successfully created");
      }
      // toast.success("Restaurant has been created successfully");
    } catch (error) {
      console.log({ error });
      toast.error(error.response.data.messsage);
      dispatch({
        type: CREATE_RESTAURANT_FAIL,
        payload: error.response.data.message,
      });
    }
  };
export const updateRestaurant =
  (id, name, description, address, noOfTables, menu, images, schedule, price) =>
  async (dispatch) => {
    console.log(
      "Data In Action of update",
      name,
      description,
      address,
      noOfTables,
      menu,
      images,
      schedule,
      price
    );
    try {
      const data = await axios.put(
        URL + endpoints.UPDATE_RESTAURANTS + "/" + id,
        {
          name,
          description,
          address,
          noOfTables: Number(noOfTables),
          menu,
          images,
          schedule,
          price: Number(price),
        }
      );
      if (data.status === 200) {
        toast.success("Restaurant has been updated successfully");
      }
    } catch (error) {
      console.log({ error });
      toast.error(error.response.data.messsage);
    }
  };

export const deleteRestaurant = (id) => async () => {
  try {
    const data = await axios.delete(
      URL + endpoints.DELETE_RESTAURANTS + "/" + id
    );
    console.log(data);

    return data;
  } catch (error) {
    console.log({ error });
  }
};

export const getAllRestaurants = () => async (dispatch) => {
  try {
    const { data } = await axios.get(URL + endpoints.GET_RESTAURANTS);
    await dispatch({
      type: "GET_ALL_RESTAURANTS_SUCCESS",
      payload: data,
    });
    console.log("data in action", data);
    return data;
  } catch (error) {
    console.log({ error });
  }
};

export const getRestaurantByName = (name) => async (dispatch) => {
  try {
    const data = axios.get(
      URL + endpoints.GET_RESTAURANTS_BY_NAME + "/" + name
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log({ error });
  }
};
export const getRestaurantById = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(URL + endpoints.GET_RESTAURANT_BY_ID + id);
    console.log(data);
    return data;
  } catch (error) {
    console.log({ error });
  }
};
