import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
const useStyles = makeStyles({
  appbar: {
    background: "none",
    color: "#000",
    fontFamily: "Nunito",
  },
  appbarWrapper: {
    width: "60%",
    margin: "0 auto",
  },
  appbarTitle: {
    display: "flex",
    flex: "1",
  },
  appbarName: {
    padding: "auto",
    fontSize: "2.5rem",
    margin: "auto 0",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.appbarWrapper}>
          <div className={classes.appbarTitle}>
            <img
              src={"/assets/chatbot.svg"}
              alt=""
              style={{ height: "auto", width: "75px" }}
            />
            <div className={classes.appbarName}>Comic Notify</div>
          </div>
          <IconButton>
            <SortIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
