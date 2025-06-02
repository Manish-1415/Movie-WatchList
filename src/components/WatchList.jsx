import React from 'react'
import Card from './Card'

const WatchList = ({watchList , removeMovieFromWatchList , ToggleMovieByListType}) => {
  if(!watchList || watchList.length === 0) {
    return ( 
      <div className="flex flex-row justify-center items-center h-40">
        <span className="text-3xl font-semibold text-gray-500">
          Add Movies To WatchList!
        </span>
      </div>
    )
  }

  return (
    <div className='mt-8 px-2 sm:px-8'>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center'>
        { watchList.map( (movie) => (
          <Card key={movie.id} movie={movie} listType={"watchList"} removeMovieFromWatchList={removeMovieFromWatchList} ToggleMovieByListType={ToggleMovieByListType} /> 
        )) }
      </div>
    </div>
  )
}

export default WatchList
