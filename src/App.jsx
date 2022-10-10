import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import BaseLayout from "./layout/BaseLayout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
