import { Row, Col, Skeleton } from "antd";
import SkeletonCoinsCard from "../Homepage/SkeletonCoinsCard";

export default function SkeletonCryptocurrencies() {
  return (
    <>
      <div className="search-crypto">
        <Skeleton.Input active />
      </div>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {[...Array(12)].map((_, i) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={i}>
            <SkeletonCoinsCard />
          </Col>
        ))}
      </Row>
    </>
  );
}
