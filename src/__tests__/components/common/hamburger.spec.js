import React from 'react';
import { shallow } from 'enzyme';
import { Hamburger } from '../../../components/common';

describe('Hamburger Tests', () => {
  it('should render correctly', () => {
    const tree = shallow(<Hamburger />);
    expect(tree).toMatchSnapshot();
  });
});
