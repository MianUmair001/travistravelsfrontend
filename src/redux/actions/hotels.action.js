import axios from "axios";
import { toast } from "react-toastify";
import { endpoints, URL } from "../../endpoints";

export const createHotel = (name, description, images) => async (dispatch) => {
  try {
    const { data } = await axios.post(URL + endpoints.CREATE_HOTEL, {
      name,
      description,
      images,
    });
    console.log({ data });
  } catch (error) {
    console.error({ error });
  }
};

export const updateHotel =
  (id, name, description, images) => async (dispatch) => {
    try {
      const { data } = await axios.put(
        URL + endpoints.UPDATE_HOTEL_BY_ID + id,
        {
          name,
          description,
          images,
        }
      );
      if (data.statusCode) {
        toast.success("Hotel has been successfully Updated");
      }
    } catch (error) {
      console.error({ error });
    }
  };

export const getHotels = () => async (dispatch) => {
  try {
    console.log(URL.concat(endpoints.GET_HOTEL));
    const { data } = await axios.get(URL + endpoints.GET_HOTEL);
    return data;
  } catch (error) {
    console.log({ error });
  }
};

export const getHotel = (id) => async (dispatch) => {
  try {
    console.log(URL.concat(endpoints.GET_HOTEL_BY_ID));
    const { data } = await axios.get(URL + endpoints.GET_HOTEL_BY_ID + id);
    return data;
  } catch (error) {
    console.log({ error });
  }
};

export const deleteHotel = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(URL + endpoints.DELETE_HOTEL + id);
    if (response.statusCode) {
      toast.success("Tour has been deleted successfully");
    }
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
