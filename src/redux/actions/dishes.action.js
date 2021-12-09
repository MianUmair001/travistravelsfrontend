import axios from "axios";
import { toast } from "react-toastify";
import { endpoints, URL } from "../../endpoints";

export const createDishes =
  (name, description, price, images) => async (dispatch) => {
    console.log(name, description, price, images);
    try {
      const data = await axios.post(URL + endpoints.CREATE_DISHES, {
        name,
        description,
        price,
        images,
      });
      console.log('Create Dishes', data)
      toast.success("Dishes has been Created");
    } catch (error) {
      console.log({ error });
    }
  };

export const updateDishes =
  (id, name, description, price, images) => async (dispatch) => {
    try {
      const data = await axios.put(URL + endpoints.UPDATE_DISHES + "/" + id, {
        name,
        description,
        price,
        images,
      });
      console.log(data);
      toast.success("Dishes has been Updated");
    } catch (error) {
      console.log({ error });
    }
  };

export const getAllDishes = () => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL + endpoints.GET_ALL_DISHES);
    console.log(URL + endpoints.GET_ALL_DISHES);
    console.log("dishes data in action", data);
    return data;
  } catch (error) {
    console.log({ error });
  }
};

export const getDishById = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      URL + endpoints.GET_DISHES_BY_ID + "/" + id
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log({ error });
  }
};

export const getDishesByName = (name) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      URL + endpoints.GET_DISHES_BY_NAME + "/" + name
    );
    console.log(data);
  } catch (error) {
    console.log({ error });
  }
};

export const deleteDish = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(
      URL + endpoints.DELETE_DISHES + "/" + id
    );
    console.log(data);
  } catch (error) {
    console.log({ error });
  }
};
