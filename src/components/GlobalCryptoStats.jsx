import { Typography, Row, Col, Statistic, Skeleton } from "antd";
import millify from "millify";

const { Title } = Typography;

export default function GlobalCryptoStats({ globalStats }) {
  const {
    total,
    totalExchanges,
    totalMarketCap,
    total24hVolume,
    totalMarkets,
  } = globalStats;

  console.log(total);

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={millify(total)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={millify(totalExchanges)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={millify(totalMarketCap)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={millify(total24hVolume)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={millify(totalMarkets)} />
        </Col>
      </Row>
    </>
  );
}
