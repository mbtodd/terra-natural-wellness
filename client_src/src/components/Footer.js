// import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Container, Row, Col, Image, Figure } from 'react-bootstrap';

export default class Footer extends Component {
	render() {
		return (
			<div>
				<footer className="footer">
					<div className="row">
						<a className="col center" id="footer-contact">
							Contact Info: 703-582-1840
						</a>
						<Image src={require('../assests/img/webimages/graphic-bar.svg')} className="bar-graphic" />
						<a className="col center">Contact us: 703-582-1840</a>
					</div>
				</footer>
			</div>
		);
	}
}
