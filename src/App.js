import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Welcome from './components/Welcome/Welcome';

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
        </Routes>
      </>
    );
  }
}

export default App;
