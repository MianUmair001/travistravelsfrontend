import axios from "axios";
import { URL } from "../../endpoints";

export const createFeedback =
  (type, rating, text, serviceId, userId, userName) => async (dispatch) => {
    try {
      console.log(type, rating, text, serviceId, userId, "In the action ");
      const { data } = await axios.post(`http://localhost:3000/api/feedback`, {
        type,
        rating: Number(rating),
        text,
        serviceId,
        userId,
        userName,
      });
      console.log(data);
      return data;
    } catch (error) {
      console.log({ error });
    }
  };
export const getFeedbacks = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/api/feedback`);
    console.log(data, "I am In get feedbacks");
    return data;
  } catch (error) {
    console.log({ error });
  }
};

export const getFeedbacksbyServiceId = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      URL + "/api/feedback" + "/serviceId/" + id
    );
    console.log("I am getFeedbackBy Service Id", data);
    dispatch({ type: "GET_ALL_FEEDBACKS_SUCCESS", payload: data });
    return data;
  } catch (error) {
    console.log({ error });
  }
};
