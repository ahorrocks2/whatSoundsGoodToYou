import React from 'react';
import DisplayFavoriteRestaurants from './DisplayFavoriteRestaurants';
import RestaurantDetails from './RestaurantDetails';
import { shallow } from 'enzyme';
import { Accordion } from 'semantic-ui-react';

describe('<DisplayFavoriteRestaurants />', () => {
  const props = {
    restaurants: [
      {id: 1, name: 'test rest', type: 'indian', hood: 'NorthEast'},
      {id: 2, name: 'test rest 2', type: 'korean', hood: 'NorthWest'}
    ],
    isVisible: true
  };

  it('renders the display component', () => {
    const wrapper = shallow(<DisplayFavoriteRestaurants {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Accordion).length).toBe(1);
    expect(wrapper.find('.restaurantDetails').length).toBe(2);
  });
});
