import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
    })
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
            <TextField
              hintText='Neighborhood'
              underlineFocusStyle={{borderColor: '#3949AB'}}
              name='hood'
              value={this.state.hood}
              onChange={(e) => this.handleChange(e, "hood")}
            />
          </div>

          <RaisedButton default={true} type='submit' onClick={this.handleSubmit} label='Add Restuarant' />
        </form>
      </div>
    );
  }
}

export default AddRestaurant;
