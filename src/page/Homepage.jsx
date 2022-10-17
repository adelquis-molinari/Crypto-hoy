import millify from "millify";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import Loader from "../components/Loader";
import GlobalCryptoStats from "../components/GlobalCryptoStats";
import SkeletonHomepage from "../skeleton/Homepage/SkeletonHomepage";

const { Title } = Typography;

export default function Homepage() {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <SkeletonHomepage />;

  return (
    <>
      <GlobalCryptoStats globalStats={globalStats} />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
}
