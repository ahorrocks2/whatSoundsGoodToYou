import React from 'react';
import { ListItem } from 'material-ui/List';


const ListFavorites = props => {
	return (
		<div className="App">
			<ListItem><h2>{props.restaurant.name}</h2></ListItem>
		</div>
	);
};

export default ListFavorites;
