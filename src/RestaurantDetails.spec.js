import React from 'react';
import RestaurantDetails from './RestaurantDetails';
import { shallow } from 'enzyme';

describe('<RestaurantDetails />', () => {
  const props = {
    restaurant: {
      type: 'indian',
      hood: 'NorthEast'
    }
  };

  it('renders the details component', () => {
    const wrapper = shallow(<RestaurantDetails {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
