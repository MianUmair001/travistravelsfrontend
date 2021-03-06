import axios from "axios";
import { toast } from "react-toastify";
import { endpoints, URL } from "../../endpoints";

export const createTour =
  (
    name,
    description,
    tourType,
    startLocation,
    endLocation,
    price,
    startDate,
    endDate,
    status,
    places
  ) =>
  async (dispatch) => {
    try {
      const response = await axios.post(URL + endpoints.CREATE_TOUR, {
        name,
        description,
        tourType,
        startLocation,
        endLocation,
        price,
        startDate,
        endDate,
        status,
        places,
      });
      if (response.data.statusCode === 201) {
        toast.success("Tour has been successfully created");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

export const getTour =
  (id = "612b4ca9c3f43029f4dc9ac3") =>
  async (dispatch) => {
    console.log(id);
    console.log("I am in Get Tour by Id");
    const url = URL + endpoints.GET_TOUR + "/" + id;
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      console.log({ error });
    }
  };

export const getTourByName = (name) => async (dispatch) => {
  try {
    const { data } = await axios.get(URL + endpoints.GET_TOUR_BY_NAME + name);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const getTours = () => async (dispatch) => {
  try {
    const { data } = await axios.get(URL + endpoints.GET_TOUR);
    console.log("I am in Get Tours");
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log({ error });
  }
};

export const updateTour =
  (
    id,
    {
      name,
      description,
      tourType,
      startLocation,
      endLocation,
      price,
      startDate,
      endDate,
      status,
    }
  ) =>
  async (dispatch) => {
    try {
      const { data } = await axios.put(URL + endpoints.UPDATE_TOUR + id, {
        name,
        description,
        tourType,
        startLocation,
        endLocation,
        price,
        startDate,
        endDate,
        status,
      });
      toast.success("Tour has been Created");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log({ error });
    }
  };

export const deleteTour = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(URL + endpoints.DELETE_TOUR + id);
    console.log(data);
    toast.success("Tour has been successfully deleted");
  } catch (error) {
    console.error({ error });
  }
};
