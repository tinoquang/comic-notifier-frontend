import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import "./searchBar.css"

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

export default function SearchBar({ value, onChange, onClick, onKeyPress }) {
  const classes = useStyles();

  return (
    // <form className={classes.root} noValidate autoComplete="off">
    //   <TextField
    //     className={classes.input}
    //     id="standard-basic"
    //     placeholder="Search your comic"
    //     value={value}
    //     onChange={onChange}
    //   />
    //   <IconButton
    //     className={classes.margin}
    //     onClick={onClick}
    //     type="submit"
    //     size="medium"
    //     // disabled={!value}
    //   >
    //     <SearchIcon fontSize="inherit" />
    //   </IconButton>
    // </form>
    <div className="search-container">
      <input type="text" onChange={onChange} onKeyPress={onKeyPress} placeholder="Search..."/>
      <div className="search"></div>
    </div>
  );
}
