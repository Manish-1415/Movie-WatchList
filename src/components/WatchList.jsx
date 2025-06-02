import React from 'react'
import Card from './Card'

const WatchList = ({watchList , removeMovieFromWatchList , ToggleMovieByListType}) => {
    if(!watchList || watchList.length === 0) {
        return ( 
        <div className="flex flex-row justify-center items-center h-40">
        <span className="text-3xl font-semibold text-gray-500">
          Add Movies To WatchList !
        </span>
      </div> )
    }

  return (
    <div className='mt-[50px] flex flext-row flex-wrap ml-[40px] gap-4'>
        { watchList.map( (movie) => (
            <Card key={movie.id} movie={movie} listType={"watchList"} removeMovieFromWatchList={removeMovieFromWatchList} ToggleMovieByListType={ToggleMovieByListType} /> 
        ) )  }
    </div>
  )
}

export default WatchList
