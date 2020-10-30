import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    minHeight: "100vh",
    backgroundImage: `url("/assets/bg.jpg")`,
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Login</h1>
    </div>
  );
}
