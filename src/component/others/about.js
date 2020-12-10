import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& li": {
      marginBottom: "25px",
    },
    overflowWrap: "break-word",
    fontFamily: "Nunito",
    width: "60%",
    margin: "60px auto",
    paddingBottom: "200px",
    fontSize: "1.2rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      fontSize: "1rem",
      paddingRight: "32px",
      paddingLeft: "32px",
    },
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p>
        {" "}
        Nếu có lỗi gì, hay có đề xuất gì inbox cho mình qua Facebook:{" "}
        <a
          href="https://www.facebook.com/thienquang2804/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.facebook.com/thienquang2804/
        </a>
      </p>
      <p>Có thời gian sẽ fix :)</p>
    </div>
  );
}
