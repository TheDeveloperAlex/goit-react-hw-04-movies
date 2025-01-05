import { FC, useEffect, useState } from "react";
import { TrendsSkeleton } from "../components/skeletons/TrendsSkeleton";
import { MoviePoster } from "../components/MoviePoster";
import { getTrends, TrendPosterType, TrendsTimeWindow } from "../api";
import { Pagination } from "antd";

export const Trends: FC = () => {
  const [trends, setTrends] = useState<TrendPosterType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [timeWindow, setTimeWindow] = useState(TrendsTimeWindow.week);
  const [total] = useState(50);

  const chnagePage = (selectedPage: number) => {
    setPage(selectedPage);
  };

  useEffect(() => {
    (async () => {
      const trendsApi = await getTrends(timeWindow, page);
      setTrends(trendsApi);
    })();
  }, [page, timeWindow]);

  return (
    <div>
      <h1>Trends</h1>
      {trends?.length > 0 ? (
        <>
          {/* <ul>
            {trends.map((item) => {
              return <MoviePoster key={item.id} {...item} />;
            })}
          </ul> */}
          <Pagination onChange={chnagePage} defaultCurrent={page} total={50} />
        </>
      ) : (
        <TrendsSkeleton />
      )}
    </div>
  );
};
