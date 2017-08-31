import React, { Component } from 'react';
import './App.css';

import AddFavorites from './AddFavorites';
import HeaderPresenter from './HeaderPresenter';

class App extends Component {
  state = {
    
  }
  render() {
    return (
      <div className="App">
        <HeaderPresenter />
        <AddFavorites />
      </div>
    );
  }
}

export default App;
