import { Routes, Route } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import Cryptocurrencies from "./page/Cryptocurrencies";
import CryptoDetails from "./page/CryptoDetails";
import Exchanges from "./page/Exchanges";
import Homepage from "./page/Homepage";
import News from "./page/News";
import NotFound from "./page/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Homepage />} />
        <Route path="exchanges" element={<Exchanges />} />
        <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="crypto/:coinId" element={<CryptoDetails />} />
        <Route path="news" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
