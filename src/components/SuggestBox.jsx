import React,{ useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core';
import { SuggestShowItem } from './SuggestShowItem';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  inputRoot: {
    backgroundColor: '#fff',
    width: 450,
    marginRight: 20,
  },
  box: {
    width: '100%',
    height: '100vh',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '500',
    backgroundColor: '#032541',
  },
  flexbox: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    right: '30%'
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 30,
    border: '1px solid #ffa251',
    backgroundColor: '#032541',
    borderRadius: '3px',
    color: '#ffa251',
    '&:hover': {
      backgroundColor: '#FFA251',
      color: '#032541'
    },
    '&:focus': {
      outline: 'none',
    }
  }
})




export const SuggestBox = (props) => {
  const { search, changeSearch } = props;

  const classes = useStyles();

  const [suggest, setSuggest] = useState([]);
  const [toggleClick, setToggleClick] = useState(false)

  const onClickSearch = () => {
    if (search === '') return
    setToggleClick(!toggleClick);
  }

  useEffect(() => {
    if (search === '') {
      return;
    } else {
      let url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=aa30d58a9845521cb6d81fd5bacc2bae`;
      fetch(url).then((res) => res.json()).then((datas) => {
        setSuggest(datas.results)
      }).catch(() => {
        console.log('error')
      })
    }
  }, [search])

  return (
    <>
      <div className={classes.flexbox}>
        <Autocomplete
          classes={{
            inputRoot: classes.inputRoot,
          }}
          id="free-solo-demo"
          freeSolo
          options={suggest ? suggest.map((option) => option.title) : null}
          renderInput={(params) => (
            <TextField {...params} variant="outlined" value={search} onChange={changeSearch} placeholder='映画を検索する' />
          )}
        />
        <button onClick={onClickSearch} className={classes.btn}>検索<SearchIcon style={{fontSize: 18}} /></button>
      </div>
      {toggleClick ? <div className={classes.box}><SuggestShowItem suggest={suggest} onClickSearch={onClickSearch} /></div> : null}
    </>
  );
}