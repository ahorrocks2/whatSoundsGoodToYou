import React from 'react';

const RestaurantDetails = props => {
  return (
    <div className="App">
        <h3>{props.restaurant.type}</h3>
        <h3>{props.restaurant.hood}</h3>
    </div>
  )
}

export default RestaurantDetails;
