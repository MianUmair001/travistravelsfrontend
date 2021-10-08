import axios from "axios";
import { endpoints, URL } from "../../endpoints";
import {
  CREATE_PROFILE_REQUEST,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  DELETE_PROFILE_SUCCESS,
  DELETE_PROFILE_REQUEST,
} from "../actionTypes";

export const createProfile =
  ({
    address: { addressName, country, streetAddress, coordinates },
    firstName,
    lastName,
    DateOfBirth,
    phone,
    username,
    auth,
  }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: CREATE_PROFILE_REQUEST,
      });

      const {
        data: { data: data },
      } = await axios.post(
        URL + endpoints.CREATE_PROFILE,
        {
          address: {
            addressName,
            country,
            streetAddress,
            coordinates,
          },
          firstName,
          lastName,
          DateOfBirth,
          phone,
          username,
          auth,
        },
        {
          headers: {
            contentType: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTI2NTUyMWI3YWVkNTQzYTRlNDJhMDkiLCJlbWFpbCI6ImFtaWFudW1haXJAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2Mjk5NzA0NDksImV4cCI6MTYzNTE1NDQ0OX0.Aiz5VeiJVgkVFv8r4pikbNyaAUUN0i2A-1aYQePvwTw",
          },
        }
      );
      console.log("I am In create Profile", data);
      dispatch({
        type: CREATE_PROFILE_SUCCESS,
        payload: {
          address: {
            addressName: addressName,
            country: country,
            streetAddress: streetAddress,
            coordinates: coordinates,
          },
          firstName: firstName,
          lastName: lastName,
          DateOfBirth: DateOfBirth,
          phone: phone,
          username: username,
          auth: auth,
        },
      });

      return data;
    } catch (error) {
      dispatch({
        type: CREATE_PROFILE_FAIL,
        payload: {
          address: {
            addressName: null,
            country: null,
            streetAddress: null,
            coordinates: null,
          },
          firstName: null,
          lastName: null,
          DateOfBirth: null,
          phone: null,
          username: null,
          auth: null,
        },
      });
    }
  };

export const updateprofile =
  ({
    address: {
      addressNameUser,
      countryUser,
      streetAddressUser,
      coordinatesUser,
    },
    firstNameUser,
    lastNameUser,
    DateOfBirthUser,
    phoneUser,
    username,
    auth,
  }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: CREATE_PROFILE_REQUEST,
      });

      const response = await axios.patch(
        URL + endpoints.UPDATE_PROFILE,
        {
          address: {
            addressName: addressNameUser,
            country: countryUser,
            streetAddress: streetAddressUser,
            coordinates: coordinatesUser,
          },
          firstName: firstNameUser,
          lastName: lastNameUser,
          DateOfBirth: DateOfBirthUser,
          phone: phoneUser,
          username,
          auth,
        },
        {
          headers: {
            contentType: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTI2NTUyMWI3YWVkNTQzYTRlNDJhMDkiLCJlbWFpbCI6ImFtaWFudW1haXJAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2Mjk5NzA0NDksImV4cCI6MTYzNTE1NDQ0OX0.Aiz5VeiJVgkVFv8r4pikbNyaAUUN0i2A-1aYQePvwTw",
          },
        }
      );

      console.log("I m in update profile", response.data.data);
      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload: {
          address: {
            addressName: addressNameUser,
            country: countryUser,
            streetAddress: streetAddressUser,
            coordinates: coordinatesUser,
          },
          firstName: firstNameUser,
          lastName: lastNameUser,
          DateOfBirth: DateOfBirthUser,
          phone: phoneUser,
          username: username,
          auth: auth,
        },
      });
    } catch (error) {
      dispatch({
        type: UPDATE_PROFILE_FAIL,
        payload: {
          address: {
            addressName: null,
            country: null,
            streetAddress: null,
            coordinates: null,
          },
          firstName: null,
          lastName: null,
          DateOfBirth: null,
          phone: null,
          username: null,
          auth: null,
        },
      });
    }
  };

  export const deleteProfile = (id) => async (dispatch) => {
    console.log('id', id)
    dispatch({
      type: DELETE_PROFILE_REQUEST,
    })
    try {
      const response = await axios.delete( URL + endpoints.DELETE_PROFILE,
        {
          headers: {
            contentType: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTI2NTUyMWI3YWVkNTQzYTRlNDJhMDkiLCJlbWFpbCI6ImFtaWFudW1haXJAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2Mjk5NzA0NDksImV4cCI6MTYzNTE1NDQ0OX0.Aiz5VeiJVgkVFv8r4pikbNyaAUUN0i2A-1aYQePvwTw",
          },
        }
      )
  
            
      console.log(response.data.data)
      dispatch({
        type: DELETE_PROFILE_SUCCESS,
        payload: {
          address: {
            addressName: null,
            country: null,
            streetAddress: null,
            coordinates: null,
          },
          firstName: null,
          lastName: null,
          DateOfBirth: null,
          phone: null,
          username: null,
          auth: null,
        },
      });
    } catch (error) {
      console.log(error)
    }
  }
