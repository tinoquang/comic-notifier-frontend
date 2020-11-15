import React from "react";
import API from "../utils/api";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import CheckIcon from "@material-ui/icons/Check";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  popup: {
    display: "flex",
    justifyContent: "center",
  },
  center: {
    margin: "auto",
  },
}));

const DelPopUp = ({ userID, comic, open, close }) => {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const confirmDelete = (event) => {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);

    API.delete(`api/v1/users/${userID}/comics/${comic.id}`)
      .then((response) => {
        setLoading(false);
        setSuccess(true);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle id="dialog-title">Delete comic</DialogTitle>
      <DialogContent className={classes.popup}>
        {loading ? (
          <CircularProgress />
        ) : (
          <div>
            {success ? (
              <CheckIcon />
            ) : (
              <div>
                <DialogContentText id="alert-dialog-description">
                  Remove notification when{" "}
                  <span style={{ fontWeight: "bold" }}>{comic.name}</span>{" "}
                  update new chapter
                </DialogContentText>
                <DialogActions>
                  <Button variant="contained" color="secondary" onClick={close}>
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={confirmDelete}
                  >
                    OK
                  </Button>
                </DialogActions>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DelPopUp;
