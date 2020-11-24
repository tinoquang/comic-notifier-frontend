import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import "./searchBar.css"

const useStyles = makeStyles((theme) => ({
  searchBox: {
    position: "relative",
    width: "100%",
    height: "50px"
  }
}));

export default function SearchBar({ value, onChange, onClick, onKeyPress }) {
  const classes = useStyles();

  return (
    <div className={classes.searchBox}>
      <div className="search-container">
        <input type="text" onChange={onChange} onKeyPress={onKeyPress} placeholder="Search your comic"/>
        <div className="search"></div>
      </div>
    </div>
  );
}
