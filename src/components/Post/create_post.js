import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Form, FormikProvider, useFormik } from "formik";
import { MultiSelect } from "react-multi-select-component";

import {
  Card,
  Grid,
  Stack,
  Button,
  Switch,
  TextField,
  Typography,
  ListItemText,
  ListItem,
} from "@mui/material";

import "./styles/postStyles.css";

import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../redux/actions/post.action";
import { uploadImage } from "../../redux/actions/upload.action";
import { getAllUsers } from "../../redux/actions/auth.action";
// ----------------------------------------------------------------------

const Create_post = ({ history }) => {
  const email = localStorage.getItem("UserEmail");
  const user = email.split("@")[0];

  const auth = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const [tittle, setTittle] = useState("Post 1");
  const [username] = useState(user);
  const [tag, setTag] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [addressName, setAddressName] = useState("Shahdrah");
  const [country, setCountry] = useState("Pakistan");
  const [streetAddress, setStreetAddress] = useState("9");
  const [coordinates, setCoordinates] = useState("31.473186,74.2650702");
  const [type, setType] = useState("Point");
  const [mention, setMention] = useState([]);
  const [images, setImages] = useState([]);
  const [checked, setChecked] = React.useState(["wifi"]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [showLoading, setshowLoading] = useState(false);
  const optionsData = [];

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    return setEditorState(editorState);
  };
  const hrmlText = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  const description = hrmlText.replace(/<[^>]+>/g, "");

  useEffect(async () => {
    const data = await dispatch(getAllUsers());
    data?.map((res) => {
      optionsData.push({
        label: res.email.split("@")[0],
        value: res.email.split("@")[0],
      });
    });
    setMention(optionsData);
  }, []);

  const value = selectedOption?.map((val) => val.value);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      console.log("Yes");
    } else {
      newChecked.splice(currentIndex, 1);
      console.log("No");
    }

    setChecked(newChecked);
  };

  const formik = useFormik({});

  const handlePost = async (e) => {
    e.preventDefault();
    setshowLoading(true);

    const response = await dispatch(
      createPost(
        tittle,
        description,
        value,
        tag,
        hashtag,
        username,
        images,
        addressName,
        country,
        streetAddress,
        type,
        coordinates,
        auth
      )
    );
    console.log('response', response)
    if(response !== undefined) {
      history.push('/posts')
    }
    const timer = setTimeout(() => {
      setshowLoading(false);
    }, 500);
    return () => clearTimeout(timer);

  };

  return (
    <>
      <FormikProvider value={formik}>
        <Form
          noValidate
          autoComplete="off"
          className="container create-post mb-5"
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Card sx={{ p: 3 }}>
                <Stack spacing={3}>
                  <h3
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      textTransform: "uppercase",
                      fontWeight: "bolder",
                    }}
                  >
                    Create Post
                  </h3>
                  <TextField
                    fullWidth
                    label="Post Title"
                    value={tittle}
                    onChange={(e) => setTittle(e.target.value)}
                  />

                  <Grid style={{ border: "1px solid grey", padding: "10px" }}>
                    <Editor
                      editorState={editorState}
                      wrapperClassName="demo-wrapper"
                      editorClassName="demo-editor"
                      onEditorStateChange={onEditorStateChange}
                      placeholder="Write description here"
                    />
                  </Grid>
                  <div>
                    <MultiSelect
                      Style={{ backgroundColor: "white", color: "black" }}
                      options={mention}
                      value={selectedOption}
                      onChange={setSelectedOption}
                      labelledBy="Mentions"
                    />
                  </div>

                  <TextField
                    fullWidth
                    label="Tags"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    label="Hashtags"
                    value={hashtag}
                    onChange={(e) => setHashtag(e.target.value)}
                  />
                </Stack>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3 }}>
                <Stack spacing={3}>
                  <div>
                    <ListItem>
                      <ListItemText
                        id="switch-list-label-comments"
                        primary="Enable Comments"
                      />
                      <Switch
                        edge="end"
                        onChange={handleToggle("comments")}
                        checked={checked.indexOf("comments") !== -1}
                        inputProps={{
                          "aria-labelledby": "switch-list-label-comments",
                        }}
                      />
                    </ListItem>
                  </div>

                  <TextField fullWidth label="Username" value={username} />
                  <TextField
                    fullWidth
                    label="Address Name"
                    value={addressName}
                    onChange={(e) => setAddressName(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    label="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    label="Street Address"
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    label="Coordinates"
                    value={coordinates}
                    onChange={(e) => setCoordinates(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    label="Type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  />
                  <hr />
                  <h4>Upload photo</h4>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="file"
                        className="form-control-file"
                        multiple
                        onChange={async (e) => {
                          let formData = new FormData();
                          formData.append("file", e.target.files[0]);
                          formData.append("isPlaceImage", true);
                          const data = await dispatch(uploadImage(formData));
                          const response = data?.data;
                          console.log("data", response);
                          setImages(response);
                        }}
                      />
                    </div>
                  </div>
                </Stack>
              </Card>

              <Stack direction="row" justifyContent="center" sx={{ mt: 3 }}>
                {showLoading === true ? (
                  <div>
                    <Button
                      className="mb-5"
                      fullWidth
                      type="submit"
                      variant="contained"
                      size="large"
                    >
                      loading...
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Button
                      className="btn btn block mb-5"
                      fullWidth
                      type="submit"
                      variant="contained"
                      size="large"
                      onClick={handlePost}
                    >
                      Create Post
                    </Button>
                  </div>
                )}
              </Stack>
            </Grid>
          </Grid>
        </Form>
      </FormikProvider>
    </>
  );
};

export default Create_post;
