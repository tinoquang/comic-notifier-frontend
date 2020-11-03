import React from "react";
import { makeStyles } from "@material-ui/core";
import Header from "./header";
import API from "../../utils/api";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
}));

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <Header />
    </div>
  );
};

export default Home;
