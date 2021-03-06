import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';

export default class NavBar extends Component {
	render() {
		return (
			<div>
				{/* <Badge pill variant="light" className="pill"> */}
				<nav className="container">
					<div className="row">
						<a href="/#" className="col center">
							Home
						</a>
						{/* <a href="./About" className="col center">
								About
							</a> */}
						<Link to="/about" className="col center">
							<i className="fas fa-pray" /> About
						</Link>

						<a href="./Schedule-Fees" className="col center">
							Schedule / Fees
						</a>
						<Link to="/Hella" className="col center">
							<i className="fas fa-pray" /> About Hella
						</Link>
						<a href="./Contact" className="col center">
							Contact
						</a>
						<Link to="./Blog" className="col center">
							<i className="fas fa-blog">{/* <a className="bar-text">Blog</a> */}</i>
						</Link>
					</div>
				</nav>
				{/* </Badge> */}
			</div>
		);
	}
}
