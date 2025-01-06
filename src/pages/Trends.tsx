import { FC, useEffect, useState } from "react";
import { TrendsSkeleton } from "../components/skeletons/TrendsSkeleton";
import { MoviePoster } from "../components/MoviePoster";
import { getTrends, TrendPosterType, TrendsTimeWindow } from "../api";
import { Pagination, Typography } from "antd";
import "./Trends.less";

const { Title } = Typography;

export const Trends: FC = () => {
  const [trends, setTrends] = useState<TrendPosterType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [timeWindow, setTimeWindow] = useState(TrendsTimeWindow.week);
  const [loading, setLoading] = useState(true);
  // const [total] = useState(50);

  const chnagePage = (selectedPage: number) => {
    setPage(selectedPage);
    setLoading(true);
  };

  useEffect(() => {
    (async () => {
      const trendsApi = await getTrends(timeWindow, page);
      setTrends(trendsApi);
      setLoading(false);
    })();
  }, [page, timeWindow]);

  return (
    <section className="trends">
      <Title className="" style={{ marginBottom: "24px" }} level={2}>
        🔥 Trends
      </Title>
      <ul className="trends-list">
        {trends?.length > 0 && !loading ? (
          <>
            {trends.map((item) => {
              return <MoviePoster key={item.id} {...item} />;
            })}
          </>
        ) : (
          <TrendsSkeleton />
        )}
      </ul>
      <Pagination
        onChange={chnagePage}
        defaultCurrent={page}
        total={50}
        align="center"
      />
    </section>
  );
};
