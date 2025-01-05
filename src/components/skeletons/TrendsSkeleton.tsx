import { FC } from "react";
import { MoviePosterSkeleton } from "./MoviePosterSkeleton";

export const TrendsSkeleton: FC = () => {
  return (
    <ul>
      <MoviePosterSkeleton />
    </ul>
  );
};
