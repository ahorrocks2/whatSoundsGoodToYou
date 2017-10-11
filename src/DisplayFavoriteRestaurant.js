import React from 'react';
import { List } from 'semantic-ui-react'

const ListFavorites = props => {
	return (
		<div className="App">
			<List selection verticalAlign='middle'>
				<List.Item>
					<List.Header>{props.restaurant.name}</List.Header>
				</List.Item>
			</List>
		</div>
	);
};

export default ListFavorites;
