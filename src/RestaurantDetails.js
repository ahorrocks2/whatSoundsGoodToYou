import React from 'react';

const RestaurantDetails = props => {
  return (
    <div className="App">
        <p>{props.restaurant.type}</p>
        <p>{props.restaurant.hood}</p>
    </div>
  )
}

export default RestaurantDetails;
