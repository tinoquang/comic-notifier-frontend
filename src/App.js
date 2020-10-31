import "./App.css";
import Login from "./component/login";
import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Login />
    </div>
  );
};

export default App;
