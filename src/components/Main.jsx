import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import { MovieList } from './MovieList'

const useStyles = makeStyles(() => ({
  container: {
    padding: '0 100px',
  },
  border: {
    height: '100vh',
  },
  color: {
    color: '#FFA251',
  }
}));

export const Main = (props) => {
  const classes = useStyles();

  const { movieDatas, select, } = props;

  return (
    <>
      <CssBaseline />
      <Container className={classes.container} >
        <Typography component="div" className={classes.border}>
          <h1 className={classes.color}>{select}</h1>
          <MovieList movieDatas={movieDatas} />
        </Typography>
      </Container>
    </>
  )
}