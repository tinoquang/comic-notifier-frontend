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

const Comic = ({ _, userID, comic }) => {
  const classes = useStyles();

  const unsubscribeComic = (event) => {
    event.preventDefault();
    API.delete(`api/v1/users/${userID}/comics/${comic.id}`)
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes.card}>
      <div className={classes.avatar}>
        <a href={comic.url} target="_blank" rel="noopener noreferrer">
          <img
            src={comic.imgURL}
            alt=""
            style={{ height: "auto", width: "150px" }}
          />
        </a>
      </div>
      <div className={classes.cardInfo}>
        <a
          className={classes.name}
          href={comic.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {comic.name}
        </a>
        <div className={classes.comicPage}>{comic.page}</div>
        <div className={classes.chapter}>
          <span>{comic.latestChap}</span>
        </div>
        <a
          href={comic.chapURL}
          className="btn btn-success btn-read"
          target="_blank"
          rel="noopener noreferrer"
        >
          Đọc ngay
        </a>
        <div
          type="button"
          className="btn btn-danger btn-delete"
          onClick={unsubscribeComic}
        >
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
        setComics(response.data.comics);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUserComics(props.id);
  }, [props.id]);

  return (
    <div className={classes.page}>
      {comics.map((comic) => (
        <Comic key={comic.id} userID={props.id} comic={comic} />
      ))}
    </div>
  );
};

export default ComicPage;
