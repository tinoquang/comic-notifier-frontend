import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Header from "./header";
import User from "../user";
import ComicPage from "../comic/page";
import API from "../utils/api";
import AddComicForm from "./form";
import SearchBar from "./searchBar";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "60%",
    margin: "0 auto",
  },
}));

const Home = () => {
  const classes = useStyles();

  const [user, setUser] = useState({});
  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  const getUserInfo = () => {
    const id = readCookie("upid");
    API.get(`/api/v1/users/${id}`)
      .then((response) => {
        setUser({ ...response.data });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
      <Header {...user} />
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.form}>
            <AddComicForm userID={user.psid} />
            <SearchBar userID={user.psid} />
          </div>
          {/* <User /> */}
          {user.psid ? <ComicPage userID={user.psid} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
