import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
	return (
		<Typography component="div" style={{ padding: 8 * 3 }}>
			{props.children}
		</Typography>
	);
}

TabContainer.propTypes = {
	children : PropTypes.node.isRequired
};

function LinkTab(props) {
	return <Tab component="a" onClick={(event) => event.preventDefault()} {...props} />;
}

const styles = (theme) => ({
	root : {
		flexGrow        : 1,
		backgroundColor : theme.palette.background.paper
	}
});

class NavTabs extends React.Component {
	state = {
		value : 0
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		const { classes } = this.props;
		const { value } = this.state;

		return (
			<NoSsr>
				<div className={classes.root}>
					<AppBar position="static">
						<Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
							<LinkTab label="Home" href="home" />
							<LinkTab label="About" href="About">
								<Link to={'About'} href="./About.jsx" />
							</LinkTab>
							<LinkTab label="Schedule/Fees" href="schedule" />
							<LinkTab label="About Hella" href="Hella" />
							<LinkTab label="Contact" href="contact" />
						</Tabs>
					</AppBar>
					{value === 0 && <TabContainer>Home</TabContainer>}
					{value === 1 && <TabContainer>About</TabContainer>}
					{value === 2 && <TabContainer>Schedule/Fees</TabContainer>}
					{value === 3 && <TabContainer>About Hella</TabContainer>}
					{value === 4 && <TabContainer>Page Three</TabContainer>}
				</div>
			</NoSsr>
		);
	}
}

NavTabs.propTypes = {
	classes : PropTypes.object.isRequired
};

export default withStyles(styles)(NavTabs);
