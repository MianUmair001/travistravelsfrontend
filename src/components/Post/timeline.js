import React, { useEffect, useState } from "react";
import "./styles/postStyles.css";
import { Button, Typography } from "@material-ui/core";
import {
  PhotoLibraryOutlined,
  VideocamOutlined,
  AddCircleOutlineOutlined,
} from "@material-ui/icons";
// import { FeedOutlined } from '@mui/icons-material';
import Post from "./post";
import {
  getAllPosts,
  getAllPostOfTheUser,
} from "../../redux/actions/post.action";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, Box } from "@mui/material";
import { toast } from "react-toastify";

const Timeline = ({ history }) => {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.auth.userEmail);
  const username = email?.split("@")[0];
  console.log("username", username);

  const [showLoading, setShowLoading] = useState(true);
  const [postsByUsername, setPostsByUsername] = useState([]);
  const handleCreatePost = async (e) => {
    e.preventDefault();
    history.push(`/create_post`);
  };
  const stateposts = useSelector((state) => state.posts);
  useEffect(async () => {
    try {
      const { data } = await dispatch(getAllPostOfTheUser(username));
      console.log("getAllPostOfTheUser", data);
      setPostsByUsername(data);
      setShowLoading(false);
    } catch (error) {
      console.log({ error });
    }
  }, [stateposts.posts]);

  const handleNewsFeed = (e) => {
    e.preventDefault();
    console.log("handleNewsFeed");
    history.push("/posts");
  };
  const handleYourTimeline = (e) => {
    try {
      if (username) {
        e.preventDefault();
        history.push(`/posts/${username}`);
      } else {
        toast.error("You should be logged In to View Your Posts");
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
              <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white border">
                <div className="col-sm-12 feed-text px-2">
                  <Button
                    type="submit"
                    style={{
                      color: "white",
                      backgroundColor: "green",
                      textTransform: "unset",
                      borderRadius: "15px",
                      border: "1px solid black",
                      outline: "none",
                    }}
                    className="btn mainButton btn_full btn-block py-2 mt-3 mb-2"
                  >
                    What's on your mind{" "}
                  </Button>
                  <hr />
                  <div className="MuiButtons col-md-12 mb-3">
                    <Button
                      className="float-right"
                      variant="contained"
                      size="small"
                      startIcon={<AddCircleOutlineOutlined />}
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        outline: "none",
                        borderRadius: "20px",
                      }}
                      onClick={handleCreatePost}
                    >
                      Create Post
                    </Button>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white border mt-2">
                <div
                  className="col-sm-12 feed-text px-2"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    variant="text"
                    size="small"
                    className="btn btn-block"
                    // startIcon={<Feed />}
                    style={{ outline: "none" }}
                    onClick={handleNewsFeed}
                  >
                    News Feed
                  </Button>
                  <Typography> |</Typography>
                  <Button
                    variant="text"
                    size="small"
                    className="btn btn-block"
                    // startIcon={<FeedOutlined />}
                    onClick={(e) => handleYourTimeline(e)}
                    style={{ outline: "none" }}
                  >
                    Your Timeline
                  </Button>
                </div>
              </div>

              {showLoading === true ? (
                <div>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "30px",
                    }}
                  >
                    <CircularProgress color="inherit" />
                  </Box>
                </div>
              ) : (
                <div>
                  {postsByUsername?.map((post) => (
                    <Post post={post} key={post._id} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
