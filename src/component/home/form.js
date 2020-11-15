import React from "react";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import API from "../utils/api";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  form: {
    display: "flex",
    height: "50px",
  },
});

const AddComicForm = (props) => {
  const classes = useStyles();

  const [value, setValue] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === "") {
      return;
    }

    setValue("");
    setLoading(true);

    const formData = new FormData();
    formData.append("comic", value);
    API.post(`/api/v1/users/${props.userID}/comics`, formData)
      .then((response) => {
        setLoading(false);
        setStatus("Success !!!");
        window.location.reload();
      })
      .catch((err) => {
        setLoading(false);
        setStatus("Your URL seems not right !!!");
      });
  };

  return (
    <div className={classes.form}>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            name="comic"
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Add comic URL here..."
          />
        </label>
        {loading ? <CircularProgress /> : <Button type="submit">Add</Button>}
      </form>
      <span>{status}</span>
    </div>
  );
};

export default AddComicForm;
