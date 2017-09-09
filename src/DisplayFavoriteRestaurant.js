import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import Popover from 'material-ui/Popover';

class ListFavorites extends Component  {
	state = {
		open: false
	}

	handleOpen = e => {
		e.preventDefault();

		this.setState({
			open: true,
			anchorEl: e.currentTarget
		});
	}

	handleClose = e => {
		this.setState({
			open: false
		});
	}

	render() {
		return (
			<div className="App">
				<ListItem onClick={this.handleOpen}>
					<h2>{this.props.restaurant.name}</h2>
				</ListItem>

				<Popover
					open={this.state.open}
					anchorEl={this.state.anchorEl}
					anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
					targetOrigin={{horizontal: 'left', vertical: 'top'}}
					onRequestClose={this.handleClose}
					>
						<ListItem>{this.props.restaurant.type}, {this.props.restaurant.hood}</ListItem>
				</Popover>
			</div>
		);
	}
};

export default ListFavorites;
