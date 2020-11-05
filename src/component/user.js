import React from "react";
import API from "../utils/api";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    height: "100%",
    margin: "20px 0",
    padding: "0 20px",
    border: "1px solid red",
  },
}));

const User = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        src={
          "https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-1/p200x200/83012518_1297382840446432_5085035197343203328_o.jpg?_nc_cat=102&ccb=2&_nc_sid=7206a8&_nc_ohc=gfw1J1D_qAMAX_6ngTx&_nc_ht=scontent.fsgn2-5.fna&tp=6&oh=ead456a23715372618dc68fab27d9117&oe=5FC5E07A"
        }
        alt=""
      ></img>
    </div>
  );
};

export default User;
