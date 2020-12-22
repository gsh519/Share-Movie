import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  menuButton: {
    color: '#FFA251',
    border: '1px solid #FFA251',
    '&:hover': {
      backgroundColor: '#FFA251',
      color: '#032541'
    }
  },
}))

export const SimpleMenu = (props) => {
  const classes = useStyles();

  const { togglePopularChange, toggleNowplayingChange, toggleUpcomingChange, toggleTopratedChange, select } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.menuButton}>
        {select}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={togglePopularChange}>人気</MenuItem>
        <MenuItem onClick={toggleNowplayingChange}>公開中</MenuItem>
        <MenuItem onClick={toggleTopratedChange}>高評価</MenuItem>
        <MenuItem onClick={toggleUpcomingChange}>新作公開</MenuItem>
      </Menu>
    </div>
  );
}
