import React, { Component } from 'react';
import { Container, Row, Col, Image, Figure } from 'react-bootstrap';

export default class Logo extends Component {
	render() {
		return (
			<div>
				<Row className="logo-center">
					<Image src={require('../assests/img/images/logo.png')} />
				</Row>
				<Col className="sandbar">
					<Col>
						<Image src={require('../assests/img/webimages/bar-image.webp')} />
					</Col>
				</Col>
			</div>
		);
	}
}
