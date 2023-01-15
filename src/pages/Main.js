import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/common/Nav";
import Dashboard from "../components/userA/Dashboard";
import Profile from "../components/userA/Profile";
import NoAuth from "../components/common/NoAuth";

function Main() {
  let auth = useSelector((state) => state.loggedin);
  let user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  console.log(auth);
  console.log(user);

  dispatch({
    type: localStorage.getItem("type"),
    user: localStorage.getItem("user"),
  });

  return (
    <>
      {auth ? (
        <div className="container-fluid">
          <Navbar />

          <Dashboard />
        </div>
      ) : (
        <NoAuth />
      )}
    </>
  );
}

export default Main;
