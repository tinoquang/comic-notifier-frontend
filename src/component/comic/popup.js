import React from "react";
import API from "../utils/api";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import CheckIcon from "@material-ui/icons/Check";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  popup: {},
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
    <Dialog className={classes.popup} open={open} onClose={close}>
      <DialogTitle id="dialog-title">Unsubscribe Comic</DialogTitle>
      <DialogContent>
        {loading ? (
          <CircularProgress />
        ) : (
          <div>
            {success ? (
              <CheckIcon />
            ) : (
              <div>
                <div className={classes.alertMsg}>
                  <div>Are you sure to unsubscribe</div>
                  <div>{comic.name}</div>
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={confirmDelete}
                >
                  Yes
                </Button>
                <Button variant="contained" color="secondary" onClick={close}>
                  No
                </Button>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DelPopUp;
