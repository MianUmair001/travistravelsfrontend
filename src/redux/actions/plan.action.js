import axios from "axios";
import { toast } from "react-toastify";
import { endpoints, URL } from "../../endpoints";

export const createPlan =
  (name, description, price, rooms) => async (dispatch) => {
    try {
      const { data } = await axios.post(URL + endpoints.CREATE_PLAN, {
        name,
        description,
        price,
        rooms,
      });
      console.log(data);
      toast.success("Plan has been successfully created");
    } catch (error) {
      console.error({ error });
    }
  };

export const updatePlan =
  (id, name, description, price, rooms) => async (dispatch) => {
    try {
      const { data } = await axios.put(URL + endpoints.UPDATE_PLAN + id, {
        name,
        description,
        price,
        rooms,
      });
      console.log(data);
      toast.success("Plan has been successfully updated");
    } catch (error) {
      console.log({ error });
    }
  };

export const getPlans = () => async (dispatch) => {
  try {
    const { data } = await axios.get(URL + endpoints.GET_PLAN);
    console.log(data);
    return data.data;
  } catch (error) {
    console.error({ error });
  }
};

export const getPlanById = (id) => async (dispatch) => {
  try {
    const { data: data } = await axios.get(URL + endpoints.GET_PLAN_BY_ID + id);
    console.log(data.data);
    return data.data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.error({ error });
  }
};

export const deletePlan = () => async (dispatch) => {
  try {
    const { data } = await axios.delete(URL + endpoints.DELETE_PLAN);
    console.log(data);
    toast.success("Plan has been successfully deleted");
  } catch (error) {
    toast.error(error.response.data.message);
    console.log({ error });
  }
};

export const getPlanByPlanName = (planName) => async (dispatch) => {
  try {
    const { data } = await axios.get(URL + endpoints.GET_PLAN_BY_NAME);
    console.log(data);
  } catch (error) {
    console.log({ error });
  }
};
