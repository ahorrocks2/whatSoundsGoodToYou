import React from 'react';
import { List } from 'semantic-ui-react';

const ListFavorites = props => {
	return (
		<div className="App">
			<List selection verticalAlign='middle'>
				{props.restaurants.map(restaurant => (
					<List.Item key={restaurant.id}>
						<List.Header>{restaurant.name}</List.Header>
					</List.Item>
				))}
			</List>
		</div>
	);
};

export default ListFavorites;
