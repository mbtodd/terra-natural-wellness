// import React from 'react';
import React, { Component } from 'react';
import { Container, Row, Col, Image, Figure } from 'react-bootstrap';

export default class About extends Component {
	render() {
		return (
			<div>
				<Container className="about-body">
					<h3>About the studio</h3>
					<Row>
						<Col className="about-text">
							<p>
								Yoga with Hella offers a 75 minutes vinyasa yoga class in a small yoga studio located in the heart of
								Sterling, at the Majest Martial Arts, Sterling. 20964 Southbank st. Sterling, VA 20165 Each class
								focusing on to connecting the breath and movement in the vinyasa flow. Hella will take the time to work
								with you- one on one- before or after the class to personalize your practice. Hella also uses
								aromatherapy during the class to enhance your practice.
								<br />
								20964 Southbank st. Sterling, VA 20165
							</p>
							<p>Each class focusing on to connecting the breath and movement in the vinyasa flow.</p>
							<p>
								Hella will take the time to work with you- one on one- before or after the class to personalize your
								practice.
							</p>
							<p />Hella also uses aromatherapy during the class to enhance your practice.
						</Col>

						{/* <Col>
							<Figure>
								<Figure.Image
									width={400}
									height={600}
									src={require('../assests/img/webimages/asset 14.webp')}
									rounded
								/>
								<Figure.Caption>
									<button onClick="submit">Image 1</button>
								</Figure.Caption>
							</Figure>
						</Col> */}
						<Col>
							<Figure>
								<Figure.Image
									width={400}
									height={600}
									src={require('../assests/img/webimages/asset 21.webp')}
									rounded
								/>
								<Figure.Caption>
									<button onClick="submit">Image 1</button>
								</Figure.Caption>
							</Figure>
						</Col>
						<Col>
							<Figure>
								<Figure.Image
									width={400}
									height={600}
									src={require('../assests/img/webimages/asset 27.webp')}
									rounded
								/>
								<Figure.Caption>
									<button onClick="submit">Image 1</button>
								</Figure.Caption>
							</Figure>
						</Col>
					</Row>
					<Row>
						<Col>
							<Image width={260} src={require('../assests/img/webimages/asset 19.webp')} rounded />
						</Col>
						<Col>
							<Image width={260} src={require('../assests/img/webimages/asset 19.webp')} rounded />
						</Col>
						<Col>
							<Image width={260} src={require('../assests/img/webimages/asset 19.webp')} rounded />
						</Col>
						<Col>
							<Image width={260} src={require('../assests/img/webimages/asset 19.webp')} rounded />
						</Col>
					</Row>
					<Row>
						<Col>
							<Image width={260} src={require('../assests/img/webimages/asset 19.webp')} rounded />
						</Col>
						<Col>
							<Image width={260} src={require('../assests/img/webimages/asset 19.webp')} rounded />
						</Col>
						<Col>
							<Image width={260} src={require('../assests/img/webimages/asset 19.webp')} rounded />
						</Col>
						<Col>
							<Image width={260} src={require('../assests/img/webimages/asset 19.webp')} rounded />
						</Col>
					</Row>
				</Container>
				{/* images test */}
				{/* <Container>
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
				</Figure>; */}
			</div>
		);
	}
}
