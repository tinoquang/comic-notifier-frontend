import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Toolbar, Box, Hidden } from "@material-ui/core";
import API from "../utils/api";
import HeaderMenu from "../comic/menu";

const useStyles = makeStyles({
  appbar: {
    background: "white",
    color: "#000",
    fontFamily: "Nunito",
    position: "sticky",
  },
  appbarWrapper: {
    width: "60%",
    margin: "0 auto",
    padding: "0",
    minWidth: "360px",
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
    fontFamily: "Nunito",
    fontSize: "0.75rem",
  },
  avatar: {
    borderRadius: "50%",
  },
});

const Header = ({ psid, name, profile_pic }) => {
  const classes = useStyles();
  const history = useHistory();

  const logout = () => {
    API.get("/logout")
      .then((response) => {
        localStorage.removeItem("logged");
        history.push("/");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const backToHome = () => {
    history.push("/");
  };
  const toAbout = () => {
    history.push("/about");
  };
  const toTutorial = () => {
    history.push("/tutorial");
  };

  return (
    <AppBar className={classes.appbar}>
      <Toolbar className={classes.appbarWrapper}>
        <div
          className={classes.appbarTitle}
          onClick={backToHome}
          style={{ cursor: "pointer" }}
        >
          <img
            src={"/assets/chatbot.svg"}
            alt="logo"
            style={{ height: "auto", width: "75px" }}
          />
          <div className={classes.appbarName}>Comic Notify</div>
        </div>
        <Box display="flex" fontWeight="fontWeightLight" alignItems="center">
          <Hidden only={["xs", "sm"]}>
            <Box mr={2}>
              <Button className={classes.logoutButton} onClick={toAbout}>
                About
              </Button>
              <Button className={classes.logoutButton} onClick={toTutorial}>
                Tutorial
              </Button>
            </Box>
          </Hidden>
          <Hidden smUp>
            <HeaderMenu
              toAbout={toAbout}
              toTutorial={toTutorial}
              logout={logout}
            />
          </Hidden>
          <Hidden only={["xs", "sm"]}>
            <img
              className={classes.avatar}
              src={profile_pic}
              alt=""
              style={{ height: "auto", width: "35px" }}
            />

            <Button className={classes.logoutButton} onClick={logout}>
              Log Out
            </Button>
          </Hidden>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
