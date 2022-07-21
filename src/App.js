import { Route, Routes } from "react-router-dom";

import Index from "./Components/Pages/Routes/Index";
import Show from "./Components/Pages/Routes/Show";
import New from "./Components/Pages/Routes/New";
import Edit from "./Components/Pages/Routes/Edit";

import NavBar from "./Components/NavBar";

import "./App.scss";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Welcome to the Captains Logs</h1>} />
        <Route path="logs">
          <Route index element={<Index />} />
          <Route path=":index" element={<Show />} />
          <Route path="new" element={<New />} />
          <Route path=":index/edit" element={<Edit />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
