import React from 'react';
import { List } from 'semantic-ui-react'

const ListFavorites = props => {
	return (
		<div className="App">
			<List selection verticalAlign='middle'>
				<List.Item>
					<List.Content>
						<List.Header value={props.restaurant.name} />
					</List.Content>
				</List.Item>
			</List>
		</div>
	);
};

export default ListFavorites;
