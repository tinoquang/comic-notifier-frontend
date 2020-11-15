import DelPopUp from "./popup";
import React from "react";
import { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 150,
    height: 200,
  },

  // Footer
  delete: {
    marginLeft: "auto",
  },
}));

export default function Comic({ _, userID, comic }) {
  const classes = useStyles();
  const theme = useTheme();
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
    <Card className={classes.root}>
      <CardMedia className={classes.cover} image={comic.imgURL} />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            <Link
              href={comic.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              {comic.name}
            </Link>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            <Link
              href={comic.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              {comic.latestChap}
            </Link>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton size="small">{comic.page}</IconButton>
          <IconButton
            className={classes.delete}
            aria-label="Delete"
            onClick={showModal}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </div>
      <DelPopUp userID={userID} comic={comic} open={modal} close={closeModal} />
      {/* <div className={classes.avatar}>
        <a href={comic.url} target="_blank" rel="noopener noreferrer">
          <img
            src={comic.imgURL}
            alt=""
            style={{ height: "200px", width: "150px" }}
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
        <div className={classes.chapter}>
          <span>{comic.latestChap}</span>
        </div>
        <div className={classes.comicPage}>{comic.page}</div>

        <a
          href={comic.chapURL}
          className="btn btn-success btn-read"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read
        </a>
        <div
          type="button"
          className="btn btn-danger btn-delete"
          onClick={showModal}
        >
          Xóa
        </div>
      </div> */}
    </Card>
  );
}
