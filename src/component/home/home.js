import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Header from "./header";
import ComicPage from "../comic/page";
import API from "../utils/api";
import AddComicForm from "./form";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    backgroundColor: "#F5F5F5",
  },
}));

const Home = ({psid}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Header {...user} /> */}
      <div className={classes.form}>
        {/* <AddComicForm userID={psid} /> */}
      </div>
      {psid ? <ComicPage userID={psid} /> : null}
    </div>
  );
};

export default Home;
