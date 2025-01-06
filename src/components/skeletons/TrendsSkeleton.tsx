import { FC, ReactNode } from "react";
import { MoviePosterSkeleton } from "./MoviePosterSkeleton";

const list: ReactNode[] = [];

for (let i = 0; i < 20; i++) {
  list.push(<MoviePosterSkeleton key={i} />);
}

export const TrendsSkeleton: FC = () => {
  return <>{list}</>;
};
