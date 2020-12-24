import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';

const App = () => {

  const [movieDatas, setMovieDatas] = useState([]);
  const [popularSelect, setPopularSelect] = useState(true);
  const [nowplaying, setNowplaying] = useState(false)
  const [toprated, setTopratd] = useState(false)
  const [upcoming, setUpcoming] = useState(false)
  const [select, setSelect] = useState('人気')
  const [search, setSearch] = useState('')

  const changeSearch = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  const togglePopularChange = () => {
    setSelect('人気')
    setNowplaying(false)
    setTopratd(false)
    setUpcoming(false)
    setPopularSelect(true);
  }

  const toggleNowplayingChange = () => {
    setSelect('公開中')
    setTopratd(false)
    setUpcoming(false)
    setPopularSelect(false);
    setNowplaying(true);
  }

  const toggleTopratedChange = () => {
    setSelect('高評価')
    setUpcoming(false)
    setPopularSelect(false);
    setNowplaying(false);
    setTopratd(true)
  }

  const toggleUpcomingChange = () => {
    setSelect('新作公開')
    setPopularSelect(false);
    setNowplaying(false);
    setTopratd(false)
    setUpcoming(true)
  }

  const popularUrl = 'http://api.themoviedb.org/3/movie/popular?api_key=aa30d58a9845521cb6d81fd5bacc2bae';
  const nowplayingUrl = 'http://api.themoviedb.org/3/movie/now_playing?page=1&api_key=aa30d58a9845521cb6d81fd5bacc2bae'
  const topratedUrl = 'http://api.themoviedb.org/3/movie/top_rated?page=1&api_key=aa30d58a9845521cb6d81fd5bacc2bae'
  const upcomingUrl = 'http://api.themoviedb.org/3/movie/upcoming?page=1&api_key=aa30d58a9845521cb6d81fd5bacc2bae'

  useEffect(() => {
    if (popularSelect) {
      fetch(popularUrl).then((res) => res.json()).then((datas) => {
        setMovieDatas(datas.results)
        console.log(datas.results)
      }).catch(() => {
        console.log('error');
      })
    } else if (nowplaying) {
      fetch(nowplayingUrl).then((res) => res.json()).then((datas) => {
        setMovieDatas(datas.results)
      }).catch(() => {
        console.log('error');
      })
    } else if (toprated) {
      fetch(topratedUrl).then((res) => res.json()).then((datas) => {
        setMovieDatas(datas.results)
      }).catch(() => {
        console.log('error');
      })
    } else if (upcoming) {
      fetch(upcomingUrl).then((res) => res.json()).then((datas) => {
        setMovieDatas(datas.results)
      }).catch(() => {
        console.log('error');
      })
    }
  }, [popularSelect, nowplaying, toprated, upcoming,])


  return (
    <>
      <Header 
        togglePopularChange={togglePopularChange} 
        toggleNowplayingChange={toggleNowplayingChange}
        toggleTopratedChange={toggleTopratedChange}
        toggleUpcomingChange={toggleUpcomingChange}
        select={select}
        search={search}
        changeSearch={changeSearch}
      />
      <Main movieDatas={movieDatas} select={select} />
    </>
  );
}

export default App;
