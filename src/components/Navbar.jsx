import { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
  AimOutlined,
} from "@ant-design/icons";
import icon from "../assets/cryptoHoy.png";
export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Crypto Hoy</Link>
        </Typography.Title>
      </div>
      <Button
        color="primary"
        className="menu-control-container"
        onClick={() => setActiveMenu(!activeMenu)}
      >
        <MenuOutlined />
      </Button>
      {activeMenu && (
        <div className="menu-container">
          <Menu theme="dark">
            <Menu.Item icon={<HomeOutlined />} key="one">
              <Link to="/">Inicio</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />} key="two">
              <Link to="/cryptocurrencies">CriptoMonedas</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />} key="three">
              <Link to="/news">Noticias</Link>
            </Menu.Item>
            <Menu.Item icon={<AimOutlined />} key="four">
              <Link to="/tracking">Seguimiento</Link>
            </Menu.Item>
          </Menu>
        </div>
      )}
    </div>
  );
}
