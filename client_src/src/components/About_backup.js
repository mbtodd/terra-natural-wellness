// import React from 'react';
import React, { Component } from 'react';
import { Container, Row, Col, Image, Figure } from 'react-bootstrap';

class About extends Component {
	render() {
		return (
			<div>
				<h3>About the studio</h3>
				<div className="row">
					<div className="col">
						<p>
							Yoga with Hella offers a 75 minutes vinyasa yoga class in a small yoga studio located in the heart of
							Sterling, at the Majest Martial Arts, Sterling. 20964 Southbank st. Sterling, VA 20165 Each class focusing
							on to connecting the breath and movement in the vinyasa flow. Hella will take the time to work with you-
							one on one- before or after the class to personalize your practice. Hella also uses aromatherapy during
							the class to enhance your practice.
							<br />
							20964 Southbank st. Sterling, VA 20165
						</p>
						<p>Each class focusing on to connecting the breath and movement in the vinyasa flow.</p>
						<p>
							Hella will take the time to work with you- one on one- before or after the class to personalize your
							practice.
						</p>
						<p>Hella also uses aromatherapy during the class to enhance your practice.</p>
					</div>

					<div className="col">
						<img src={require('../assests/img/webimages/asset 14.webp')} />
					</div>
					<div className="col">
						<img src={require('../assests/img/webimages/asset 21.webp')} />
					</div>
					<div className="col">
						<img src={require('../assests/img/webimages/asset 27.webp')} />
					</div>
				</div>
				{/* images test */}
				<Container>
					<Row>
						<Col xs={6} md={4}>
							<Image
								width={171}
								height={180}
								src="https://www.telegraph.co.uk/content/dam/Travel/ski/Resorts/chamonix-lead-copyright-Tim-Hughes-xlarge.jpg"
								rounded
							/>
						</Col>
						<Col xs={6} md={4}>
							<Image
								width={171}
								height={180}
								src="https://www.telegraph.co.uk/content/dam/Travel/ski/Resorts/chamonix-lead-copyright-Tim-Hughes-xlarge.jpg"
								rounded
							/>
						</Col>
						<Col xs={6} md={4}>
							<Image
								width={171}
								height={180}
								src="https://www.telegraph.co.uk/content/dam/Travel/ski/Resorts/chamonix-lead-copyright-Tim-Hughes-xlarge.jpg"
								roundedCircle
							/>
						</Col>
					</Row>
				</Container>;
				<Figure>
					<Figure.Image width={171} height={180} alt="171x180" src="..." />
					<Figure.Caption>Chamonix</Figure.Caption>
				</Figure>;
			</div>
		);
	}
}
export default About;
