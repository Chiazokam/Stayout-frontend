import React from 'react';
import { shallow } from 'enzyme';
import { Dropdown } from '../../../components/common';

describe('Dropdown Tests', () => {
  const props = {
    menu: ['Sign in'],
    className: 'home-dropdown'
  };

  it('should render correctly', () => {
    const tree = shallow(<Dropdown {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
