import React from 'react'
import Grid from '@material-ui/core/Grid'

import Comic from './comic'

export default function comicList ({ page, limit, comics, userID }) {
  return (
    <Grid container spacing={2}>
      {comics.slice((page - 1) * limit, page * limit).map(comic => (
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Comic key={comic.id} userID={userID} comic={comic} />
        </Grid>
      ))}
    </Grid>
  )
}
