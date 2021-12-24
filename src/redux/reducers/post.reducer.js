import {
  CREATE_POSTS_REQUEST,
  CREATE_POSTS_SUCCESS,
  CREATE_POSTS_FAIL,
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAIL,
  GET_ALL_POSTS_BY_USER_REQUEST,
  GET_ALL_POSTS_BY_USER_SUCCESS,
  GET_ALL_POSTS_BY_USER_FAIL,
  DELETE_POSTS_REQUEST,
  DELETE_POSTS_SUCCESS,
  DELETE_POSTS_FAIL,
  UPDATE_POSTS_REQUEST,
  UPDATE_POSTS_SUCCESS,
  UPDATE_POSTS_FAIL,
} from "../actionTypes";

const initialState = {
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
};

export const postReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_POSTS_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case CREATE_POSTS_SUCCESS:
      return {
        post: payload.post,
        createdBy: payload.createdBy,
        userId: payload.userId,
        postId: payload.postId,
        description: payload.description,
        dislikeCount: payload.dislikeCount,
        likeCount: payload.likeCount,
        mentions: payload.mentions,
        tagged: payload.tagged,
        hashTags: payload.hashTags,
        images: payload.images,
        location: {
          addressName: payload.location.addressName,
          country: payload.location.country,
          streetAddress: payload.location.streetAddress,
          location: {
            coordinates: payload.location.location.coordinates,
            type: payload.location.location.type,
          },
        },
      };

    case CREATE_POSTS_FAIL:
      return {
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
      };

    case UPDATE_POSTS_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case UPDATE_POSTS_SUCCESS:
      return {
        post: payload.post,
        createdBy: payload.createdBy,
        userId: payload.userId,
        postId: payload.postId,
        description: payload.description,
        dislikeCount: payload.dislikeCount,
        likeCount: payload.likeCount,
        mentions: payload.mentions,
        tagged: payload.tagged,
        hashTags: payload.hashTags,
        images: payload.images,
        location: {
          addressName: payload.location.addressName,
          country: payload.location.country,
          streetAddress: payload.location.streetAddress,
          location: {
            coordinates: payload.location.location.coordinates,
            type: payload.location.location.type,
          },
        },
      };

    case UPDATE_POSTS_FAIL:
      return {
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
      };

    case DELETE_POSTS_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case DELETE_POSTS_FAIL: {
      return {
        post: payload.post,
        createdBy: payload.createdBy,
        userId: payload.userId,
        postId: payload.postId,
        description: payload.description,
        dislikeCount: payload.dislikeCount,
        likeCount: payload.likeCount,
        mentions: payload.mentions,
        tagged: payload.tagged,
        hashTags: payload.hashTags,
        images: payload.images,
        location: {
          addressName: payload.location.addressName,
          country: payload.location.country,
          streetAddress: payload.location.streetAddress,
          location: {
            coordinates: payload.location.location.coordinates,
            type: payload.location.location.type,
          },
        },
      };
    }

    case DELETE_POSTS_SUCCESS: {
      return {
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
      };
    }

    default:
      return prevState;
  }
};

const allPostsInitialState = { posts: [], error: null, loading: null };
const allPostsByUserInitialState = {
  postsByUser: [],
  error: null,
  loading: null,
};

export const allPostsReducer = (prevState = allPostsInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_POSTS_REQUEST:
      return { ...prevState, loading: true };
    case GET_ALL_POSTS_SUCCESS:
      return { ...prevState, posts: payload.data };
    case GET_ALL_POSTS_FAIL:
      return [];
    default:
      return prevState;
  }
};

export const postsByUserReducer = (
  prevState = allPostsByUserInitialState,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_POSTS_BY_USER_REQUEST:
      return { ...prevState, loading: true };
    case GET_ALL_POSTS_BY_USER_SUCCESS:
      return { ...prevState, postsByUser: payload.data };
    case GET_ALL_POSTS_BY_USER_FAIL:
      return [];
    default:
      return prevState;
  }
};
