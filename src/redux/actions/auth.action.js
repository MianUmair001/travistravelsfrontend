import axios from "axios";
import { toast } from "react-toastify";
import { endpoints, URL } from "../../endpoints";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "../actionTypes";
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const {
      data: { data: data },
    } = await axios.post(URL + endpoints.LOGIN, {
      email: email,
      password: password,
    });
    const {
      access_token,
      user: { _id: user },
    } = data;

    console.log(access_token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { accessToken: access_token, user },
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      error: true,
    });
  }
};

export const signUp = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(URL + endpoints.SIGNUP, {
      email: email,
      password: password,
    });
    toast.success(response.data.message);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const verifyEmail = (email, code) => async (dispatch) => {
  try {
    const {
      data: { data: data },
    } = await axios.post(URL + endpoints.VERIFY_EMAIL, {
      email,
      code: parseInt(code),
    });
    const {
      access_token,
      user: { _id: user },
    } = data;
    dispatch({ type: LOGIN_REQUEST });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { accessToken: access_token, user },
    });
    toast.success("Email Verified");
    return true;
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({
      type: LOGIN_FAIL,
      error: true,
    });
    return false;
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  try {
    const response = await axios.post(URL + endpoints.FORGOT_PASS, { email });
    toast.success(response.data.message);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const resetPassword = (email, code, password) => async (dispatch) => {
  try {
    const {
      data: { data: data },
    } = await axios.post("http://localhost:3000/api/auth/resetPass", {
      email,
      code: Number(code),
      password,
    });
    const {
      access_token,
      user: { _id: user },
    } = data;
    dispatch({ type: LOGIN_REQUEST });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { accessToken: access_token, user },
    });
    toast.success(
      "Password has been successfully updated Login with new Password"
    );
    window.location.href = "http://localhost:3001/login";
  } catch (error) {
    console.log({ error });
    toast.error(error.response.data.message);
    // console.log(error.response.data.message);
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const resendCode = (email, type) => async (dispatch) => {
  try {
    console.log(
      email,
      type,
      URL + endpoints.RESEND_CODE,
      typeof (URL + endpoints.RESEND_CODE),
      "localhost:3000/api/auth/resendCode"
    );

    const response = await axios.post(URL + endpoints.RESEND_CODE, {
      email,
      type,
    });

    if (response.data.success) {
      toast.success("Email contianing new Code has been sent at ", email);
    }
  } catch (error) {
    toast.error(error.response.data.message);
    console.error({ error });
  }
};

export const changePassword =
  (email, password, newPassword) => async (dispatch) => {
    try {
      const response = await axios.post(URL + endpoints.CHANGE_PASS, {
        email: email,
        password: password,
        newPassword: newPassword,
      });
      console.log(response);
    } catch (error) {
      console.error({ error });
    }
  };

export const deactivateAccount = (id) => async (dispatch) => {
  try {
    const response = await axios.post(URL + endpoints.DEACTIVATE);
    // console.log(response.data.);
    if (response.data.success) {
      toast.success("Account has been successfully deleted");
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
