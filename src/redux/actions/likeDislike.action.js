import axios from "axios";
import { URL, endpoints } from "../../endpoints";

export const createLikeDislike =
  (liked, disliked, userId, postId) => async (dispatch) => {
      console.log(liked, disliked, userId, postId)
    try {
      const response = await axios.post(URL + endpoints.CREATE_LIKE_DISLIKE, {
        liked,
        disliked,
        userId,
        postId,
      });
      console.log("I m in create likeDislike response", response.data.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
