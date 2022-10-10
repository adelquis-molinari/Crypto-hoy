import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./BaseLayout.css";

export default function BaseLayout() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Outlet />
          </div>
        </Layout>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
