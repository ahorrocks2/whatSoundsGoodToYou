import React, { Component } from 'react';

const ListFavorites = (props) => {
  return (
    <div className="App">
      <h1>{props.restaurant.name}</h1>
    </div>
  );
}

export default ListFavorites;
