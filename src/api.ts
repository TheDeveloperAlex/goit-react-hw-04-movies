import { API_KEY, SEARCH } from "./constatnts";

export type TrendPosterType = {
  backdrop_path: string;
  id: number;
  original_title: string;
  poster_path: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
};

export enum TrendsTimeWindow {
  day = "day",
  week = "week",
}

export const getTrends = async (
  timeWindow: TrendsTimeWindow = TrendsTimeWindow.week,
  page: number = 1
): Promise<TrendPosterType[]> => {
  const res = await fetch(
    `${SEARCH}/trending/movie/${timeWindow}?page=${page}&${API_KEY}`
  )
    .then((res) => res.json())
    .then((res) =>
      res.results.map(
        ({
          backdrop_path,
          id,
          original_title,
          poster_path,
          genre_ids,
          title,
          vote_average,
        }: TrendPosterType) => ({
          backdrop_path,
          id,
          original_title,
          poster_path,
          genre_ids,
          title,
          vote_average,
        })
      )
    );

  return res;
};
