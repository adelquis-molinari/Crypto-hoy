import { Routes, Route } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import Cryptocurrencies from "./page/Cryptocurrencies";
import CryptoDetails from "./page/CryptoDetails";
import Exchanges from "./page/Exchanges";
import Homepage from "./page/Homepage";
import Login from "./page/Login";
import News from "./page/News";
import NotFound from "./page/NotFound";
import Register from "./page/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Homepage />} />
        <Route path="exchanges" element={<Exchanges />} />
        <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="crypto/:coinId" element={<CryptoDetails />} />
        <Route path="news" element={<News />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
