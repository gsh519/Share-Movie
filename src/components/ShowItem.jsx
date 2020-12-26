import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: 800,
    minHeight: 420,
    margin: '0px auto',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '500',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: 500,
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 300,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  point: {
    border: '2px solid #ffa251',
    margin: 10,
    borderRadius: '50%',
    backgroundColor: '#032541',
    width: 65,
    height: 65,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    padding: 23,
    color: '#fff',
    '&:hover': {
      color: '#ffa251',
    }
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '14px',
  },
  clear: {
    position: 'absolute',
    right: 10,
    top: 10,
    fontSize: 30,
  }
}));


export const ShowItem = (props) => {

  const classes = useStyles();
  const {index, data, toggleFlag} = props;

  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + data[index].poster_path}
          title="Live from space album cover"
        />
        <ClearIcon className={classes.clear} onClick={toggleFlag} />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5" style={{fontSize: '33px', margin: '30px 0 13px 0',}}>
              {data[index].title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" style={{marginBottom: 15}}>
              公開日: {data[index].release_date}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              概要
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" style={{fontSize: 17, marginBottom: 20}}>
              {data[index].overview}
            </Typography>
            <div className={classes.flex}>
              <div>
                <Typography color="textSecondary" className={classes.point}>
                  {data[index].vote_count}
                </Typography>
                <p className={classes.flexCenter}>投票数</p>
              </div>
              <div>
                <Typography color="textSecondary" className={classes.point}>
                  {data[index].vote_average}
                </Typography>
                <p className={classes.flexCenter}>投票平均</p>
              </div>
              <div>
                <Typography color="textSecondary" className={classes.point}>
                  {Math.floor(data[index].popularity)}
                </Typography>
                <p className={classes.flexCenter}>人気度</p>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </>
  )
}