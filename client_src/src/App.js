import React from 'react';
import './App.css';
import Main from './routes/Main';
import NavBar from './components/Navbar';
import { Link } from 'react-router-dom';
// import Clock from './components/Clock';

const App = () => (
	<div>
		<NavBar />
		<div className="container">
			<Main />
		</div>
		<div className="fixed-action-btn">
			<Link to="/members/add" className="btn-floating btn-large red">
				<i className="fa fa-plus" />
			</Link>
			{/* <Clock /> */}
		</div>
	</div>
);

export default App;
