import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { SimpleMenu } from './SimpleMenu';
import { SuggestBox } from './SuggestBox';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'relative',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  bar: {
    backgroundColor: '#032541',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export const Header = (props) => {
  const classes = useStyles();

  const { togglePopularChange, toggleNowplayingChange, toggleTopratedChange, toggleUpcomingChange, select, search, changeSearch } = props;
  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.bar}>
          <Typography variant="h5">
            Share Movie
          </Typography>
          <SuggestBox search={search} changeSearch={changeSearch} />
          <SimpleMenu 
            togglePopularChange={togglePopularChange} 
            toggleNowplayingChange={toggleNowplayingChange}
            toggleTopratedChange={toggleTopratedChange}
            toggleUpcomingChange={toggleUpcomingChange}
            select={select}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}