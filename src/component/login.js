import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    heigth: "100%",
  },
  container: {
    height: "100vh",
    display: "flex",
    flexWrap: "no-wrap",
    width: "60%",
    margin: "0 auto",
  },
  login: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    width: "60%",
  },
  banner: {
    fontFamily: "Itim",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid red",
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.login}>
          <div className={classes.banner}>
            <img
              src={"/assets/chatbot.svg"}
              alt="logo"
              style={{ height: "auto", width: "80%" }}
            ></img>
            <h1>COMIC NOTIFY</h1>
            <h2>Something likes slogan here</h2>
            <button>Login with facebook</button>
          </div>
        </div>
        <div className={classes.slider}>
          <div>Slider here</div>
        </div>
      </div>
    </div>
  );
}
