import { useState } from "react";
import { Select, Typography, Row, Col } from "antd";
import { useGetCryptoNewsQuery } from "../services/newsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "../components/Loader";
import NewCard from "../components/NewCard";
import SkeletonNewCard from "../components/SkeletonNewCard";

export default function News({ simplified }) {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { Option } = Select;
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });
  const { data } = useGetCryptosQuery(100);

  if (!cryptoNews?.value) return <Loader />;
  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin) => (
              <Option value={coin.name} key={coin.name}>
                {coin.name}
              </Option>
            ))}
          </Select>
        </Col>
      )}
      {/* {
        isFetching ? 
        (
          <Col xs={24} sm={12} lg={8}>
          <SkeletonNewCard />
        </Col>
        ):
        cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <NewCard news={news} />
        </Col>
      ))} */}
      {[...Array(6)].map((_, index) => (
        <Col xs={24} sm={12} lg={8}>
          <SkeletonNewCard />
        </Col>
      ))}
    </Row>
  );
}
