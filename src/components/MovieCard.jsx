/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


const MovieCard = ({ movie }) => {
    const [bgColor, setBgColor] = useState("");
  
    const onFavoriteClick = () => {
      setBgColor((color) => (color === "red" ? "" : "red"));
    };
    return ( 
      <div className="relative rounded-lg overflow-hidden bg-gray-800 transition-transform duration-300 flex flex-col h-full">
      <div className="relative aspect-[2/3] w-full text-center">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-50   flex flex-col justify-end p-2">
          <button
            className="absolute top-2 right-2 text-white"
            onClick={onFavoriteClick}
          >
            <FontAwesomeIcon icon={faHeart} style={{ color: bgColor }} />
          </button>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-white text-lg font-semibold">{movie.title}</h3>
        <p className="text-gray-400 text-sm">
          {movie.release_date?.split("-")[0]} {/* Only shows the year */}
        </p>
      </div>
    </div>
    );
  };

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
};
export default MovieCard;

