import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { ShowItem } from './ShowItem';
import Backdrop from '@material-ui/core/Backdrop';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 230,
    margin: '0 20px 50px',
    position: 'relative',
  },
  media: {
    height: 300,
  },
  display: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingInlineStart: '0px',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export const MovieList = (props) => {
  const classes = useStyles();

  const { movieDatas } = props;

  const [showFlag, setShowFlag] = useState(false)
  const [idx, setIdx] = useState(null) 

  const toggleFlag = (index) => {
    setShowFlag(!showFlag)
    setIdx(index)
  }

  // const handleClose = () => {
  //   setShowFlag(false);
  // };

  return (
    <>
      <ul className={classes.display}>
        {movieDatas.map((data, index) => {
          return (
            <>
              <Card key={index} className={classes.root} onClick={() => toggleFlag(index)}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + data.poster_path}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {data.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {data.release_date}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              
            </>
          )
        })}
      </ul>
      {showFlag ? <ShowItem index={idx} data={movieDatas} toggleFlag={toggleFlag} /> : null }
      {/* <Backdrop className={classes.backdrop} open={showFlag} onClick={handleClose}>
        <ShowItem index={idx} data={movieDatas} />
      </Backdrop> */}
    </>
  )
};