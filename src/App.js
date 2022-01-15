import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Welcome from './components/Welcome/Welcome';
import Index from './components/Index/Index';
import Show from './components/Show/Show';
import New from './components/New/New';
import Edit from './components/Edit/Edit';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Welcome />}></Route>
          <Route path="/logs" element={<Index />}></Route>
          <Route path="/logs/new" element={<New />}></Route>
          <Route path="logs/:index/edit" element={<Edit />}></Route>
          <Route path="/logs/:index" element={<Show />}></Route>
        </Routes>
      </>
    );
  }
}

export default App;
