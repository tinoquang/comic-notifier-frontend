import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import "./searchBar.css";

const useStyles = makeStyles((theme) => ({
  searchBox: {
    position: "relative",
    width: "100%",
    height: "50px",
  },
  alarm: {
    position: "absolute",
    bottom: "0",
    paddingLeft: "3rem",
    color: "red",
  },
}));

export default function SearchBar({
  value,
  onChange,
  onClick,
  onKeyPress,
  empty,
}) {
  const classes = useStyles();

  return (
    <div className={classes.searchBox}>
      <div className="search-container">
        <input
          type="text"
          onChange={onChange}
          onKeyPress={onKeyPress}
          placeholder="Search your comic"
        />
        <div className="search"></div>
        {empty ? (
          <div className={classes.alarm}>Không tìm thấy truyện !!!</div>
        ) : null}
      </div>
    </div>
  );
}
