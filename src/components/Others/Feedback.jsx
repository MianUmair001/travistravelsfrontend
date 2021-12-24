import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import {
  createFeedback,
  getFeedbacks,
  getFeedbacksbyServiceId,
} from "../../redux/actions/feedback.action";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Feedback = ({ serviceId, user, userName }) => {
  const [feedbackText, setfeedbackText] = useState("");
  const [isFeedback, setIsFeedback] = useState(false);
  const [feedbackRating, setFeedbackRating] = useState();
  const [feedbacks, setFeedbacks] = useState([]);
  const dispatch = useDispatch();
  const feedbacksStore = useSelector((state) => state.feedbacks.feedbacks);
  useEffect(async () => {
    if (feedbacksStore.length === 0) {
      const { data } = await dispatch(getFeedbacksbyServiceId(serviceId));
      console.log(data, "I am Data of feedbacks in single restaurant");
      setFeedbacks(data);
    } else {
      setFeedbacks(feedbacksStore);
    }
  }, [feedbacksStore]);
  const handleSubmitFeedback = async (e) => {
    try {
      if (user) {
        const { data } = await dispatch(
          createFeedback(
            "rating",
            feedbackRating,
            feedbackText,
            serviceId,
            user,
            userName
          )
        );
        await dispatch(getFeedbacksbyServiceId(serviceId));
        console.log(data);
        setIsFeedback(false);
      } else {
        toast.error("You are not logged in to give feedback");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="row">
        <div className="col-lg-3">
          <h3>Reviews </h3>
          <Button
            onClick={() => setIsFeedback(true)}
            className="btn_1 add_bottom_30"
            data-toggle="modal"
            data-target="#myReview"
          >
            Leave a review
          </Button>
        </div>
        <div className="col-lg-9">
          <div id="general_rating">
            {feedbacks?.length} Reviews
            <div className="rating">
              <i className="icon-smile voted" />
              <i className="icon-smile voted" />
              <i className="icon-smile voted" />
              <i className="icon-smile" />
              <i className="icon-smile" />
            </div>
          </div>
          {/* End general_rating */}
          <div className="row" id="rating_summary">
            {isFeedback && (
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Text</label>
                  <input
                    className="form-control"
                    name=""
                    type="text"
                    value={feedbackText}
                    onChange={(e) => setfeedbackText(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Rating</label>
                  <select
                    className="form-control"
                    name="rating"
                    id="rating"
                    value={feedbackRating}
                    onChange={(e) => setFeedbackRating(e.target.value)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <Button onClick={(e) => handleSubmitFeedback(e)}>
                  Submit FeedBack
                </Button>
              </div>
            )}
          </div>
          {/* End row */}
          <hr />
          {feedbacks.map((feedback) => (
            <div className="review_strip_single">
              {/* <small> - 10 March 2015 -</small> */}
              <h3>{feedback?.userName}</h3>
              <p>{feedback?.text}</p>
              <div className="rating">
                {[...Array(feedback?.rating).keys()].map((ratingOne) => (
                  <i className="icon-smile voted" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
