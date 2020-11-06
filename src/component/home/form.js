import React from "react";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import API from "../../utils/api";

const useStyles = makeStyles({
  form: {
    display: "flex",
  },
});

const Form = (props) => {
  const classes = useStyles();

  const [value, setValue] = useState("");
  const [err, setErr] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === "") {
      return;
    }

    const formData = new FormData();
    formData.append("comic", value);
    API.post(`/api/v1/users/${props.id}/comics`, formData)
      .then((response) => {
        setErr(false);
      })
      .catch((err) => {
        setErr(true);
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
      {err ? <span>URL is incorrect</span> : null}
    </div>
  );
};

export default Form;
