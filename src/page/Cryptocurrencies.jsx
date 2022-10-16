import React, { useState, useEffect } from "react";
import { Row, Col, Input } from "antd";
import Loader from "../components/Loader";
import { useGetCryptosQuery } from "../services/cryptoApi";
import CardCoins from "../components/CardCoins";
import SkeletonCoinsCard from "../components/SkeletonCoinsCard";

export default function Cryptocurrencies({ simplified }) {
  const count = simplified ? 8 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {/* {isFetching
          ? [ ... Array(8)].map((_, index) => (
              <Col xs={24} sm={12} lg={6} className="crypto-card" key={index}>
                <SkeletonCoinsCard />
              </Col>
            ))
          : cryptos?.map((currency) => (
              <Col
                xs={24}
                sm={12}
                lg={6}
                className="crypto-card"
                key={currency.uuid}
              >
                <CardCoins currency={currency} />
              </Col>
            ))} */}
        {[...Array(8)].map((_, index) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={index}>
            <SkeletonCoinsCard />
          </Col>
        ))}
      </Row>
    </>
  );
}
