import React, { Component } from 'react';
import PropTypes from 'prop-types';

const BLANK_PLACE = {
  name: '',
  type: '',
  hood: ''
}
class AddFavorites extends Component {
  state = {
    name: '',
    type: '',
    hood: ''
  }

  static PropTypes = {
    name: PropTypes.string.required,
    type: PropTypes.string.required,
    hood: PropTypes.string
  }

  handleChange = (e, name) => {
    this.setState({
      [name]: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <form>
          <div>
            <label>Name of Place: </label>
            <input
              name='name'
              value={this.state.name}
              onChange={(e) => this.handleChange(e, "name")}
            />
          </div>

          <div>
            <label>Type of Food: </label>
            <input
              name='type'
              value={this.state.type}
              onChange={(e) => this.handleChange(e, "type")}
            />
          </div>

          <div>
            <label>Neighborhood: </label>
            <input
              name='hood'
              value={this.state.hood}
              onChange={(e) => this.handleChange(e, "hood")}
            />
          </div>

          <button type='submit' onSubmit={this.handleSubmit}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddFavorites;
