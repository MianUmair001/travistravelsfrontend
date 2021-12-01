import axios from "axios";
import { toast } from "react-toastify";
import { endpoints, URL } from "../../endpoints";

export const createPlaces = (name, description, images) => async (dispatch) => {
  console.log(name, description, images, typeof images, "In the Action");
  try {
    const {
      data: { data },
    } = await axios.post(
      URL + endpoints.GET_PLACES,
      {
        name,
        description,
        images,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    if (data) {
      toast.success("Place has been successfully created");
    }
  } catch (error) {
    console.log({ error });
    toast.error(error.response.data.message);
  }
};

export const getPlaces = () => async (dispatch) => {
  try {
    const { data } = await axios.get(URL + endpoints.GET_PLACES);
    console.log({ data });
    return data;
  } catch (error) {
    console.log({ error });
    console.error(error.response.data.message);
  }
};

export const getPlacesByName = (name) => async (dispatch) => {
  try {
    const { data } = await axios.get(URL + endpoints.GET_PLACES_BY_NAME, {
      name,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log({ error });
  }
};

export const updatePlaces =
  (id = "612b3fc2c3f43029f4dc9aab", name, description, images) =>
  async (dispatch) => {
    try {
      const { data } = await axios.put(
        URL + endpoints.UPDATE_PLACES_BY_ID + id,
        {
          name,
          description,
          images,
        }
      );
      if (data) {
        toast.success("Place record has been created successfully");
      }
    } catch (error) {
      console.log({ error });
    }
  };

export const deletePlaces = () => async (dispatch) => {
  try {
    const response = await axios.get(URL + endpoints.DELETE_PLACES);
    if (response.statusCode === 200) {
      toast.success("Place has been deleted successfully");
    }
    console.log({ response });
  } catch (error) {
    console.log({ error });
  }
};

export const getPlaceById = (id) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL + endpoints.GET_PLACE_BY_ID + id);
    console.log("I am in the getPlacesByid action", data);
    return data;
  } catch (error) {
    console.log({ error });
  }
};