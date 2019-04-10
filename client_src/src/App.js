import React from 'react';
import './App.css';
import Main from './routes/Main';
import NavBar from './components/Navbar';
import { Link } from 'react-router-dom';

// import Clock from './components/Clock';

const App = () => (
	<div>
		<div className="parallax">
			<NavBar>
				<a href="/#" data-activates="main-menu" className="button-collapse show-on-large">
					<i className="fa fa-bars" />
				</a>
			</NavBar>
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
	</div>
);

export default App;
