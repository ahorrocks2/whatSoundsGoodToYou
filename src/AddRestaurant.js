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
            <SelectField
              hintText='Food Type'
              underlineFocusStyle={{borderColor: '#5C6BC0'}}
              name='type'
              value={this.state.type}
              onChange={this.handleFoodTypeChange}
            >
              <MenuItem value="Indian" primaryText="Indian" />
              <MenuItem value="Chinese" primaryText="Chinese" />
              <MenuItem value="American" primaryText="American" />
              <MenuItem value="Thai" primaryText="Thai" />
              <MenuItem value="Breakfast" primaryText="Breakfast" />
              <MenuItem value="Vietnamese" primaryText="Vietnamese" />
              <MenuItem value="Japanese" primaryText="Japanese" />
              <MenuItem value="Mexican" primaryText="Mexican" />
              <MenuItem value="Russian" primaryText="Russian" />
              <MenuItem value="Italian" primaryText="Italian" />
              <MenuItem value="French" primaryText="French" />
              <MenuItem value="Greek" primaryText="Greek" />
            </SelectField>
          </div>

          <div>
            <SelectField
              hintText='Neighborhood'
              underlineFocusStyle={{borderColor: '#3949AB'}}
              name='hood'
              value={this.state.hood}
              onChange={this.handleHoodChange}
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
