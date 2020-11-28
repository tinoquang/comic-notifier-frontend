import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./component/home/home";
import API from "./component/utils/api";
import Login from "./component/login";
import Header from "./component/home/header";
import Tutorial from "./component/others/tutorial";
import About from "./component/others/about";

const App = () => {
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  const checkLoginStatus = () => {
    API.get("/status")
      .then((response) => {
        if (localStorage.getItem("logged") !== "true") {
          localStorage.setItem("logged", "true");
        }
        let isLoggedStorage = JSON.parse(localStorage.getItem("logged"));
        setIsLogged(isLoggedStorage);
      })
      .catch((err) => {
        localStorage.removeItem("logged");
      });
  };

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
    if (id) {
      API.get(`/api/v1/users/${id}`)
        .then((response) => {
          setUser({ ...response.data });
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    getUserInfo();
    checkLoginStatus();
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      {isLogged ? <Header {...user} /> : null}
      <Switch>
        <Route path="/" exact>
          {isLogged ? <Home userID={user.appid} /> : <Login />}
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/tutorial">
          <Tutorial />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
