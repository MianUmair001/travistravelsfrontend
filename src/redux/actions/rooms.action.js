import axios from "axios";
import { toast } from "react-toastify";
import { endpoints, URL } from "../../endpoints";

export const createRoom =
  (hotel, noOfBathroom, noOfBeds, type, planName, images, price) =>
  async (dispatch) => {
    try {
      console.log(hotel);
      const { data } = await axios.post(
        URL + endpoints.CREATE_ROOM + hotel + "/rooms",
        {
          noOfBathroom: Number(noOfBathroom),
          noOfBeds: Number(noOfBeds),
          type,
          planName,
          hotel,
          images,
          price: Number(price),
        }
      );
      console.log(data);
      toast.success("Room has been created successfully");

      return data;
    } catch (error) {
      console.error({ error });
    }
  };

export const getRoomById = (hotelId, roomId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      URL + endpoints.GET_HOTEL_ROOMS_BY_ID + hotelId + "/rooms/" + roomId
    );
    console.log("data in action", data);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log({ error });
  }
};

export const getRooms = (hotelId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      URL + endpoints.GET_HOTEL_ROOMS + hotelId + "/rooms"
    );
    console.log(data);
    dispatch({
      type: "GET_ALL_ROOMS_SUCCESS",
      payload: data,
    });
    return data;
  } catch (error) {
    console.error({ error });
  }
};

export const updateRooms =
  (hotelId, roomId, images, noOfBathroom, noOfBeds, type, planName) =>
  async (dispatch) => {
    try {
      const hotel = hotelId;
      const { data } = await axios.patch(
        URL + endpoints.UPDATE_HOTEL_ROOMS + hotelId + "/rooms/" + roomId,
        {
          images,
          noOfBathroom,
          noOfBeds,
          type,
          planName,
          hotel,
        }
      );
      console.log({ data });
      toast.success("Data has been Updated");
    } catch (error) {
      console.error({ error });
    }
  };

export const deleteRooms = (hotelId, roomId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(
      URL + endpoints.DELETE_HOTEL_ROOMS + hotelId + "/rooms/" + roomId
    );
    console.log({ data });
  } catch (error) {
    console.error({ error });
  }
};

export const getRoomsByPlanName = (hotelId, planName) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      URL +
        endpoints.GET_HOTEL_ROOMS_BY_PLANNAME +
        hotelId +
        "/rooms/" +
        planName
    );
    console.log(data);
  } catch (error) {
    console.log({ error });
  }
};

export const getRoomsByPlanID = (hotelId, planId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      URL +
        endpoints.GET_HOTEL_ROOMS_BY_PLANID +
        hotelId +
        "/rooms/plan/" +
        planId
    );
    console.log(data);
  } catch (error) {
    console.log({ error });
  }
};
