import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import "./App.css";
import Home from "./components/Home";
import Logs from "./components/Logs";
import LogPostDetails from "./components/LogPostDetails";
import NewLogForm from "./components/NewLogForm";
import LogEditForm from "./components/LogEditForm";
import Error from "./components/Error";

function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/logs" element={<Logs />} />
          <Route path="/logs/new" element={<NewLogForm />} />
          <Route path="/logs/:index" element={<LogPostDetails />} />
          <Route path="/logs/:index/edit" element={<LogEditForm/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
