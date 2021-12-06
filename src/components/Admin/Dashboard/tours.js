import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { deleteTour, getTours } from "../../../redux/actions/tour.action";
import { Edit, Delete, Info } from "@material-ui/icons";

const Tours = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [tours, setTours] = useState([]);
  const statetours = useSelector((state) => state.tours);
  console.log(statetours.tours, "ia ma");


  const handleDetailTour = async (e, id) => {
    e.preventDefault();
    history.push(`/single_tour/${id}`);
  };
  const handleDeleteTour = async (e, id) => {
    e.preventDefault();
    await dispatch(deleteTour(id));
    await dispatch(getTours());
  };
  const handleUpdateTour = async (e, id) => {
    e.preventDefault();
    history.push(`/update_tour/${id}`);
    await dispatch(getTours());
  };
  return (
   <div></div>
  );
};

export default Tours;
