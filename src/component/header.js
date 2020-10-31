import React from "react";
import { makeStyles, AppBar } from "@material-ui/core";

const useStyles = makeStyles({});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} color="primary" position="fixed">
      <h1>This is appbar</h1>
    </AppBar>
  );
};

export default Header;
