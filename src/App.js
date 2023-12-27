import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Collect from "./pages/Mail/Collect";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/mail/collect" element={<Collect />} />
      </Routes>
    </>
  );
}

export default App;