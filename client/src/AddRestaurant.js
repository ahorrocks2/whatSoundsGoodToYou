import React, { Component } from 'react';
import { Input, Form, Select } from 'semantic-ui-react';

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

  handleHoodChange = (event) => {
    this.setState({
      hood: event.target.textContent
    });
  }

  handleFoodTypeChange = (event) => {
    this.setState({
      type: event.target.textContent
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if(this.state.name === '') return;

    this.props.addFavorite(this.state);

    this.setState(BLANK_RESTAURANT);
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
      <div>
        <Form className="addForm" onSubmit={this.handleSubmit}>
          <div>
            <Form.Field
              className="formInput"
              control={Input}
              placeholder='Restaurant Name'
              name='name'
              value={this.state.name}
              onChange={(e) => this.handleChange(e, "name")}
            />
          </div>

          <div>
            <Form.Field
              control={Select}
              placeholder='Food Type'
              options={foodTypes}
              name='type'
              value={this.state.type}
              onChange={(e) => this.handleFoodTypeChange(e)}
            >
            </Form.Field>
          </div>

          <div>
            <Form.Field
              control={Select}
              placeholder='Neighborhood'
              options={neighborhoods}
              name='type'
              value={this.state.hood}
              onChange={(e) => this.handleHoodChange(e)}
            >
            </Form.Field>
          </div>
          <Form.Field>
            <Form.Button fluid color="grey" className="addButton"><span className="otherText">add restaurant</span></Form.Button>
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default AddRestaurant;
