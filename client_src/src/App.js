import React, { Component } from 'react';
import './App.css';
// import { Link } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div>
				{/* <header>
					<i className="fas fa-bars" />
					<br />
					<i className="fab fa-facebook-square" />
					<i className="fab fa-twitter-square" />
				</header>
				<div>Yoga</div> */}

				<Button variant="contained" color="primary">
					Hello World
				</Button>
			</div>
		);
	}
}

export default App;
