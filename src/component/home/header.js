import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import API from "../../utils/api";

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

  const logout = () => {
    API.get("/logout")
      .then((response) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

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
          <IconButton onClick={logout}>Log Out</IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
