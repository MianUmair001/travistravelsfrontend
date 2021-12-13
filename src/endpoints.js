const production = "https://examplePage.com";
const development = "http://localhost:3000";
export const URL =
  process.env.NODE_ENV === "development" ? development : production;

export const endpoints = {
  /* AUTH */
  LOGIN: "/api/auth/login",
  SIGNUP: "/api/auth/signup/",
  VERIFY_EMAIL: "/api/auth/verifyEmail",
  FORGOT_PASS: "/api/auth/forgotPass",
  RESET_PASSWORD: "/api/auth/resetPass",
  RESEND_CODE: "/api/auth/resendCode",
  CHANGE_PASS: "​/api/auth/changePass",
  DEACTIVATE: "/api/auth/deactivate",
  VALIDATE_CODE: "/api/auth/validateCode",
  /* UPLOAD */
  UPLOAD: "/api/upload",
  /* PROFILE */
  CREATE_PROFILE: "/api/profile",
  GET_PROFILE: "/api/profile",
  UPDATE_PROFILE: "/api/profile/update",
  DELETE_PROFILE: "/api/profile/deactivateProfile",
  /* HOTELS */
  CREATE_HOTEL: "/api/hotel",
  GET_HOTEL: "/api/hotel",
  GET_HOTEL_BY_ID: "/api/hotel/",
  UPDATE_HOTEL_BY_ID: "/api/hotel/",
  DELETE_HOTEL: "/api/hotel/",
  GET_HOTEL_BY_NAME: "/api/hotel/name​/",
  /* HOTEL ROOMS */
  CREATE_ROOM: "/api/hotel/",
  GET_HOTEL_ROOMS: "/api/hotel/",
  GET_HOTEL_ROOMS_BY_ID: "/api/hotel/",
  UPDATE_HOTEL_ROOMS: "/api/hotel/",
  DELETE_HOTEL_ROOMS: "/api/hotel/",
  GET_HOTEL_ROOMS_BY_PLANNAME: "/api/hotel/",
  GET_HOTEL_ROOMS_BY_PLANID: "/api/hotel/",
  /* PLAN */
  GET_PLAN: "/api/plan",
  CREATE_PLAN: "/api/plan",
  GET_PLAN_BY_ID: "/api/plan/",
  UPDATE_PLAN: "/api/plan/",
  DELETE_PLAN: "/api/plan/{id}",
  GET_PLAN_BY_NAME: "/api/plan/plan/{name}",
  /* TOURS */
  CREATE_TOUR: "/api/tours",
  GET_TOUR: "/api/tours",
  GET_TOUR_BY_ID: "/api/tours/",
  GET_TOUR_BY_TYPE: "/api/tours/",
  UPDATE_TOUR: "/api/tours/",
  DELETE_TOUR: "/api/tours/",
  GET_TOUR_BY_NAME: "/api/tours/name/",
  /* POST */
  CREATE_POST: "/api​/posts",
  GET_ALL_POSTS: "/api/posts",
  GET_POST_BY_ID: "​/api​/posts​/{id}",
  UPDATE_POST_BY_ID: "​/api​/posts/{id}",
  DELETE_POST: "/api/posts/{id}",
  GET_POST_BY_USERNAME: "/api/posts/name/{name}",
  /* PLACES */
  CREATE_PLACES: "/api/places",
  GET_PLACES: "/api/places",
  GET_PLACES_BY_NAME: "/api/places/name/{name}",
  UPDATE_PLACES_BY_ID: "/api/places/",
  DELETE_PLACES: "/api/places/",
  /* BOOKING */
  CREATE_BOOKING: "/api/booking",
  GET_BOOKING: "/api/booking",
  GET_BOOKING_BY_ID: "/api/booking/{id}",
  UPDATE_BOOKING_BY_ID: "/api/booking/{id}",
  DELETE_BOOKING_BY_ID: "/api/booking/{id}",
  GET_BOOKING_BY_NAME: "/api/booking/name/{name}",
  /* FEEDBOOK */
  CREATE_FEEDBOOK: "/api/feedback",
  GET_FEEDBACK: "/api/feedback",
  GET_FEEDBACK_BY_ID: "/api/feedback/{id}",
  UPDATE_FEEDBACK_BY_ID: "/api/feedback/{id}",
  DELETE_FEEDBACK: "/api/feedback/{id}",
  /* COMMENTS */
  CREATE_COMMENTS: "/api/comments",
  GET_COMMENTS: "/api/comments",
  GET_COMMENTS_BY_ID: "/api/comments/{id}",
  UPDATE_COMMENTS_BY_ID: "/api/comments/{id}",
  DELETE_COMMENTS_BY_ID: "/api/comments/{id}",
  GET_COMMENTS_BY_USERNAME: "/api/comments/name/{name}",
  GET_ALL_COMMENTS_BY_PARENTCOMMENT_ID: "/api/comments/comments/{id}",
  /* LIKE DISLIKE */
  CREATE_LIKE_DISLIKE: "/api/likedislike",
  UPDATE_LIKEDISLIKE_BY_ID: " /api/likedislike/{id}",
  DELETE_LIKE_DISLIKE: "/api/likedislike/{id}",
  /* TRANSPORT */
  CREATE_TRANSPORT: "/api/transport/createTransport",
  UPDATE_TRANSPORT_BY_ID: "/api/transport/",
  GET_ALL_TRANSPORT: "/api/transport/findAll",
  GET_TRANSPORT_BY_ID: "/api/transport/",
  GET_TRANSPORT_BY_NAME: "/api/transport/name",
  DELETE_TRANSPORT: "/api/transport/delete/",

  /* DISHES */
  CREATE_DISHES: "/api/dishes",
  GET_ALL_DISHES: "/api/dishes",
  GET_DISHES_BY_NAME: "/api/dishes",
  UPDATE_DISHES: "/api/dishes",
  GET_DISHES_BY_ID: "/api/dishes",
  DELETE_DISHES: "/api/dishes",

  /* RESTAURANT */
  CREATE_RESTAURANT: "/api/restaurants",
  GET_RESTAURANTS: "/api/restaurants",
  GET_RESTAURANTS_BY_NAME: "/api/restaurants",
  GET_RESTAURANT_BY_ID: "/api/restaurants/restaurant/",
  UPDATE_RESTAURANTS: "/api/restaurants",
  DELETE_RESTAURANTS: "/api/restaurants",
};
