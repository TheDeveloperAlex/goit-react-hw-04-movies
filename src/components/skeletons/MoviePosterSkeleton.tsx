import { Skeleton } from "antd";
import { FC } from "react";
import "./MoviePosterSkeleton.less";

const { Image } = Skeleton;

export const MoviePosterSkeleton: FC = () => {
  return (
    <li className="movie-poster-skeleton">
      <Image active />
    </li>
  );
};
