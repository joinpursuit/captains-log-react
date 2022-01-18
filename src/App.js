import Routings from './components/Routings';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routings />
      </main>
    </div>
  );
};

export default App;
