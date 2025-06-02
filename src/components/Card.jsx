import React from "react";
import { FaEye } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaEyeSlash } from "react-icons/fa";

const Card = ({ movie, listType , removeMovieFromWatchList , removeMovieFromWatched , ToggleMovieByListType }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
    : "https://via.placeholder.com/150x220?text=No+Image";

  return (
    <div
      className="
        group flex flex-col items-center bg-[#22254b] rounded-lg shadow-md overflow-hidden
        w-full max-w-[170px] mx-auto p-2
        transition-shadow duration-300
        sm:hover:shadow-2xl sm:hover:scale-105
      "
    >
      {/* Image */}
      <img
        src={imageUrl}
        alt={movie.title}
        className="w-[120px] h-[170px] object-cover rounded"
      />
      {/* Title */}
      <div className="mt-2 text-white font-bold text-center text-base break-words w-full">
        {movie.title}
      </div>
      {/* Buttons - always visible on mobile, hover on sm+ */}
      <div
        className="flex flex-row items-center gap-3 mt-2 mb-1
  opacity-100 sm:opacity-0 sm:group-hover:opacity-100
  transition-opacity duration-200"
      >
        <button
          className="cursor-pointer text-white hover:text-red-400 transition-colors duration-150"
          onClick={() => {
            if(listType === "watchList") return removeMovieFromWatchList(movie.id)
            else return removeMovieFromWatched(movie.id)
          }}
        >
          <ImCross size={18} />
        </button>
        <button
          className="cursor-pointer text-white hover:text-green-400 transition-colors duration-150"
          onClick={() => ToggleMovieByListType(movie, listType)}
        >
          {listType === "watchList" ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
        </button>
      </div>
    </div>
  );
};

export default Card;
