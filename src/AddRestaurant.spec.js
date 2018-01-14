import React from 'react';
import AddRestaurant from './AddRestaurant';
import { shallow } from 'enzyme';

describe('<AddRestaurant />', () => {
  it('renders the add restaurant component', () => {
    const wrapper = shallow(<AddRestaurant />);
    expect(wrapper).toMatchSnapshot();
  });
});
