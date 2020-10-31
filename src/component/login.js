import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    heigth: "100%",
    display: "flex",
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
  },
  banner: {
    margin: "auto 0",
    fontFamily: "Itim",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "smoking-white",
  },
  logo: {
    margin: "auto",
  },
  botName: {
    marginBottom: "50px",
    fontSize: "3rem",
  },
  loginButton: {
    fontSize: "2.5rem",
  },
  slider: {
    display: "flex",
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.login}>
          <div className={`${classes.content} ${classes.banner}`}>
            <img
              className={classes.logo}
              src={"/assets/chatbot.svg"}
              alt="logo"
              style={{ height: "auto", width: "100%" }}
            ></img>
            <div className={classes.botName}>COMIC NOTIFY BOT</div>
            <button className={classes.loginButton}>Login with facebook</button>
          </div>
        </div>
        <div className={(classes.content, classes.slider)}>
          <img
            className={classes.align}
            src={"/assets/bot-logo.jpg"}
            alt="slider"
            style={{ height: "auto", width: "80%" }}
          />
        </div>
      </div>
    </div>
  );
}
