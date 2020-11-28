import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    heigth: "100%",
    display: "flex",
    backgroundImage: `url("${process.env.PUBLIC_URL + "/assets/bg-3.png"}")`,
    justifyContent: "center",
  },
  container: {
    height: "100vh",
    display: "flex",
    flexWrap: "no-wrap",
    width: "80%",
  },

  login: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  banner: {
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: "2%",
    margin: "auto 0",
    fontFamily: "Itim",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    margin: "auto",
  },
  botName: {
    fontSize: "3rem",
    textAlign: "center",
  },
  loginButton: {
    fontSize: "2.5rem",
    margin: "40px",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
  slider: {
    display: "flex",
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function Login() {
  const classes = useStyles();

  const login = () => {
    window.location.assign(
      `https://www.facebook.com/v8.0/dialog/oauth?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&state=${process.env.REACT_APP_STATE}`
    );
  };
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.login}>
          <div className={classes.banner}>
            <img
              className={classes.logo}
              src={"/assets/chatbot.svg"}
              alt="logo"
              style={{ height: "auto", width: "100%" }}
            ></img>
            <div className={classes.botName}>COMIC NOTIFY BOT</div>
            <button className={classes.loginButton} onClick={login}>
              Log in with Facebook
            </button>
          </div>
        </div>
        <div className={(classes.content, classes.slider)}>
          <img
            src={"/assets/bot-logo.jpg"}
            alt="slider"
            style={{ height: "auto", width: "60%" }}
          />
        </div>
      </div>
    </div>
  );
}
