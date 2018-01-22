import React from 'react';
import Roulette from './Roulette';
import { shallow } from 'enzyme';

describe('<Roulette />', () => {
  const rouletteSpy = jest.fn();
  const randomSpy = jest.fn();

  const props = {
    restaurants: [
      {
        id: 1,
        name: 'test rest',
        type: 'indian',
        hood: 'NorthEast'
      }
    ],
    resultObject: {
      name: 'Generated Restaurant'
    },
    menuUrl: 'www.menu.com',
    generateRandomRestaurant: randomSpy,
    handleRestaurantRoulette: rouletteSpy
  };

  it('renders the roulette component', () => {
    const wrapper = shallow(<Roulette {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should trigger the roulette function', () => {
    const wrapper = shallow(<Roulette {...props} />);
    const rouletteButton = wrapper.find('.rouletteButton');

    rouletteButton.simulate('click');
    expect(rouletteSpy.mock.calls.length).toBe(1);
    expect(randomSpy.mock.calls.length).toBe(0);
  });

  it('should trigger the random function', () => {
    const wrapper = shallow(<Roulette {...props} />);
    const randomButton = wrapper.find('.randomButton');

    randomButton.simulate('click');
    expect(rouletteSpy.mock.calls.length).toBe(1);
    expect(randomSpy.mock.calls.length).toBe(1);
  });
});
