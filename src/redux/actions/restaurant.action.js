import axios from "axios";
import { toast } from "react-toastify";
import { endpoints, URL } from "../../endpoints";

export const createRestaurant =
  (name, description, address, noOfTables, menu, images, schedule) =>
  async (dispatch) => {
    try {
      const { data } = axios.post(URL + endpoints.CREATE_RESTAURANT, {
        name,
        description,
        address,
        noOfTables: Number(noOfTables),
        menu,
        images,
        schedule,
      });
      console.log(data);
      toast.success("Restaurant has been created successfully");
    } catch (error) {
      console.error({ error });
    }
  };
export const updateRestaurant =
  (id, name, description, address, noOfTables, openingTime, menu, images) =>
  async (dispatch) => {
    try {
      const data = axios.put(URL + endpoints.UPDATE_RESTAURANTS + "/" + id, {
        name,
        description,
        address,
        noOfTables: Number(noOfTables),
        openingTime,
        menu,
        images,
      });
      console.log(data);
    } catch (error) {}
  };

export const getAllRestaurants = () => async (dispatch) => {
  try {
    const data = axios.get(URL + endpoints.GET_RESTAURANTS);
    console.log("data in action", data);
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
  } catch (error) {
    console.log({ error });
  }
};
export const getRestaurantById = (id) => async (dispatch) => {
  try {
    const data = axios.get(URL + endpoints.GET_RESTAURANT_BY_ID + "/" + id);
    console.log(data);
  } catch (error) {
    console.log({ error });
  }
};
