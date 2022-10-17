import { Typography, Row, Col } from "antd";
import SkeletonGlobalCryptoStats from "./SkeletonGlobalCryptoStats";
import SkeletonCoinsCard from "./SkeletonCoinsCard";
import SkeletonNewCard from "./SkeletonNewCard";

const { Title } = Typography;

export default function SkeletonHomepage() {
  return (
    <>
      <SkeletonGlobalCryptoStats />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          Show More
        </Title>
      </div>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {[...Array(8)].map((_, index) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={index}>
            <SkeletonCoinsCard />
          </Col>
        ))}
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          Show More
        </Title>
      </div>
      <Row gutter={[24, 24]}>
        {[...Array(6)].map((_, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <SkeletonNewCard />
          </Col>
        ))}
      </Row>
    </>
  );
}
