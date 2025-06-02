import React from "react";

const MovieInfo = ({ movie, addMovie , addToWatched}) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
    : "https://via.placeholder.com/70x100?text=No+Image";

  const releaseYear = movie.release_date
    ? movie.release_date.slice(0, 4)
    : "N/A";

  return (
    <div className="flex w-full max-w-[350px] min-h-[140px] bg-[#22254b] rounded-lg shadow-md overflow-hidden">
      {/* Image */}
      <img
        src={imageUrl}
        alt={movie.title}
        className="w-[100px] h-full object-cover"
      />
      {/* Info and Buttons */}
      <div className="flex flex-col justify-between flex-1 p-3">
        <div>
          <div className="text-white font-bold text-base break-words whitespace-normal leading-snug">
            {movie.title}
          </div>
          <div className="text-gray-400 text-sm">{releaseYear}</div>
        </div>
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => addMovie(movie)}
            className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black py-1 rounded text-xs font-semibold"
          >
            Add to Watchlist
          </button>
          <button
            onClick={() => addToWatched(movie)}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-1 rounded text-xs font-semibold"
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
