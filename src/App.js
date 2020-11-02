import React from "react";
import "./App.css";
import Home from "./component/home";
import API from "./utils/api";
import Login from "./component/login";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isLogged: false,
      user: {},
    };
  }

  checkLoginStatus() {
    API.get("/status")
      .then((response) => {
        this.setState({
          isLogged: true,
        });
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleLogin = (data) => {
    this.setState({
      isLogged: true,
      user: data.user,
    });
  };

  componentDidMount() {
    this.checkLoginStatus();
  }

  render() {
    return this.state.isLogged ? <Home /> : <Login />;
  }
}

export default App;
