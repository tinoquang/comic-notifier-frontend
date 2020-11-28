import React from "react";
import { makeStyles } from "@material-ui/core";
import ComicPage from "../comic/page";

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    backgroundColor: '#F5F5F5'
  }
}))

const Home = ({ userID }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <AddComicForm userID={userID} />
      </div>
      {userID ? <ComicPage userID={userID} /> : null}
    </div>
  )
}

export default Home
