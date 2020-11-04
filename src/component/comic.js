import React from "react";
import API from "../utils/api";

const ComicCard = () => {
  return <div>Card</div>;
};

const ComicPage = ({ psid, appid, name }) => {
  console.log("comic page", psid, appid, name);
  return <div>Comic</div>;
};

export default ComicPage;
