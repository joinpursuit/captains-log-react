// DEPENDENCIES
import { Routes, Route } from "react-router-dom";

// COMPONENTS
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/logs" element={ <IndexLogs />} />
          <Route path="/logs/new" element={ <NewLog />} />
          <Route path="/logs/:index" element={ <ShowLog />} />
          <Route path="/logs/:index/edit" element={ <EditLog />} />
          <Route path="*" element={ <Reload />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
