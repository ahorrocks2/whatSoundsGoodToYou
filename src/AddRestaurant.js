import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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

  handleSelect = (event, index, value) => {
    this.setState({
      hood: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if(this.state.name === '') return;

    this.props.addFavorite(this.state);

    this.setState(BLANK_RESTAURANT)
  }

  render() {
    return (
      <div className="App">
        <form>
          <div>
            <TextField
              hintText='Restaurant Name'
              underlineFocusStyle={{borderColor: '#9FA8DA'}}
              name='name'
              value={this.state.name}
              onChange={(e) => this.handleChange(e, "name")}
            />
          </div>

          <div>
            <TextField
              hintText='Food Type'
              underlineFocusStyle={{borderColor: '#5C6BC0'}}
              name='type'
              value={this.state.type}
              onChange={(e) => this.handleChange(e, "type")}
            />
          </div>

          <div>
            <SelectField
              hintText='Neighborhood'
              name='hood'
              value={this.state.hood}
              onChange={this.handleSelect}
            >
              <MenuItem value="Northwest" primaryText="Northwest" />
              <MenuItem value="Northeast" primaryText="Northeast" />
              <MenuItem value="Southwest" primaryText="Southwest" />
              <MenuItem value="Southeast" primaryText="Southeast" />
              <MenuItem value="North Portland" primaryText="North Portland" />
            </SelectField>
          </div>

          <RaisedButton default={true} type='submit' onClick={this.handleSubmit} label='Add Restuarant' />
        </form>
      </div>
    );
  }
}

export default AddRestaurant;
