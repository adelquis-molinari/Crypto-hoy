import { Typography, Row, Col, Statistic, Skeleton } from "antd";

const { Title, Text } = Typography;
function SkeletonGlobalCryptoStats() {
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Text>Total Cryptocurrencies</Text>
          <div>
            <Skeleton.Button active />
          </div>
        </Col>
        <Col span={12}>
          <Text>Total Exchanges</Text>
          <div>
            <Skeleton.Button active />
          </div>
        </Col>
        <Col span={12}>
          <Text>Total Market Cap</Text>
          <div>
            <Skeleton.Button active />
          </div>
        </Col>
        <Col span={12}>
          <Text>Total 24h Volume</Text>
          <div>
            <Skeleton.Button active />
          </div>
        </Col>
        <Col span={12}>
          <Text>Total Markets</Text>
          <div>
            <Skeleton.Button active />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default SkeletonGlobalCryptoStats;
