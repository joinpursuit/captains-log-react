//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//COMPONENTS
import NavBar from './Components/NavBar';

//PAGES
import Edit from './Pages/Edit';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import Index from './Pages/Index';
import New from './Pages/New';
import Show from './Pages/Show';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/logs' element={<Index />} />
            <Route path='/logs/new' element={<New />} />
            <Route path='/logs/:index' element={<Show />} />
            <Route path='/logs/:index/edit' element={<Edit />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
