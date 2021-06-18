//Dependencies
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { apiURL } from './util/apiURL'
import { useState, useEffect } from 'react'
import axios from 'axios'

//Pages

import Home from './Pages/Home'
import Index from './Pages/Index'
import New from './Pages/New'

//Components
import Navbar from './Components/Navbar'
import Show from './Pages/Show'

const API_BASE = apiURL()

function App() {
	const [logs, setLogs] = useState([])

	const addLog = (newLog) => {
		axios.post(`${API_BASE}/logs`, newLog)
		.then((res) => {
			const { data } = res
			setLogs(data)
		})
	}

	const deleteLog = (index) => {
		axios
		.delete(`${API_BASE}/logs/${index}`)
		.then((res) => {
			const updateLog = [...logs]
			updateLog.splice(index, 1)
			setLogs(updateLog)
		})
		.catch((e) => {
			console.log(e)
		})
	}

	useEffect(() => {
		axios.get(`${API_BASE}/logs`).then((res) => {
			const { data } = res
			console.log(data)
			setLogs(data)
		})
	}, [])

	return (
		<div className='App'>
			<Route>
				<Navbar />
				<main>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/logs'>
							<Index logs={logs} />
						</Route>
						<Route path='/logs/new'>
							<New addLog={addLog}/>
						</Route>
						<Route path='/logs/:index'>
							<Show logs={logs} deleteLog={deleteLog}/>
						</Route>
					</Switch>
				</main>
			</Route>
		</div>
	)
}

export default App
