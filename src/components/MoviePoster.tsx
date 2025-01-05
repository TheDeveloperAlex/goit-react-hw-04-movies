import { FC } from "react";
import { Link } from "react-router";
import { TrendPosterType } from "../api";

export const MoviePoster: FC<TrendPosterType> = ({
  backdrop_path,
  id,
  original_title,
  poster_path,
  genre_ids,
  vote_average,
  title,
}) => {
  return (
    <li>
      <Link
        to={`/movies/${id}`}
        // to={
        //   {
        //     pathname: `${url}movies/${id}`,
        //     state: {from: location}
        //   }
        // }
      >
        <img src={"https://image.tmdb.org/t/p/w500" + poster_path} alt="" />
        <p>{title /* || film.name */}</p>

        <div>
          {" "}
          <p>{vote_average}</p>
        </div>
      </Link>
    </li>
  );
};
