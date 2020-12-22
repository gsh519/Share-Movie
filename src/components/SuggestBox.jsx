import React,{ useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core';
import { SuggestShowItem } from './SuggestShowItem';

const useStyles = makeStyles({
  inputRoot: {
    backgroundColor: '#fff',
    width: 450,
  },
})




export const SuggestBox = (props) => {
  const { search, changeSearch } = props;

  const classes = useStyles();

  const [suggest, setSuggest] = useState([]);
  const [toggleClick, setToggleClick] = useState(false)

  const onClickSearch = () => {
    setToggleClick(!toggleClick);
  }

  useEffect(() => {
    if (search === '') {
      let url = 'http://api.themoviedb.org/3/movie/popular?page=1&api_key=aa30d58a9845521cb6d81fd5bacc2bae';
      fetch(url).then((res) => res.json()).then((datas) => {
        setSuggest(datas.results)
      }).catch(() => {
        console.log('error')
      })
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
      <Autocomplete
        classes={{
          inputRoot: classes.inputRoot,
        }}
        id="free-solo-demo"
        freeSolo
        options={suggest ? suggest.map((option) => option.title) : null}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" value={search} onChange={changeSearch} />
        )}
      />
      <button onClick={onClickSearch}>検索</button>
      {toggleClick ? <SuggestShowItem suggest={suggest} /> : null}
    </>
  );
}