import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../components/About';
import App from '../App';

const Main = () => {
	return (
		<main>
			<Switch>
				<Route exact path="/app" component={App} />
				<Route exact path="/about" component={About} />
			</Switch>
		</main>
	);
};

export default Main;
