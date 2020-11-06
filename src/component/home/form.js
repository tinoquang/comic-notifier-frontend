import React from "react";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import API from "../../utils/api";

const useStyles = makeStyles({
  form: {
    display: "flex",
  },
});

const AddComicForm = (props) => {
  const classes = useStyles();

  const [value, setValue] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("");

    if (value === "") {
      return;
    }

    const formData = new FormData();
    formData.append("comic", value);
    API.post(`/api/v1/users/${props.id}/comics`, formData)
      .then((response) => {
        setStatus("Success !!!");
        window.location.reload();
      })
      .catch((err) => {
        setStatus("Your URL seems not right !!!");
      });

    setValue("");
  };

  return (
    <div className={classes.form}>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Use comic URL here..."
          />
        </label>
        <input type="submit" value="Add" />
      </form>
      <span>{status}</span>
    </div>
  );
};

export default AddComicForm;
