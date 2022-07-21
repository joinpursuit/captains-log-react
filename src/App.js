import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav.js';
import Home from './Components/Home.js';
import Logs from './Components/Logs.js';
import NewLogs from './Components/NewLogs.js';
import Show from './Components/Show.js';
import Edit from './Components/Edit.js';

function App() {
	return (
		<div>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/logs' element={<Logs />}></Route>
				<Route path='/logs/new' element={<NewLogs />}></Route>
				<Route path='/logs/:index' element={<Show />}></Route>
				<Route path='/logs/:index/edit' element={<Edit />}></Route>
			</Routes>
		</div>
	);
}

export default App;
