import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Write from "./pages/Write";
import Send from "./pages/Mail/Send";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/write" element={<Write />} />
        <Route path="/mail/send" element={<Send />} />
      </Routes>
    </>
  );
}

export default App;