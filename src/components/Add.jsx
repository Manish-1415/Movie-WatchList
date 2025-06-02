import React, { useState ,useEffect } from 'react'
import MovieInfo from './MovieInfo'

const Add = ({addMovie , addToWatched}) => {
  const [movies , setMovies] = useState([])
  const [inpChange , setInpChange] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      if(!inpChange) {
        return setMovies([])
      }
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=bce09a3d4b27eb9f0acf748f668a1705&query=${inpChange}`)
      const data = await response.json()
      setMovies(data.results)
    }
    fetchData()
  }, [inpChange])

  return (
    <div className="flex flex-col items-center mt-8 px-2">
      <div className="w-full flex justify-center">
        <input
          className="bg-slate-900 text-white w-full max-w-[400px] h-[40px] rounded-lg px-3"
          type="search"
          name="searchbar"
          placeholder="Search Movie"
          value={inpChange}
          onChange={ (e) => setInpChange(e.target.value) }
        />
      </div>
      <div className="mt-6 flex flex-col gap-4 w-full max-w-[400px] items-center">
        {movies.map(movie => (
          <MovieInfo key={movie.id} movie={movie} addMovie={addMovie} addToWatched={addToWatched} />
        ))}
      </div>
    </div>
  )
}

export default Add
