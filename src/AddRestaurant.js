import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Dropdown } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react'

import PropTypes from 'prop-types';

const BLANK_RESTAURANT = {
  name: '',
  type: '',
  hood: ''
}

class AddRestaurant extends Component {
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
    });
  }

  handleHoodChange = (event, index, value) => {
    this.setState({
      hood: value
    });
  }

  handleFoodTypeChange = (event, index, value) => {
    this.setState({
      type: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if(this.state.name === '') return;

    this.props.addFavorite(this.state);

    this.setState(BLANK_RESTAURANT)
  }


  render() {
    const foodTypes = [
      { key: 'Indian', value: 'Indian', text: 'Indian' },
      { key: 'Chinese', value: 'Chinese', text: 'Chinese' },
      { key: 'American', value: 'American', text: 'American' },
      { key: 'Thai', value: 'Thai', text: 'Thai' },
      { key: 'Breakfast/Brunch', value: 'Breakfast/Brunch', text: 'Breakfast/Brunch' },
      { key: 'Vietnamese', value: 'Vietnamese', text: 'Vietnamese' },
      { key: 'Japanese', value: 'Japanese', text: 'Japanese' },
      { key: 'Mexican', value: 'Mexican', text: 'Mexican' },
      { key: 'Russian', value: 'Russian', text: 'Russian' },
      { key: 'Italian', value: 'Italian', text: 'Italian' },
      { key: 'French', value: 'French', text: 'French' },
      { key: 'Greek', value: 'Greek', text: 'Greek' },
    ];

    const neighborhoods = [
      { key: 'Northwest', value: 'Northwest', text: 'Northwest' },
      { key: 'Northeast', value: 'Northeast', text: 'Northeast' },
      { key: 'Southwest', value: 'Southwest', text: 'Southwest' },
      { key: 'Southeast', value: 'Southeast', text: 'Southeast' },
    ];

    return (
      <div className="App">
        <form>
          <div>
            <Input
              placeholder='Restaurant Name'
              name='name'
              value={this.state.name}
              onChange={(e) => this.handleChange(e, "name")}
            />
          </div>

          <div>
            <Dropdown
              placeholder='Food Type'
              selection
              search
              options={foodTypes}
              name='type'
              default={this.state.type}
              onChange={this.handleFoodTypeChange}
            >
            </Dropdown>
          </div>

          <div>
            <Dropdown
              placeholder='Neighborhood'
              selection
              options={neighborhoods}
              name='type'
              default={this.state.hood}
              onChange={this.handleHoodChange}
            >
            </Dropdown>
          </div>
          <Button basic color="blue" type='submit' onClick={this.handleSubmit}>Add Restaurant</Button>
        </form>
      </div>
    );
  }
}

export default AddRestaurant;
