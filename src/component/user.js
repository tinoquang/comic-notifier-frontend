import React from "react";
import FacebookLogin from "react-facebook-login";
import { Card, Image } from "react-bootstrap";
import API from "../utils/api";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      data: {},
      picture: "",
    };
  }

  fillValidUserInfo(response) {
    this.setState({
      login: true,
      data: response,
      picture: response.picture.data.url,
    });
  }

  responseFacebook = async (response) => {
    if (response.status === "unknown") {
      return;
    }
    const body = new FormData();
    body.append("name", response.name);
    body.append("app-token", response.accessToken);
    body.append("userID", response.userID);

    // Send data to backend server to validate
    await API.post("/login", body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        this.fillValidUserInfo(response);
      })
      .catch((reason) => console.log(reason.response.statusText));
  };

  render() {
    return (
      <Card style={{ width: "600px" }}>
        <Card.Header>
          {this.state.login ? (
            <Image src={this.state.picture} roundedCircle />
          ) : (
            <FacebookLogin
              appId="145792170193635"
              autoLoad={true}
              fields="name,email,picture"
              scope="public_profile"
              callback={this.responseFacebook}
              icon="fa-facebook"
            />
          )}
        </Card.Header>
        {this.state.login && (
          <Card.Body>
            <Card.Title>{this.state.data.name}</Card.Title>
          </Card.Body>
        )}
      </Card>
    );
  }
}

export default User;
