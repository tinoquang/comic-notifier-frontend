import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
import API from "../utils/api";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {},
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function SearchBar(props) {
  const classes = useStyles();

  const [value, setValue] = useState("");

  const handleClick = (event) => {
    event.preventDefault();

    API.get(`api/v1/users/${props.userID}/comics`, {
      params: {
        q: value,
      },
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const handeChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          className={classes.input}
          id="standard-basic"
          placeholder="Search your comic"
          value={value}
          onChange={handeChange}
        />
        <IconButton
          className={classes.margin}
          onClick={handleClick}
          type="submit"
          size="medium"
        >
          <SearchIcon fontSize="inherit" />
        </IconButton>
      </form>
    </div>
  );
}
