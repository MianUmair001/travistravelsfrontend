import axios from "axios";
import { URL, endpoints } from "../../endpoints";
import {
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_BY_USER_SUCCESS,
  CREATE_POSTS_SUCCESS,
  DELETE_POSTS_SUCCESS,
  UPDATE_POSTS_SUCCESS,
} from "../actionTypes";

export const createPost =
  (
    text,
    description,
    mentions,
    tagged,
    hashTags,
    createdBy,
    images,
    addressName,
    country,
    streetAddress,
    type,
    coordinate,
    auth
  ) =>
  async (dispatch) => {
    try {
      const data = await axios.post(URL + endpoints.CREATE_POST, {
        text,
        description,
        mentions,
        tagged,
        hashTags,
        createdBy,
        images,
        location: {
          addressName,
          country,
          streetAddress,
          location: { type, coordinate },
        },
        auth,
      });

      const response = data.data.data;
      console.log("I m in create post response", response);
      dispatch({
        type: CREATE_POSTS_SUCCESS,
        payload: {
          post: text,
          createdBy: createdBy,
          userId: auth,
          postId: response._id,
          description: description,
          dislikeCount: response.dislikeCount,
          likeCount: response.likeCount,
          mentions: mentions,
          tagged: tagged,
          hashTags: hashTags,
          images: images,
          location: {
            addressName: addressName,
            country: country,
            streetAddress: streetAddress,
            location: {
              coordinates: coordinate,
              type: type,
            },
          },
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

export const updatePost =
  (
    text,
    description,
    mentions,
    tagged,
    hashTags,
    createdBy,
    images,
    addressName,
    country,
    streetAddress,
    type,
    coordinate,
    auth,
    id
  ) =>
  async (dispatch) => {
    console.log(
      id,
      text,
      description,
      mentions,
      tagged,
      hashTags,
      createdBy,
      images,
      addressName,
      country,
      streetAddress,
      type,
      coordinate,
      auth
    );
    try {
      const data = await axios.put(URL + endpoints.UPDATE_POST_BY_ID + id, {
        text,
        description,
        mentions,
        tagged,
        hashTags,
        createdBy,
        images,
        location: {
          addressName,
          country,
          streetAddress,
          location: { type, coordinate },
        },
        auth,
      });
      const response = data.data.data;
      console.log("I m in update post response", response);
      dispatch({
        type: UPDATE_POSTS_SUCCESS,
        payload: {
          post: text,
          createdBy: createdBy,
          userId: auth,
          postId: response._id,
          description: description,
          dislikeCount: response.dislikeCount,
          likeCount: response.likeCount,
          mentions: mentions,
          tagged: tagged,
          hashTags: hashTags,
          images: images,
          location: {
            addressName: addressName,
            country: country,
            streetAddress: streetAddress,
            location: {
              coordinates: coordinate,
              type: type,
            },
          },
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

export const getAllPosts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(URL + endpoints.GET_ALL_POSTS);
    // console.log("I m get all posts", data);
    await dispatch({ type: GET_ALL_POSTS_SUCCESS, payload: data });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllPostOfTheUser = (username) => async (dispatch) => {
  // console.log("username", username);
  try {
    const { data } = await axios.get(
      URL + endpoints.GET_POST_BY_USERNAME + username
    );

    console.log("I m get all posts by username", data);
    dispatch({ type: GET_ALL_POSTS_BY_USER_SUCCESS, payload: data });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePostById = (id) => async (dispatch) => {
  console.log(id);

  try {
    const response = await axios.delete(URL + endpoints.DELETE_POST + id);
    console.log(response);
    dispatch({
      type: DELETE_POSTS_SUCCESS,
      payload: {
        post: null,
        createdBy: null,
        userId: null,
        postId: null,
        description: null,
        dislikeCount: null,
        likeCount: null,
        mentions: null,
        tagged: null,
        hashTags: null,
        images: null,
        location: {
          addressName: null,
          country: null,
          streetAddress: null,
          coordinates: {
            coordinates: null,
            type: null,
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const getPostById = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(URL + endpoints.GET_POST_BY_ID + id);
    console.log("getPostById", data);
    return data;
  } catch (error) {
    console.log({ error });
  }
};
