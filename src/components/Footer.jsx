import { Space, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <Typography.Title
        level={5}
        style={{ color: "white", textAlign: "center" }}
      >
        Created by <Link to="/">Adelkis</Link>
      </Typography.Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/tracking">Tracking Coins</Link>
        <Link to="/news">News</Link>
      </Space>
    </>
  );
}
