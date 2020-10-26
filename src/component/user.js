import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { Card, Image } from "react-bootstrap";

function User() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <Card style={{ width: "600px" }}>
      <Card.Header>
        {!login && (
          <FacebookLogin
            appId="145792170193635"
            autoLoad={false}
            fields="name,email,picture"
            scope="public_profile"
            callback={responseFacebook}
            icon="fa-facebook"
          />
        )}
        {login && <Image src={picture} roundedCircle />}
      </Card.Header>
      {login && (
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
        </Card.Body>
      )}
    </Card>
  );
}

export default User;
