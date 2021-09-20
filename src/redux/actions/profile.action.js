import axios from "axios";
import { endpoints, URL } from "../../endpoints";

export const createProfile = () => async (dispatch) => {
  try {
    const data = await axios.post(
      URL + endpoints.CREATE_PROFILE,
      {
        address: {
          addressName: "Shahdara ",
          country: "Lahore Pakistan",
          StreetAddress: "Street 12",
          coordinates: "31.473186,74.2650702",
        },
        name: "UmairAkram",
        phone: "03244220705",
        username: "umairAkram",
      },
      {
        headers: {
          contentType: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTI2NTUyMWI3YWVkNTQzYTRlNDJhMDkiLCJlbWFpbCI6ImFtaWFudW1haXJAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2Mjk5NzA0NDksImV4cCI6MTYzNTE1NDQ0OX0.Aiz5VeiJVgkVFv8r4pikbNyaAUUN0i2A-1aYQePvwTw",
        },
      }
    );
    console.log("I am In create Profile", { data });
  } catch (error) {
    console.log({ error });
  }
};

export const getProfile = () => async (dispatch) => {
  try {
    const data = await axios.get(URL + endpoints.GET_PROFILE, {
      headers: {
        contentType: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTI2NTUyMWI3YWVkNTQzYTRlNDJhMDkiLCJlbWFpbCI6ImFtaWFudW1haXJAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2Mjk5NzA0NDksImV4cCI6MTYzNTE1NDQ0OX0.Aiz5VeiJVgkVFv8r4pikbNyaAUUN0i2A-1aYQePvwTw",
      },
    });
    console.log({ data }, "I am Data of getProfile");
  } catch (error) {
    console.error({ error });
  }
};
