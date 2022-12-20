import Homepage from "../page/Homepage";
import Exchanges from "../page/Exchanges";
import Cryptocurrencies from "../page/Cryptocurrencies";
import CryptoDetails from "../page/CryptoDetails";
import News from "../page/News";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout";
import TrackingCoins from "../page/TrackingCoins";
import Analytics from "../page/Analytics";
export default function DashboarRouter() {
  return (
    <Routes>
      <Route to="/" element={<BaseLayout />}>
        <Route index element={<Homepage />} />
        <Route path="exchanges" element={<Exchanges />} />
        <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="crypto/:coinId" element={<CryptoDetails />} />
        <Route path="news" element={<News />} />
        <Route path="tracking" element={<TrackingCoins />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>
    </Routes>
  );
}
