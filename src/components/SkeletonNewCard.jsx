import { Card, Typography, Skeleton } from "antd";

const { Title } = Typography;

function SkeletonNewCard() {
  return (
    <Card hoverable className="news-card">
      <div className="news-image-container">
        <Title className="news-title" level={4}>
          <Skeleton active paragraph={{ rows: 0 }} />
        </Title>
        <Skeleton.Image
          active
          style={{ maxWidth: "200px", maxHeight: "100px" }}
        />
      </div>
      <p>
        <Skeleton active paragraph={{ rows: 3 }} />
      </p>
      <div className="provider-container">
        <div>
          <Skeleton.Avatar active />
        </div>
        <Skeleton active paragraph={{ rows: 0 }} />
      </div>
    </Card>
  );
}

export default SkeletonNewCard;
