import axios from "axios";
import { toast } from "react-toastify";
import { endpoints, URL } from "../../endpoints";
import { CREATE_PLAN_SUCCESS ,UPDATE_PLAN_SUCCESS} from "../actionTypes";

export const createPlan =
  (name, description, price, rooms) => async (dispatch) => {
    // console.log(name,description);
    try {
      const { data } = await axios.post(URL + endpoints.CREATE_PLAN, {
        name,
        description,
        price,
        rooms,
      });
      console.log(data.data._id);
      toast.success("Plan has been successfully created");
      dispatch({
        type: CREATE_PLAN_SUCCESS,
        payload: {
          planID: data.data._id,
          name,
          description,
          price,
          rooms,
        },
      });
    } catch (error) {
      console.error({ error });
    }
  };

export const updatePlan =
  (id, name, description, price, rooms) => async (dispatch) => {
console.log("sara",id, name, description, price, rooms);

    try {
      const { data } = await axios.put(URL + endpoints.UPDATE_PLAN + id, {
        description,
        price: Number(price),
        name,
        rooms: Number(rooms),
      });
      console.log(data);
      toast.success("Plan has been successfully updated");
      dispatch({
        type: UPDATE_PLAN_SUCCESS,
        payload: {
          planID: data.data._id,
          name,
          description,
          price,
          rooms,
        }})
      return data
    } catch (error) {
      console.log({ error });
    }
  };

export const getAllPlans = () => async (dispatch) => {
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

export const deletePlan = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(URL + endpoints.DELETE_PLAN_BY_ID + id);
    toast.success("Plan has been successfully deleted");
  } catch (error) {
    toast.error(error.response.data.message);
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
