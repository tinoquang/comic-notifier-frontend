import React from "react";
import API from "../utils/api";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import SearchBar from "./searchBar";
import Comic from "./comic";

const useStyles = makeStyles((theme) => ({
  container: {
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
  const limit = 6;
  const classes = useStyles();

  const [getComic, setGetComic] = useState(true);
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

    setGetComic(false);
    if (searchValue === "") {
      setPage(1);
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
  }, [props.userID]);

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
              <Grid item xs={4}>
                <Comic key={comic.id} userID={props.userID} comic={comic} />
              </Grid>
            ))}
          </Grid>
          <div className={classes.pagination}>
            <Pagination
              count={Math.ceil(comics.length / limit)}
              onChange={handlePageChange}
            />
          </div>
        </div>
      ) : (
        <div>
          {getComic ? (
            <div>
              <h2>Bạn chưa đăng ký nhận thông báo cho truyện</h2>
              <h4>Tutorial</h4>
              <p>- Lấy đường dẫn của truyện trên website, ví dụ: </p>
            </div>
          ) : (
            <div>Không tìm thấy truyện</div>
          )}
        </div>
      )}
    </div>
  );
};

export default ComicPage;
