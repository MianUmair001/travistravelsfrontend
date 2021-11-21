import axios from "axios";
import { endpoints, URL } from "../../endpoints";

const fs = require("fs");
const Path = require("path");

export const uploadImage = (formData) => async (dispatch) => {
  try {
    var formvalues = formData.values();
    for (var value of formvalues) {
      console.log(value);
    }
    const { data } = await axios.post(URL + endpoints.UPLOAD, formData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data, boundary='Somedata'",
      },
    });
    return data;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getImage = (fileName, folderName) => async (dispatch) => {
  try {
    console.log(
      `${URL}/api/upload/file/${folderName}/fileName/${fileName}`,
      "I am Link from the action"
    );
    return `${URL}/api/upload/file/${folderName}/fileName/${fileName}`;
  } catch (error) {
    console.log(error);
  }
};
