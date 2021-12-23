import React, { useEffect, useState } from "react";
import { Button, Typography } from "@material-ui/core";
import {
  ThumbUpAlt,
  ThumbDownAlt,
  ThumbUpAltOutlined,
  ThumbDownAltOutlined,
  InsertCommentOutlined,
  SendOutlined,
  EditOutlined,
  DeleteOutline,
  InfoOutlined,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import "./styles/postStyles.css";
import Tippy from "@tippyjs/react";
import { deletePostById, getAllPosts } from "../../redux/actions/post.action";
import { createLikeDislike } from "../../redux/actions/likeDislike.action";
import { useHistory } from "react-router-dom";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const email = useSelector((state) => state.auth.userEmail);
  const username = email?.split("@")[0];

  const [showCommentBox, setshowCommentBox] = useState(false);
  const [likeResponse, setLikeResponse] = useState();
  const [dislikeResponse, setDislikeResponse] = useState();

  const [likedButton, setLikedButton] = useState(false);
  const [disLikedButton, setdislikedButton] = useState(false);

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleShowCommentBox = (e) => {
    e.preventDefault();

    setshowCommentBox(true);
  };

  const handleHideCommentBox = (e) => {
    e.preventDefault();

    setshowCommentBox(false);
  };

  const d = new Date(post?.createdAt);
  const date = d.getMinutes();

  const handleDeletePost = async (e) => {
    e.preventDefault();

    await dispatch(deletePostById(post._id));
    await dispatch(getAllPosts());
  };

  useEffect(async () => {
    const response = await dispatch(
      createLikeDislike(liked, disliked, post.auth, post._id)
    );
    setLikeResponse(response);
  }, [likedButton, disLikedButton]);

  useEffect(async () => {
    const response = await dispatch(
      createLikeDislike(liked, disliked, post.auth, post._id)
    );
    setDislikeResponse(response);
  }, []);
  console.log('pp', post)
  const handleLikePost = async (e) => {
    e.preventDefault();
    // console.log("Post Liked");
    // const response = await dispatch(
    //   createLikeDislike(
    //     liked,
    //     disliked,
    //     "61b8a26f5ab347241cd1f269",
    //     "61bef2c8d21e8d148c147c15"
    //   )
    // );
    setLiked(true);
    setDisliked(false);
    console.log("likeResponse", likeResponse);
    setLikedButton(true);
    await dispatch(getAllPosts());
    // if (response.data.success === true) {
    // }
    if (likeResponse?.data?.data?.liked === true) {
      console.log(likeResponse.data.data.disliked);
      setdislikedButton(false);
    }
  };

  const handleDislikePost = async (e) => {
    e.preventDefault();

    setLiked(false);
    setDisliked(true);
    console.log(dislikeResponse);
    setdislikedButton(true);
    await dispatch(getAllPosts());
    // if (response.data.success === true) {
    // }
    if (likeResponse?.data?.data?.disliked === true) {
      console.log(dislikeResponse.data.data.disliked);
      setLikedButton(false);
    }
  };

  const handleEditPost = (e) => {
    e.preventDefault();

    history.push(`update_post/${post._id}`);
  };

  return (
    <>
      <div className="bg-white border mt-2">
        <div>
          <div className="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
            <div className="d-flex flex-row align-items-center feed-text px-2">
              <img
                className="rounded-circle"
                src="https://i.imgur.com/aoKusnD.jpg"
                width={45}
              />
              <div className="d-flex flex-column flex-wrap ml-2">
                <span className="font-weight-bold">{post.createdBy}</span>
                <span className="text-black-50 time">{date} minutes ago</span>
              </div>
              {username === post.createdBy && (
                <div className="mb-5">
                  <Tippy content="Edit" placement="left">
                    <Button
                      className="float-right circleButton"
                      style={{
                        position: "absolute",
                        right: 100,
                        borderRadius: "50%",
                        outline: "none",
                        color: "green",
                      }}
                      onClick={handleEditPost}
                    >
                      <EditOutlined />
                    </Button>
                  </Tippy>
                  <Tippy content="Delete" placement="bottom">
                    <Button
                      className="float-right circleButton"
                      style={{
                        position: "absolute",
                        right: 60,
                        borderRadius: "50%",
                        outline: "none",
                        color: "red",
                      }}
                      onClick={handleDeletePost}
                    >
                      <DeleteOutline />
                    </Button>
                  </Tippy>
                </div>
              )}
              <div className="mb-5">
                <Tippy content="Details" placement="right">
                  <Button
                    className="float-right circleButton"
                    style={{
                      position: "absolute",
                      right: 20,
                      borderRadius: "50%",
                      outline: "none",
                      color: "green",
                    }}
                  >
                    <InfoOutlined />
                  </Button>
                </Tippy>
              </div>
            </div>
            <div className="feed-icon px-2">
              <i className="fa fa-ellipsis-v text-black-50" />
            </div>
          </div>
        </div>
        <div className="p-2 px-3">
          <span>{post.description}</span>
        </div>
        <div className="feed-image p-2 px-3">
          <img
            className="img-fluid img-responsive"
            src="https://i.imgur.com/aoKusnD.jpg"
          />
          <img />
        </div>

        <div className="col-sm-12 feed-text px-2">
          <div className="MuiButtons col-md-12 mt-3">
            <Typography
              style={{
                color: "blue",
                marginLeft: "7px",
                outline: "none",
              }}
            >
              {post.likeCount} Like
            </Typography>
            <Typography style={{ color: "green", outline: "none" }}>
              0 Comment
            </Typography>
            <Typography
              style={{
                color: "red",
                outline: "none",
              }}
            >
              {post.dislikeCount} Dislike
            </Typography>
          </div>
          <hr />
          <div className="MuiButtons col-md-12 mb-3">
            {likedButton === false ? (
              <Button
                variant="outlined"
                size="small"
                startIcon={<ThumbUpAltOutlined />}
                style={{
                  color: "blue",
                  marginLeft: "7px",
                  outline: "none",
                  textTransform: "none",
                }}
                onClick={handleLikePost}
              >
                Like
              </Button>
            ) : (
              <div>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<ThumbUpAlt />}
                  style={{
                    color: "blue",
                    marginLeft: "7px",
                    outline: "none",
                    textTransform: "none",
                  }}
                  onClick={handleLikePost}
                >
                  Like
                </Button>
              </div>
            )}
            <Button
              variant="contained"
              size="small"
              startIcon={<InsertCommentOutlined />}
              onClick={handleShowCommentBox}
              style={{ color: "green", outline: "none", textTransform: "none" }}
            >
              Comment
            </Button>
            {disLikedButton === false ? (
              <Button
                variant="outlined"
                size="small"
                startIcon={<ThumbDownAltOutlined />}
                style={{
                  color: "red",
                  outline: "none",
                  textTransform: "none",
                }}
                onClick={handleDislikePost}
              >
                Dislike
              </Button>
            ) : (
              <div>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<ThumbDownAlt />}
                  style={{
                    color: "red",
                    outline: "none",
                    textTransform: "none",
                  }}
                  onClick={handleDislikePost}
                >
                  Dislike
                </Button>
              </div>
            )}
          </div>
          <hr />
          {showCommentBox && (
            <div className="timeline-comment-box">
              <div className="user">
                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" />
              </div>
              <div className="input">
                <form action>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control inputFeild "
                      placeholder="Write a comment..."
                    />
                    <span className="input-group-btn p-l-10">
                      <Button
                        className="btn btn-primary f-s-12 rounded-corner commentButton"
                        type="button"
                        onClick={handleHideCommentBox}
                        startIcon={<SendOutlined />}
                        style={{ marginLeft: "10px" }}
                      ></Button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Post;
