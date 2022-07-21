import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Index from './Pages/Index';
import Edit from './Pages/Edit';
import ErrorPage from './Pages/ErrorPage';
import New from './Pages/New';
import Show from './Pages/Show';
function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/logs' element={<Index />} />
            <Route path='/logs/new' element={<New />} />
            <Route path='/logs/:arrayIndex' element={<Show />} />
            <Route path='/logs/:arrayIndex/edit' element={<Edit />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
