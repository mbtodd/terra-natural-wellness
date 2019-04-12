import React from 'react';
import './App.css';
import Main from './routes/Main';
import NavBar from './components/Navbar';
import Logo from './components/Logo';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';

const App = () => (
	<div>
		<div className="parallax">
			<NavBar>
				<a href="/#" data-activates="main-menu" className="button-collapse show-on-large">
					<i className="fa fa-bars" />
				</a>
			</NavBar>
			<div className="logo">
				<Logo />
			</div>
			<div className="container">
				<Main />
			</div>
			<div className="fixed-action-btn">
				<Link to="/members/add" className="btn-floating btn-large red">
					<i className="fa fa-plus" />
				</Link>
			</div>
		</div>
		<Footer />
	</div>
);

export default App;
