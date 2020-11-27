import DelPopUp from "./popup";
import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "column",
    maxWidth: "400px",
    height: "350px",
    margin: "auto",
  },

  media: {
    backgroundColor: "gray",
    margin: "auto",
    width: "400px",
    height: "200px",
  },
  comicInfo: {
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  noMaxWidth: {
    maxWidth: "none",
  },
}));

export default function Comic({ _, userID, comic }) {
  const classes = useStyles();
  const [modal, setModal] = useState(false);

  const showModal = (event) => {
    event.preventDefault();
    setModal(true);
  };
  const closeModal = (event) => {
    event.preventDefault();
    setModal(false);
  };

  return (
    <Card className={classes.root}>
      <Link href={comic.chapURL} target="_blank" rel="noopener noreferrer">
        <CardMedia
          className={classes.media}
          component="img"
          alt={comic.name}
          image={comic.imgURL}
        />
      </Link>
      <CardContent className={classes.content}>
        <Typography className={classes.comicInfo} component="div">
          <Link
            href={comic.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "inherit",
              fontSize: "1.5rem",
              whiteSpace: "nowrap",
            }}
          >
            {comic.name}
          </Link>
        </Typography>
        <Typography
          className={classes.comicInfo}
          component="div"
          color="textSecondary"
        >
          <Link
            href={comic.chapURL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marinTop: "5px",
              color: "inherit",
              fontSize: "0.75rem",
              whiteSpace: "nowrap",
            }}
          >
            {comic.latestChap}
          </Link>
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{ padding: "5px" }}>
        <Typography style={{ color: "	#808080", marginLeft: "10px" }}>
          {comic.page}
        </Typography>
        <IconButton
          className={classes.delete}
          aria-label="Delete"
          onClick={showModal}
          style={{
            marginLeft: "auto",
          }}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
      <DelPopUp userID={userID} comic={comic} open={modal} close={closeModal} />
    </Card>
  );
}
