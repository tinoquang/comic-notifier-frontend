import React from "react";
import API from "../../utils/api";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import DelPopUp from "./popup";

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

  const [modal, setModal] = useState(false);

  const showModal = (event) => {
    event.preventDefault();
    console.log("show modal");
    setModal(true);
  };
  const closeModal = (event) => {
    event.preventDefault();
    setModal(false);
  };

  return (
    <div>
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
            onClick={showModal}
          >
            Xóa
          </div>
        </div>
      </div>
      <DelPopUp userID={userID} comic={comic} open={modal} close={closeModal} />
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
    <div className={classes.comicPage}>
      {comics.map((comic) => (
        <Comic key={comic.id} userID={props.id} comic={comic} />
      ))}
    </div>
  );
};

export default ComicPage;
