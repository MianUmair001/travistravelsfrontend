import axios from "axios";
import { toast } from "react-toastify";
import { endpoints, URL } from "../../endpoints";
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const response = await axios.post(URL + endpoints.LOGIN, {
      email: email,
      password: password,
    });
    const {
      access_token,
      user: { _id: user },
    } = response.data.data;
    console.log("I m in login response", response.data.data.user.email);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        userEmail: response.data.data.user.email,
        accessToken: access_token,
        user,
      },
    });
    return response.data.data.user;
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
    const success = response.data.message;
    return success;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("Signup error response", error.response.data);
    const failed = error.response.data;
    return failed;
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

export const resetPassword = (email, password) => async (dispatch) => {
  console.log(email, password);
  try {
    const {
      data: { data: data },
    } = await axios.post(URL + endpoints.RESET_PASSWORD, {
      email,
      password,
    });
    console.log("I m response", data);
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
  } catch (error) {
    console.log({ error });
    toast.error(error);
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
  console.log("user id", id);
  try {
    const response = await axios.delete(URL + endpoints.DEACTIVATE);
    console.log(response.data);
    if (response.data.success) {
      toast.success("Account has been successfully deleted");
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const validateCode = (code, email) => async (dispatch) => {
  try {
    const response = await axios.post(URL + endpoints.VALIDATE_CODE, {
      email,
      code,
    });
    console.log("I am in validation code", response.data.statusCode);
    return response.data.statusCode;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
