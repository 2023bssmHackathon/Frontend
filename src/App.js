import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";

function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;