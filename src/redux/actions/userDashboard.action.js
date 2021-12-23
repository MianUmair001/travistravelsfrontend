import axios from "axios";
export const getUserData = (user, bookedServiceType) => async (dispatch) => {
  try {
    if (bookedServiceType === "Tour") {
      console.log("I am in tour");
      const { data } = await axios.get(
        `http://localhost:3000/api/booking/booking/${user}/${bookedServiceType}`
      );

      console.log(data, "I am User data");
      return data.data;
    } else if (bookedServiceType === "Restaurant") {
      const { data } = await axios.get(
        `http://localhost:3000/api/booking/booking/${user}/${bookedServiceType}`
      );

      console.log(data, "I am User data");
      return data.data;
    } else if (bookedServiceType === "Hotel") {
      const { data } = await axios.get(
        `http://localhost:3000/api/booking/booking/${user}/${bookedServiceType}`
      );
      dispatch({
        type: "GET_ALL_HOTELS_SUCCESS",
        payload: data,
      });
      return data.data;
    } else if (bookedServiceType === "Transport") {
      const { data } = await axios.get(
        `http://localhost:3000/api/booking/booking/${user}/${bookedServiceType}`
      );

      return data.data;
    }
  } catch (error) {
    console.log({ error });
  }
};
export const getBookings = (user) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/booking/user/${user}`
    );
    return data.data;
  } catch (error) {
    console.log({ error });
  }
};

export const getAllBookings = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/api/booking`);
    console.log(data, "I am all bookings");
    return data.data;
  } catch (error) {
    console.log({ error });
  }
};
