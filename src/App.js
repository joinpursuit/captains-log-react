import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Welcome from './components/Welcome/Welcome';
import Index from './components/Index/Index';

class App extends Component {
  // eslint-disable-next-line
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
        </Routes>
      </>
    );
  }
}

export default App;