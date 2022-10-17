import { Card, Skeleton } from "antd";

function SkeletonCoinsCard() {
  return (
    <Card
      title={<Skeleton active paragraph={{ rows: 0 }} />}
      extra={<Skeleton.Avatar active />}
      hoverable
    >
      <Skeleton active />
    </Card>
  );
}

export default SkeletonCoinsCard;
