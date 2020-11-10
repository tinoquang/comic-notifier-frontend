import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import API from "../utils/api";

const useStyles = makeStyles({
  appbar: {
    background: "none",
    color: "#000",
    fontFamily: "Nunito",
    position: "sticky",
  },
  appbarWrapper: {
    width: "60%",
    margin: "0 auto",
    padding: "0",
  },
  appbarTitle: {
    display: "flex",
    flex: "1",
  },
  appbarName: {
    padding: "auto",
    fontSize: "1.5rem",
    margin: "auto 0",
  },
  logoutButton: {
    fontSize: "1rem",
  },
  avatar: {
    borderRadius: "50%",
  },
});

const Header = ({ name, profile_pic }) => {
  const classes = useStyles();

  const logout = () => {
    API.get("/logout")
      .then((response) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <AppBar className={classes.appbar}>
      <Toolbar className={classes.appbarWrapper}>
        <div className={classes.appbarTitle}>
          <img
            src={"/assets/chatbot.svg"}
            alt="logo"
            style={{ height: "auto", width: "75px" }}
          />
          <div className={classes.appbarName}>Comic Notify</div>
        </div>
        <img
          className={classes.avatar}
          src={profile_pic}
          alt=""
          style={{ height: "auto", width: "35px" }}
        />
        <IconButton className={classes.logoutButton} onClick={logout}>
          Log Out
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
