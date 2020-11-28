import React from "react";
import API from "../utils/api";
import { useState, useEffect } from "react";
import { CircularProgress, makeStyles } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import SearchBar from "./searchBar";
import ComicList from "./comicList";


const useStyles = makeStyles(theme => ({
  container: {
    width: '60%',
    margin: '0 auto'
  },

  // Page styling
  page: {
    marginTop: '60px'
  },
  pagination: {
    margin: '20px',
    paddingBottom: '10px',
    display: 'flex',
    justifyContent: 'center'
  },
  spinnerContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '2rem'
  }
}))

const ComicPage = props => {
  const limit = 6
  const classes = useStyles()


  const [searchEmpty, setSeachEmpty] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [comics, setComics] = useState([]);
  const [page, setPage] = useState(1);
  const [isComicLoad, setIsComicLoad] = useState(false);


  const getUserComics = userID => {
    API.get(`api/v1/users/${userID}/comics`)
      .then((response) => {
        setComics(response.data.comics);
        setIsComicLoad(true);
        setSeachEmpty(false);
      })
      .catch(err => console.log(err))
  }

  const handleSearchClick = () => {
    if (searchValue === "") {
      setPage(1);
      getUserComics(props.userID);
      return;
    }
    API.get(`api/v1/users/${props.userID}/comics`, {
      params: {
        q: searchValue
      }
    })
      .then((response) => {
        setSearchValue("");
        if (response.data.comics.length !== 0) {
          setComics(response.data.comics);
        } else {
          setSeachEmpty(true);
        }
      })
      .catch(err => console.log(err))
  }

  const handleSearchChange = event => {
    setSearchValue(event.target.value)
  }

  const handleSearchKeyPress = (event) => {
    if (event.key === "Enter") {
      event.target.value = "";
      handleSearchClick();
    }
  }

  const handlePageChange = (event, value) => {
    setPage(value)
  }

  useEffect(() => {
    getUserComics(props.userID)
  }, [props.userID])

  return (
    <div className={classes.container}>
      {isComicLoad ? (
        <SearchBar
          value={searchValue}
          onChange={handleSearchChange}
          onClick={handleSearchClick}
          onKeyPress={handleSearchKeyPress}
          empty={searchEmpty}
        />
      ) : null}
      {isComicLoad ? (
        <div className={classes.page}>
          <div>
            {comics.length !== 0 ? (
              <div>
                <ComicList
                  page={page}
                  limit={limit}
                  comics={comics}
                  userID={props.userID}
                />
                <div className={classes.pagination}>
                  <Pagination
                    count={Math.ceil(comics.length / limit)}
                    onChange={handlePageChange}
                  />
                </div>
              </div>
            ) : (
              <h2>
                Bạn chưa đăng ký nhận thông báo cho truyện, xem hướng dẫn tại
                đây
              </h2>
            )}
          </div>
        </div>
      ) : (
        <div className={classes.spinnerContainer}>
          <CircularProgress color="inherit" />
        </div>
      )}
    </div>
  )
}

export default ComicPage
