import React from "react";
import API from "../utils/api";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // Card style
  card: {
    display: "flex",
    border: "1px solid red",
  },

  // Page style
}));

const Comic = ({ page, name, url, latestChap, imgURL, chapURL }) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div className={classes.avatar}>
        <a href={url} target="_blank">
          <img src={imgURL} alt="" style={{ height: "auto", width: "150px" }} />
        </a>
      </div>
      <div className={classes.cardInfo}>
        <a className={classes.name} href={url} target="_blank">
          {name}
        </a>
        <div className={classes.comicPage}>{page}</div>
        <div className={classes.chapter}>
          <span>{latestChap}</span>
        </div>
        <a href={chapURL} className="btn btn-success btn-read" target="_blank">
          Đọc ngay
        </a>
        <div type="button" className="btn btn-danger btn-delete">
          Xóa
        </div>
      </div>
    </div>
  );
};

const ComicPage = (props) => {
  const classes = useStyles();
  const [comics, setComics] = useState([]);

  const getUserComics = (userID) => {
    API.get(`api/v1/users/${userID}/comics`)
      .then((response) => {
        console.log(response.data.comics);
        setComics(response.data.comics);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUserComics(props.id);
  }, []);

  return (
    <div className={classes.page}>
      {comics.map((comic) => (
        <Comic key={comic.id} {...comic} />
      ))}
    </div>
  );
};

export default ComicPage;
