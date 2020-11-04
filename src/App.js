import React from "react";
import "./App.css";
import Home from "./component/home/home";
import API from "./utils/api";
import Login from "./component/login";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {},
    };
  }

  checkLoginStatus() {
    API.get("/status")
      .then((response) => {
        if (localStorage.getItem("logged") !== "true") {
          localStorage.setItem("logged", "true");
          this.setState({});
        }
      })
      .catch((err) => {
        localStorage.removeItem("logged");
        this.setState({});
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  render() {
    return localStorage.getItem("logged") === "true" ? <Home /> : <Login />;
  }
}

export default App;
