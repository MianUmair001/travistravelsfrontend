import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getPostById } from "../../redux/actions/post.action";
import { Button, Typography } from "@material-ui/core";
import TagIcon from "@mui/icons-material/Tag";

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
import Tippy from "@tippyjs/react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import { deletePostById, getAllPosts } from "../../redux/actions/post.action";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
const Postdetails = () => {
  const params = useParams();
  const [post, setPost] = useState();
  const dispatch = useDispatch();

  const history = useHistory();

  const email = useSelector((state) => state?.auth?.userEmail);
  const username = email?.split("@")[0];
  const user = useSelector((state) => state.auth.user);

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
  useEffect(async () => {
    const { data } = await dispatch(getPostById(params.id));
    console.log("I am Data back in File", data);
    setPost(data);
  }, []);
  const d = new Date(post?.createdAt);
  const date = d.getMinutes();
  const handlePostDetails = (e, id) => {
    e.preventDefault();
    history.push(`/post/${id}`);
  };
  const handleDeletePost = async (e) => {
    e.preventDefault();
    await dispatch(deletePostById(post._id));
    await dispatch(getAllPosts());
  };
  const handleEditPost = (e) => {
    e.preventDefault();
    history.push(`/update_post/${post._id}`);
  };
  const handleLikePost = async (e) => {
    try {
      if (user) {
        e.preventDefault();
        setLiked(true);
        setDisliked(false);
        console.log("likeResponse", likeResponse);
        setLikedButton(true);
        await dispatch(getAllPosts());

        if (likeResponse?.data?.data?.liked === true) {
          console.log(likeResponse.data.data.disliked);
          setdislikedButton(false);
        }
      } else {
        toast.error("You should be logged in to Like the post");
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const handleDislikePost = async (e) => {
    try {
      if (user) {
        e.preventDefault();
        setLiked(false);
        setDisliked(true);
        console.log(dislikeResponse);
        setdislikedButton(true);
        await dispatch(getAllPosts());

        if (likeResponse?.data?.data?.disliked === true) {
          console.log(dislikeResponse.data.data.disliked);
          setLikedButton(false);
        }
      } else {
        toast.error("You should be logged In to dislike the post");
      }
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <>
      <div className="container  mt-5 mb-5">
        <div className="d-flex justify-content-center row">
          <div className="col-md-8">
            <div className="feed p-2 news-feed">
              <div>
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
                          <span className="font-weight-bold">
                            {post?.createdBy}
                          </span>
                          <span className="text-black-50 time">
                            {date} minutes ago
                          </span>
                        </div>
                        {username === post?.createdBy && (
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
                              onClick={(e) => handlePostDetails(e, post._id)}
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
                    <h2>{post?.text}</h2>
                  </div>
                  <div className="p-2 px-3">
                    <h3>{post?.description}</h3>
                  </div>
                  <div className="p-2 px-3">
                    {post?.mentions?.map((mention) => (
                      <>
                        @
                        <span>
                          <b>{mention}</b>{" "}
                        </span>
                      </>
                    ))}
                  </div>
                  <div className="p-2 px-3">
                    {post?.tagged?.map((tagged) => (
                      <>
                        <div style={{ display: "inline-flex" }}>
                          <LocalOfferIcon style={{ width: "20px" }} />
                          {tagged}
                        </div>
                      </>
                    ))}
                  </div>
                  <div className="p-2 px-3">
                    {post?.hashTags?.map((hashtag) => (
                      <>
                        <div
                          style={{
                            display: "inline-flex",
                            color: "white",
                            backgroundColor: "#3DB2FF",
                            borderRadius: "10%",
                            padding: "3px",
                          }}
                        >
                          <TagIcon style={{ width: "20px" }} />
                          <b>{hashtag?.split("#")[1]}</b>
                        </div>
                      </>
                    ))}
                  </div>

                  <div className="feed-image p-2 px-3">
                    <img
                      className="img-fluid img-responsive"
                      src={
                        post?.images[0]?.name
                          ? `http://localhost:3000/api/upload/file/${post?.images[0]?.folderName}/fileName/${post?.images[0]?.name}`
                          : "img/restaurant_box_1.jpg"
                      }
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
                        {post?.likeCount} Like
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
                        {post?.dislikeCount} Dislike
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
                        style={{
                          color: "green",
                          outline: "none",
                          textTransform: "none",
                        }}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Postdetails;
