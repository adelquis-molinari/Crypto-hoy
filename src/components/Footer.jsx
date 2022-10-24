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
        Creado por <Link to="/">Adelkis</Link>
      </Typography.Title>
      <Space>
        <Link to="/">Inicio</Link>
        <Link to="/tracking">Seguimiento</Link>
        <Link to="/news">Noticias</Link>
      </Space>
    </>
  );
}
