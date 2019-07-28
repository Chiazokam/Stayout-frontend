import React from 'react';
import { shallow } from 'enzyme';
import { Logo } from '../../../components/common';

describe('Logo Tests', () => {
  it('should render correctly', () => {
    const tree = shallow(<Logo />);
    expect(tree).toMatchSnapshot();
  });
});
