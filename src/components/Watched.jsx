import React from 'react'
import Card from './Card'

const Watched = ({watched , removeMovieFromWatched , ToggleMovieByListType}) => {
  return (
    <div className='mt-8 px-2 sm:px-8'>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center'>
        { watched.map( (movie) => (
          <Card key={movie.id} movie={movie} listType={"watched"} removeMovieFromWatched={removeMovieFromWatched} ToggleMovieByListType={ToggleMovieByListType} /> 
        )) }
      </div>
    </div>
  )
}

export default Watched
