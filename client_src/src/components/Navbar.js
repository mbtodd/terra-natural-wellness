import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
	render() {
		return (
			<div>
				<nav className="blue darken-3">
					<div className="nav-wrapper">
						<a href="./About" className="brand-logo center">
							Yoga
						</a>
						<a href="/#" data-activates="main-menu" className="button-collapse show-on-large">
							<i className="fa fa-bars" />
						</a>
						<ul className="right hide-on-small-only">
							<li>
								<Link to="/">
									<i className="fa fa-users" /> Meetups
								</Link>
							</li>
						</ul>
						<ul className="side-nav" id="main-menu">
							<li>
								<Link to="/">
									<i className="fa fa-users" /> Meetups
								</Link>
							</li>
							<li>
								<Link to="/meetups/add">
									<i className="fa fa-plus" /> Add Meetup
								</Link>
								<Link to="/about">
									<i className="fa fa-question-circle" /> About
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default NavBar;
