// DEPENDENCIES
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// PAGES
import Edit from './Pages/Edit';
import FourOFour from './Pages/FourOFour';
import Home from './Pages/Home';
import Index from './Pages/Index';
import New from './Pages/New';
import Show from './Pages/Show';

// COMPONENTS
import NavBar from './Components/NavBar';

const App = () => {
  return (
    <div className='App'>
      <main>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/logs' element={<Index />} />
          <Route path='/logs/new' element={<New />} />
          <Route path='/logs/:index' element={<Show />} />
          <Route path='/logs/:index/edit' element={<Edit />} />
          <Route path='*' element={<FourOFour />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
