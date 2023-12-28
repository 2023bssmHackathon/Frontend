import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Write from "./pages/Write";
import Send from "./pages/Mail/Send";
import Collect from "./pages/Mail/Collect";
import Input from "./pages/Mail/Input";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/write" element={<Write />} />
        <Route path="/mail/Input" element={<Input />} />
        <Route path="/mail/send/:name" element={<Send />} />
        <Route path="/mail/collect/:name" element={<Collect />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;