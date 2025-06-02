import React from 'react'
import Card from './Card'

const Watched = ({watched , removeMovieFromWatched , ToggleMovieByListType}) => {
  return (
    <div>
        <div className='mt-[50px] flex flext-row flex-wrap ml-[40px] gap-4'>
        { watched.map( (movie) => (
            <Card key={movie.id} movie={movie} listType={"watched"} removeMovieFromWatched={removeMovieFromWatched} ToggleMovieByListType={ToggleMovieByListType} /> 
        ) )  }
    </div>
    </div>
  )
}

export default Watched
