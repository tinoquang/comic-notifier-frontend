import React from "react";
import API from "../utils/api";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Pagination from "@material-ui/lab/Pagination";
import SearchBar from "./searchBar";
import Comic from "./comic";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    width: "60%",
    margin: "0 auto",
  },

  // Page styling
  page: {
    // marginTop: "50px",
  },
  pagination: {
    margin: "20px",
    display: "flex",
    justifyContent: "center",
  },
}));

const ComicPage = (props) => {
  const limit = 4;
  const classes = useStyles();

  const [searchValue, setSearchValue] = useState("");
  const [comics, setComics] = useState([]);
  const [page, setPage] = useState(1);

  const getUserComics = (userID) => {
    API.get(`api/v1/users/${userID}/comics`)
      .then((response) => {
        setComics(response.data.comics);
      })
      .catch((err) => console.log(err));
  };

  const handleSearchClick = (event) => {
    event.preventDefault();

    if (searchValue === "") {
      getUserComics(props.userID);
      return;
    }
    API.get(`api/v1/users/${props.userID}/comics`, {
      params: {
        q: searchValue,
      },
    })
      .then((response) => {
        setSearchValue("");
        setComics(response.data.comics);
      })
      .catch((err) => console.log(err));
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    getUserComics(props.userID);
  }, [props.id]);

  return (
    <div className={classes.container}>
      <SearchBar
        value={searchValue}
        onChange={handleSearchChange}
        onClick={handleSearchClick}
      />

      {comics.length !== 0 ? (
        <div className={classes.page}>
          <Grid container spacing={2}>
            {comics.slice((page - 1) * limit, page * limit).map((comic) => (
              <Grid item xs={6}>
                <Comic key={comic.id} userID={props.userID} comic={comic} />
              </Grid>
            ))}
          </Grid>
          <div className={classes.pagination}>
            <Pagination
              count={Math.ceil(comics.length / 4)}
              onChange={handlePageChange}
            />
          </div>
        </div>
      ) : (
        <div>Comic not found</div>
      )}
    </div>
  );
};

export default ComicPage;
