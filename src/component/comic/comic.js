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
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";

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
    console.log("show modal");
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

      <div className={classes.details}>
        <CardContent className={classes.content} >
          <Typography
            className={classes.comicInfo}
            component="div"
            variant="title"
          >
            <Tooltip
              classes={{ tooltip: classes.noMaxWidth }}
              title={<span style={{ fontSize: "1.25rem" }}>{comic.name}</span>}
              placement="top-start"
              enterDelay={500}
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 300 }}
            >
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
            </Tooltip>
          </Typography>
          <Typography
            className={classes.comicInfo}
            component="div"
            variant="latest-chap"
            color="textSecondary"
          >
            <Tooltip
              classes={{ tooltip: classes.noMaxWidth }}
              title={
                <span style={{ fontSize: "1rem" }}>{comic.latestChap}</span>
              }
              placement="top-start"
              enterDelay={500}
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 300 }}
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
            </Tooltip>
          </Typography>
        </CardContent>
        <CardActions disableSpacing style={{padding: "5px"}}>
          <Typography style={{ color: "	#808080", marginLeft: "10px" }}>
            {comic.page}
          </Typography>

          <Tooltip title="Delete" arrow>
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
          </Tooltip>
        </CardActions>
      </div>
      <DelPopUp userID={userID} comic={comic} open={modal} close={closeModal} />
    </Card>
  );
}
