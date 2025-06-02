import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';
import WatchList from './components/WatchList';
import Watched from './components/Watched';
import Add from './components/Add';

const App = () => {

const [watchList, setWatchList] = useState(() => {
  const movies = localStorage.getItem("movies");
  if (!movies || movies === "undefined") return [];
  try {
    return JSON.parse(movies);
  } catch {
    return [];
  }
});

const addMovie = (movie) => {
  if(!watchList.some( (m) => m.id === movie.id )) {
      setWatchList([...watchList , movie])
  }
}

const [watched , setWatched] = useState( () => {
    const movies = localStorage.getItem("watchedMovies");
    if(!movies || movies === "undefined") return [];
    try {
      return JSON.parse(movies);
    } catch  {
      return [];
    }
} ) 

const addToWatched = (movie) => {
    if(!watched.some( (m) => m.id === movie.id )) {
      setWatched([...watched , movie])
    }
}

useEffect(() => {
  localStorage.setItem("movies",JSON.stringify(watchList))
  localStorage.setItem("watchedMovies", JSON.stringify(watched))
}, [watchList , watched])

const removeMovieFromWatchList = (movieId) => {
    if(watchList.length > 0) {
      const updatedWatchList = watchList.filter( (movie) => movie.id !== movieId )
      setWatchList(updatedWatchList);
    }
}

const removeMovieFromWatched = (movieId) => {
  if(watched.length > 0) {
    const updatedWatchList = watched.filter( (movie) => movie.id !== movieId )
    setWatched(updatedWatchList);
  }
}

function ToggleMovieByListType (movie , listType) {
  const newWatchList = listType === "watchList" && watchList.filter( (m) => m.id !== movie.id ) 
  const newWatchedList = listType === "watched" && watched.filter( (m) => m.id !== movie.id );

  if(listType === "watchList") {
    setWatchList(newWatchList) 
    setWatched([...watched , movie])
  }
  else { 
    setWatched(newWatchedList)
    setWatchList([...watchList , movie])
  }
}

return (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={ <WatchList watchList={watchList} removeMovieFromWatchList={removeMovieFromWatchList} ToggleMovieByListType={ToggleMovieByListType} /> } />
      <Route path="/watched" element={ <Watched watched={watched} removeMovieFromWatched={removeMovieFromWatched} ToggleMovieByListType={ToggleMovieByListType}  /> } />
      <Route path="/add" element={ <Add addMovie={addMovie}  addToWatched={addToWatched}/> } />
    </Routes>
  </div>
)
}

export default App
