import { FC, lazy, Suspense } from "react";
import { Link } from "react-router";
import { TrendPosterType } from "../api";
import { Typography } from "antd";
import "./MoviePoster.less";
import { MoviePosterSkeleton } from "./skeletons/MoviePosterSkeleton";

const { Text, Title } = Typography;

const MotionLi = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.li }))
);

const MotionImg = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.img }))
);

export const MoviePoster: FC<TrendPosterType> = ({
  id,
  poster_path,
  vote_average,
  title,
}) => {
  return (
    <Suspense fallback={<MoviePosterSkeleton />}>
      <MotionLi
        className="movie-poster"
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to={`/movies/${id}`}>
          <MotionImg
            src={"https://image.tmdb.org/t/p/w500" + poster_path}
            alt={title}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
          />
          <div className={"movie-poster-content"}>
            <Title level={4} className={""}>
              {title}
            </Title>
            <Text className={""}>⭐ {vote_average}</Text>
          </div>
        </Link>
      </MotionLi>
    </Suspense>
  );
};
