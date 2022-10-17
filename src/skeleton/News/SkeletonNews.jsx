import { Row, Col, Skeleton } from "antd";
import SkeletonNewCard from "../Homepage/SkeletonNewCard";

export default function SkeletonNews() {
  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Skeleton.Input active />
      </Col>
      {[...Array(9)].map((_, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <SkeletonNewCard />
        </Col>
      ))}
    </Row>
  );
}
