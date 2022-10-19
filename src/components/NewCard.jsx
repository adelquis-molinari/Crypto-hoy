import { Card, Typography, Avatar } from "antd";
import demoImg from "../assets/cryptoNews.jpg";
const { Title, Text } = Typography;

export default function NewCard({ news }) {
  return (
    <Card hoverable className="news-card">
      <a href={news.url} target="_blank" rel="noreferrer">
        <div className="news-image-container">
          <Title className="news-title" level={4}>
            {news.name}
          </Title>
          <img
            style={{ maxWidth: "200px", maxHeight: "100px" }}
            src={news?.image?.thumbnail?.contentUrl || demoImg}
            alt="news"
          />
        </div>
        <p>
          {news.description > 100
            ? `${news.description.substring(0, 50)}...`
            : news.description}
        </p>
        <div className="provider-container">
          <div>
            <Avatar
              src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImg}
              alt="news"
            />
            <Text className="provider-name">{news.provider[0]?.name}</Text>
          </div>
          <Text>
            {new Date(news.datePublished).toLocaleString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </Text>
        </div>
      </a>
    </Card>
  );
}
